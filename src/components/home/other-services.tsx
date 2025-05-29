// components/OtherServices.tsx
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { otherServices } from '@/lib/data';

const icons: Record<string, React.ReactNode> = {
  "home-cleaning": <path d="M3 9.5L12 4l9 5.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5Z" />,
  "carpet-cleaning": <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />,
  "duct-cleaning": <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2" />,
  "car-detailing": <path d="M3 13h18l-1.5-5h-15L3 13Zm0 0v5a2 2 0 0 0 2 2h2v-3h10v3h2a2 2 0 0 0 2-2v-5" />,
  "sanitization": (
    <>
      <path d="M12 2v20" />
      <path d="M5 8h14" />
      <path d="M5 16h14" />
    </>
  ),
  "deep-cleaning": (
    <>
      <path d="M3 3h18v18H3V3z" />
      <path d="M9 9h6v6H9z" />
    </>
  ),
};

const OtherServices = () => {
  return (
    <section className="py-1 px-4 mb-10" id="other-services">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-yellow-500 tracking-tight">Other Related Services</h2>
          <p className="text-muted-foreground mt-3 text-lg">
            Explore our range of professional cleaning solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherServices.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.35 }}
              className="relative group p-6 rounded-3xl border shadow-[0_0_0_rgba(0,0,0,0)] transition-all duration-300 hover:shadow-purple-500/20 bg-gradient-to-br from-[#10121d] via-[#0b0d19] to-[#0a0a16] border-gray-700"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  {icons[service.slug]}
                </svg>
              </div>

              <h3 className="text-2xl font-semibold mb-2 transition-colors group-hover:text-primary text-white">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-5 leading-relaxed">{service.desc}</p>

              <Link href={`/other-services/${service.slug}`}>
                <span className="inline-flex items-center text-sm font-medium hover:underline transition-colors text-primary">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
