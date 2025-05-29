// components/service-process.tsx
'use client';

import { motion } from 'framer-motion';

interface ProcessStep {
  title: string;
  description: string;
}

interface ServiceProcessProps {
  steps: ProcessStep[];
}

export const ServiceProcess = ({ steps }: ServiceProcessProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="py-16 bg-black/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="relative"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-yellow-500 to-purple-600" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative mb-16 flex justify-between items-center"
              variants={itemVariants}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? '' : 'invisible'}`} />
              <div className="w-1/12 flex justify-center">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-yellow-500 to-purple-600 flex items-center justify-center">
                  <span className="text-black font-bold">{index + 1}</span>
                </div>
              </div>
              <div className="w-5/12 p-6 bg-gray-800/30 backdrop-blur-sm rounded-lg">
                <h3 className="text-2xl font-bold text-yellow-500 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};