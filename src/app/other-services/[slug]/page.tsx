'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { otherServices } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Check, Rocket, BarChart, Shield, Infinity, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

import Link from 'next/link';
import { use } from 'react';

interface Props {
  params: Promise<{ slug: string }>;
}

const ServiceDetailPage = ({ params }: Props) => {
  const { slug } = use(params);
  const service = otherServices.find((s) => s.slug === slug);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // simulate a short loading time
    return () => clearTimeout(timer);
  }, []);

  if (!service) return notFound();

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-950 to-black">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-500 mb-6" />
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-pulse">
          Loading Stratix Magic...
        </h2>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Section */}
      <motion.div
        className="relative overflow-hidden pt-32 pb-48"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-purple-500/10 transform -skew-y-6 scale-125" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services">
            <Button variant="outline" className="mb-8 border-gray-700 text-gray-300 hover:bg-gray-800">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
            </Button>
          </Link>
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6">
              {service.title}
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-12"
            variants={itemVariants}
          >
            {service.desc}
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-bold rounded-lg"
            >
              <Rocket className="mr-3 h-6 w-6" />
              Start Your Project Now
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          {[{
            icon: <BarChart className="h-12 w-12 text-yellow-500 mb-4" />,
            title: "250% ROI",
            desc: "Average client return on investment"
          },
          {
            icon: <Infinity className="h-12 w-12 text-yellow-500 mb-4" />,
            title: "24/7 Support",
            desc: "Round-the-clock dedicated assistance"
          },
          {
            icon: <Shield className="h-12 w-12 text-yellow-500 mb-4" />,
            title: "100% Secure",
            desc: "Enterprise-grade security protocols"
          }].map((stat, index) => (
            <motion.div
              key={index}
              className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700"
              whileHover={{ scale: 1.05 }}
            >
              {stat.icon}
              <h3 className="text-2xl font-bold text-white mb-2">{stat.title}</h3>
              <p className="text-gray-400">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      

      {/* Benefits Section */}
      <div className="py-24 bg-gradient-to-b from-gray-800/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Transformative Benefits
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Customized strategies tailored to your specific business goals",
              "Data-driven approach with regular performance reports",
              "Expert team with years of industry experience",
              "Transparent pricing with no hidden fees",
              "Continuous optimization based on real-time insights"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center p-6 bg-gray-800/30 rounded-xl backdrop-blur-sm"
                whileHover={{ x: 10 }}
              >
                <Check className="h-8 w-8 text-green-500 mr-4 flex-shrink-0" />
                <span className="text-xl text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-purple-600 opacity-10" />
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Revolutionize Your Business?
          </h2>
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-bold rounded-lg px-16 py-8"
          >
            <Rocket className="mr-3 h-8 w-8" />
            Launch Your Success Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
