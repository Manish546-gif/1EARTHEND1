import React from "react";
import { motion } from "framer-motion";
import origin2 from "../../assets/origin2.png";
import Line from "../common/Line";

/* ================================
   ✨ Smooth, Professional Text Animations
================================ */
const textVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // “easeOutExpo” curve for elegance
    },
  }),
};

export default function Origin() {
  const heading = "DESIGNING IN HARMONY".split(" ");

  const originLines = [
    "One Earth Properties was founded",

    "singular with a vision – to redefine real",
    "estate by uniting sustainability, culture,",
    "and modern living. Rooted in Pune’s",
    "sence landscapes, our journey began",
    "with a simple belief: that land is not",
    "just to be developed, but to be nurtured.",
  ];

  const philosophyLines = [
    "Inspired by India’s deep connection to",
    "nature and timeless craftsmanship, we",
    "create spaces that coexist with their",
    "surroundings where innovation serves the",
    "Earth, and design becomes an expression",
    "of balance.Each project stands as a",
    "testament to harmony, integrity, and renewal.",
  ];

  return (
    <section className="w-full min-h-screen bg-[#FBF0DA] px-8 lg:px-10 py-20 flex flex-col lg:flex-row gap-16">
      
      {/* LEFT COLUMN — HEADING */}
      <div className="w-full lg:w-1/4 text-left">
        {heading.map((word, i) => (
          <motion.span
            key={i}
            className="block text-black font-normal leading-[1.05] text-[clamp(28px,4vw,90px)] whitespace-nowrap"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            {word}
          </motion.span>
        ))}
      </div>

      {/* MIDDLE COLUMN — IMAGE */}
      <div className="w-full lg:w-2/4 flex justify-center">
        <div className="w-full max-w-xl h-[400px] sm:h-[500px] lg:h-[650px] xl:h-[700px] overflow-hidden relative">
          <motion.div
            initial={{ scaleX: 1 }}
            whileInView={{ scaleX: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute inset-0 bg-[#FBF0DA] z-10 origin-right"
          />
          <img
            src={origin2}
            alt="Origin"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* RIGHT COLUMN — TEXT */}
      <div className="w-full lg:w-1/4 text-black flex flex-col gap-10">
        
        {/* OUR ORIGINS */}
        <div>
          <motion.h3
            className="text-[clamp(14px,1.6vw,18px)] font-semibold tracking-wide mb-4"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={20}
          >
            OUR ORIGINS
          </motion.h3>

          <div className="space-y-1 mb-6">
            {originLines.map((line, i) => (
              <motion.p
                key={i}
                className="leading-[1.5] text-[clamp(16px,1.2vw,18px)]"
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={21 + i}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <div className="space-y-1">
            {philosophyLines.map((line, i) => (
              <motion.p
                key={i}
                className="leading-[1.5] text-[clamp(16px,1.2vw,18px)]"
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={40 + i}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>

        {/* OUR VALUES */}
        <div>
          <motion.h3
            className="text-[clamp(14px,1.6vw,18px)] font-semibold tracking-wide mb-4"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={60}
          >
            OUR VALUES
          </motion.h3>

          <motion.ul className="space-y-1 text-[clamp(16px,1.2vw,18px)] leading-[1.45]">
            {["Harmony", "Integrity", "Sustainability"].map((value, i) => (
              <motion.p
                key={i}
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={61 + i}
              >
                {value}
                <Line />
              </motion.p>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
