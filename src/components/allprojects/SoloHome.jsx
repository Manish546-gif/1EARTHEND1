import React from 'react';
import { motion } from 'framer-motion';
import projectimg from '../../assets/projectland.png';

const textVariant = {
  hidden: { y: 40, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const SoloHome = () => {
  return (
    <div className="min-h-screen text-[#FBF0DA] overflow-hidden bg-cover bg-center bg-no-repeat relative">

      {/* Background Image */}
      <img
        data-scroll
        data-scroll-speed="-0.2"
        src={projectimg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end items-start min-h-screen p-8">
        <motion.h1
          className="text-4xl md:text-9xl uppercase w-40 mb-2 sm:text-3xl sm:w-full"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          harmony <br/>
highland
        </motion.h1>
        <motion.p
          className="text-xl md:text-4xl tracking-wider sm:text-lg"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
         velhe, bhor, pune
        </motion.p>
      </div>
    </div>
  );
};

export default SoloHome;
