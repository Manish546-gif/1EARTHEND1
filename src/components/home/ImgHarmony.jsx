import React from "react";
import { motion } from "framer-motion";
import craft2 from "../../assets/Rectangle 79.png";
import TransitionLink from "../common/redirect";

// 🌿 Base fade + slide-in variant
const textVariant = {
  hidden: { y: 50, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: i * 0.18,
      ease: [0.33, 1, 0.68, 1], // smoother spring-like bezier
    },
  }),
};

// 🌿 Section entrance fade for coordinated flow
const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const ImgHarmony = () => {
  return (
    <motion.section
      className="bg-[#FBF0DA] min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-14 py-20 overflow-hidden text-[#0a0a0a] relative"
      variants={containerVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Top Label */}
      <motion.p
        variants={textVariant}
        custom={0}
        className="tracking-[0.3em] text-sm md:text-base mb-12 uppercase text-center lg:text-left"
      >
        SERVICE
      </motion.p>

      {/* Headings section */}
      <div className="w-full relative leading-[0.95] text-black">
        {/* DESIGN IN */}
        <motion.h1
          custom={1}
          variants={textVariant}
          className="text-[clamp(3.2rem,10vw,11rem)] text-center font-medium"
        >
          DESIGN IN
        </motion.h1>

        {/* HARMONY + Image */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-4 relative">
          <motion.h1
            custom={2}
            variants={textVariant}
            className="text-[clamp(3.2rem,10vw,11rem)] text-center lg:text-left font-medium"
          >
            HARMONY
          </motion.h1>

          <motion.div
            className="relative w-[280px] sm:w-[360px] md:w-[440px] overflow-hidden  lg:mt-0"
            variants={textVariant}
            custom={2.5}
          >
            {/* Reveal Mask */}
            <motion.div
              initial={{ scaleX: 1 }}
              whileInView={{ scaleX: 0 }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
              viewport={{ once: true }}
              style={{ transformOrigin: "right" }}
              className="absolute inset-0 bg-[#FBF0DA] z-10"
            />

            {/* Smooth Zoom-In Image */}
            <motion.img
              src={craft2}
              alt="Interior Design"
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 2.2, ease: [0.25, 1, 0.5, 1] }}
              viewport={{ once: true }}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Paragraph + WITH EARTH */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-start gap-6 mt-8 lg:mt-6">
          <motion.p
            custom={3}
            variants={textVariant}
            className="max-w-md text-base sm:text-lg md:text-base leading-relaxed text-center lg:text-left text-gray-800"
          >
            Each One Earth creation blends thoughtful design with sustainable
            innovation — crafting spaces that reflect your vision while honoring
            the land they stand on.
          </motion.p>

          <motion.h1
            custom={4}
            variants={textVariant}
            className="text-[clamp(3.2rem,8.9vw,10rem)] font-medium text-black leading-none text-center lg:text-left"
          >
            WITH EARTH
          </motion.h1>
        </div>
      </div>

      {/* Button */}
      <motion.div
        custom={5}
        variants={textVariant}
        className="mt-5 flex justify-center lg:justify-start"
      >
        <TransitionLink to="/services">
          <motion.button
            className="relative overflow-hidden bg-yellow-600 hover:bg-black hover:cursor-pointer text-white px-7 py-3.5 rounded-full text-base sm:text-lg font-medium transition-colors duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative block transition-transform duration-300 ease-in-out group-hover:-translate-y-20">
              OUR SERVICES
            </span>
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
              OUR SERVICES
            </span>
          </motion.button>
        </TransitionLink>
      </motion.div>
    </motion.section>
  );
};

export default ImgHarmony;
