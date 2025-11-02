import { motion } from "framer-motion";
import React from "react";
import Line from "../common/Line";

export default function OurProcess() {
  const processSteps = [
    {
      number: 1,
      title: "SITE SELECTION & ACQUISITION",
      description: "We carefully identify and acquire prime land plots, ensuring strategic locations with high growth potential."
    },
    {
      number: 2,
      title: "PLANNING & LAYOUT DESIGN",
      description: "Our experts design thoughtfully planned layouts, optimizing space, accessibility, and infrastructure for a seamless living experience."
    },
    {
      number: 3,
      title: "APPROVALS & COMPLIANCE",
      description: "We handle all legal approvals, clearances, and compliance requirements, giving you a hassle-free investment."
    },
    {
      number: 4,
      title: "INFRASTRUCTURE DEVELOPMENT",
      description: "From roads and utilities to landscaping, we ensure high-quality infrastructure that adds long-term value.",
      highlighted: true
    },
    {
      number: 5,
      title: "PLOT DELIVERY & HANDOVER",
      description: "Plots are delivered on time, with proper documentation, giving you peace of mind and confidence in your investment."
    },
    {
      number: 6,
      title: "POST-DELIVERY SUPPORT",
      description: "Our team remains available for any queries or assistance, ensuring complete satisfaction even after possession."
    }
  ];

  return (
    <div className="min-h-screen  flex items-start mt-10 mb-10 justify-center px-6 lg:px-8 py-16">
      <div className="max-w-8xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          <div className="flex-shrink-0 md:w-4/11">
            <div className="text-center  lg:text-left">
              <h2 className="text-6xl lg:text-8xl  text-black">
                <span className="block">OUR</span>
                <span className="block">PROCESS</span>
              </h2>
            </div>
          </div>

          <div className="flex-1">
               <div className="space-y-6">
                 {processSteps.map((step, index) => (
                   <motion.div 
                     key={step.number} 
                     className="relative"
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-50px" }}
                     transition={{ 
                       duration: 0.6, 
                       delay: index * 0.1,
                       ease: "easeOut"
                     }}
                   >
                     <div className="flex items-start gap-4">
                     
                       <div className="relative flex-shrink-0">
                         <span className={`text-2xl lg:text-2xl font-bold text-black ${
                           step.highlighted ? 'relative' : ''
                         }`}>
                           {step.number}.
                         </span>
                       </div>
                       
                       <div className="flex-1">
                         <p className="text-lg lg:text-xl font-bold text-black uppercase  mb-3">
                           {step.title}
                         </p>
                         <p className="text-sm lg:text-base md:mb-5 mb-5 text-black ">
                           {step.description}
                         </p>
                       </div>
                     </div>
                     
                     {index < processSteps.length  && (
                       <Line/>
                     )}
                   </motion.div>
                 ))}
               </div>
             </div>
        </div>
      </div>
    </div>
  );
}
