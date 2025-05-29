"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  gradientColor: string;
  variants?: Variants;
}

const ServiceCard = ({
  id,
  title,
  description,
  icon,
  gradientColor,
  variants,
}: ServiceCardProps) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/service/${id}`);
  };

  return (
    <motion.div variants={variants}>
      <Card
        onClick={handleCardClick}
        className="bg-white shadow-[0_4px_10px_rgba(0,0,0,0.05),_0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.1),_0_10px_40px_rgba(0,0,0,0.15)]  backdrop-blur-sm border border-green-600 hover:border-[#ff6630] transition-all duration-300 overflow-hidden group cursor-pointer w-[380px]"
      >
        <div className="p-6 h-[400px] w-[350px] flex flex-col ">
          <div
            className={`w-14 h-14 rounded-lg mb-4 flex items-center justify-center ${gradientColor} text-white transform transition-transform group-hover:scale-110`}
          >
            {icon}
          </div>

          <h3 className="text-xl mb-3 text-[#000000] font-bold group-hover:text-[#2bba53] transition-colors">
            {title}
          </h3>

          <p className="text-gray-800 mb-6 flex-grow text-[16px]">{description}</p>

          <div className="inline-flex items-center font-black  hover:from-blue-300 hover:to-blue-700  text-[#0d0b32]  transition-colors mt-auto">
            Learn More
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
