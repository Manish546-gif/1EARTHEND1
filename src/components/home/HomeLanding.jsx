import React from "react";
import { motion } from "framer-motion";
import bgVideo from "../../assets/HomeLanding.mp4";

const textVariant = {
  hidden: { y: 40, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const HeroSection = () => {
  const leftText = [
    "Creating timeless spaces where",
    "nature, culture, and design coexist",
    "in perfect balance.",
  ];

  const heading = ["SUSTAINABLE", "LIVING", "EXPERIENCES"];

  const rightText = [
    "We craft destinations that inspire",
    "a deeper connection with the",
    "Earth, where architecture",
    "breathes with the landscape, and",
    "every detail embodies mindful",
    "luxury. Our spaces invite you to",
    "live consciously, in harmony with",
    "the Earth.",
  ];

  return (
    <section className="relative bg-black w-full h-screen overflow-hidden flex flex-col md:flex-row justify-end md:justify-between px-6 md:px-10 py-6 md:py-10">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex w-full flex-col md:flex-row justify-end md:justify-between items-start md:items-end gap-8 md:gap-0 mt-auto">
        {/* Left Text */}
        <div className="max-w-xs md:max-w-sm text-[#FBF0DA] sm:text-left">
          {leftText.map((line, i) => (
            <motion.p
              key={i}
              className="block font-Grenda text-[4vw] sm:text-[2.5vw] md:text-2xl"
              variants={textVariant}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              {line}
            </motion.p>
          ))}

          <div className="text-[#FBF0DA] mt-6 md:mt-20 text-left">
            {heading.map((word, i) => (
              <motion.span
                key={i}
                className="block font-Grenda text-[8vw] sm:text-[6vw] md:text-9xl"
                variants={textVariant}
                initial="hidden"
                animate="visible"
                custom={i + 3}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Right Text */}
        <div className="max-w-full md:max-w-xs text-[#FBF0DA] font-Grenda text-left">
          {rightText.map((line, i) => (
            <motion.p
              key={i}
              className="block text-[3.5vw] sm:text-[2.2vw] md:text-base"
              variants={textVariant}
              initial="hidden"
              animate="visible"
              custom={i + 6}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
