'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import ServiceCard from '@/components/ui/ServiceCard';

import {
  BarChart3,
  Megaphone,
  PenTool,
  Instagram,
  Search,
  
} from 'lucide-react';

const services = [
  {
    id: 1,
    slug: 'hr-Services',
    title: 'HR Services',
    description:
      'Logix Solutions provides HR services for all business levels. From trainees to executives; we are experts in Executive Search, Recruitment & Mass Hiring, HR Outsourcing, Training and Development (T&D) , Performance Management, Payroll Services, and  HR Audit Services.',
    icon: <BarChart3 className="h-8 w-8" />,
    color: 'from-purple-600 to-purple-800',
  },
  {
    id: 2,
    slug: 'innovative-Solution',
    title: 'Innovative Business Solution',
    description:
      'Logix Solutions offers comprehensive services, including Accounting & Bookkeeping, Corporate & Secretarial Services, and Taxation. We specialize in Merger & Acquisition Advisory and provide expert guidance to Start-ups and Small',
    icon: <Megaphone className="h-8 w-8" />,
    color: 'from-amber-500 to-amber-700',
  },
  {
    id: 3,
    slug: 'smart-enterprise-solutions',
    title: 'Smart Enterprise Solutions',
    description:
      'Logix Solutions enhances current operations and aligns with market practices, promoting innovation through a commitment to change, continuous learning, and customer focus.',
    icon: <PenTool className="h-8 w-8" />,
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 4,
    slug: 'academic-excellence-program',
    title: 'Academic Excellence Program',
    description:
      'Logix Solutions offers a variety of services in different domains of the education sector to meet your needs and help you grow.',
    icon: <Instagram className="h-8 w-8" />,
    color: 'from-pink-600 to-pink-800',
  },
  {
    id: 5,
    slug: 'facilities-management',
    title: 'Facilities Management',
    description:
      'With a team of experienced professionals, Logix Solutions provides reliable facilities tailored to your specific needs, allowing you to focus on your core business ',
    icon: <Search className="h-8 w-8" />,
    color: 'from-green-600 to-green-800',
  },
];

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="">
      {/* Heading */}
      <div className="flex items-center justify-center gap-1 mt-3">
        <div className="h-[40px] w-1 bg-green-500 rounded-3xl" />
      </div>
      <div className="flex items-center justify-center gap-1 mt-3 text-[40px] text-[#FF6630] font-semibold">
        <h2>Services</h2>
      </div>
      <div className="flex items-center justify-center gap-1 mt-3 mb-8">
        <div className="h-[40px] w-1 bg-green-500 rounded-3xl" />
      </div> 
    {/* card */}
    <div
      id="services"
      className="relative py-10 bg-white overflow-hidden"
      ref={ref}
    >
      <div className="relative container mx-auto px-4 md:px-[140px] z-10">
         <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-[18px]"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Link href={`/service/${service.slug}`}>
                <ServiceCard
                  id={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  gradientColor={`bg-gradient-to-br ${service.color}`}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default Services;
