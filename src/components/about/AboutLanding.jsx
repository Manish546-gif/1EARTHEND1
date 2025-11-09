import React from "react";
import { motion } from "framer-motion";
import aboutland from "../../assets/aboutland.png";

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

export default function AboutLanding() {
  const paragraphLines = [
    "One Earth Properties creates",
    "spaces that live in harmony with",
    "nature. Guided by sustainability,",
    "balance, and purpose, each project",
    "is designed to evolve with time ",
    "while hovering the land it stands on.",
    "We don't just build, we nurture",
    "legacies that connect with people,",
    "place, and planet.",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden text-[#FBF0DA] flex items-center justify-center">
      {/* Background Image */}
      <img
        data-scroll
        data-scroll-speed="-0.2"
        src={aboutland}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-8 w-full h-screen flex items-center justify-center">
        
        {/* ---- Desktop Layout ---- */}
        <div className="hidden sm:block w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <motion.h1
              className="text-[clamp(28px,4vw,90px)] font-normal"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              ABOUT US
            </motion.h1>
          </div>

          <div className="absolute lg:bottom-12 bottom-4 left-2 lg:left-8">
            <motion.h5
              className="text-xl font-light tracking-widest transform origin-left"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
            >
              SCROLL
            </motion.h5>
          </div>

          <div className="absolute lg:bottom-20 bottom-28 right-6 px-3 lg:right-8 max-w-md xl:max-w-xs">
            <div className="space-y-1">
              {paragraphLines.map((line, i) => (
                <motion.p
                  key={i}
                  className="text-[#FBF0DA] leading-[1.4] font-normal text-[3.5vw] sm:text-[2.2vw] md:text-base"
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={1 + i}
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </div>
        </div>

        {/* ---- Mobile Layout ---- */}
        <div className="sm:hidden relative w-full h-full flex flex-col justify-center ">
          {/* About Heading (aligned left) */}
          <motion.h1
            className="text-4xl  tracking-wide text-left mt-10"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            ABOUT US
          </motion.h1>

          {/* Paragraph (aligned left) */}
          <motion.div
            className="w-full max-w-md text-left mt-6 space-y-1"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            {paragraphLines.map((line, i) => (
              <motion.p
                key={i}
                className="text-[#FBF0DA] leading-[1.4] font-normal text-[3.5vw] sm:text-[2.2vw] md:text-base"
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1 + i}
              >
                {line}
              </motion.p>
            ))}
          </motion.div>

          {/* SCROLL text (bottom-left) */}
          <motion.h5
            className="absolute bottom-6 left-0 text-md font-light tracking-widest"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={10}
          >
            SCROLL
          </motion.h5>
        </div>
      </div>
    </div>
  );
}
