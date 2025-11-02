import React from "react";
import { motion } from "framer-motion";
import origin2 from "../../assets/origin2.png";
import Line from "../common/Line";

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

const originLines = [
  "One Earth Properties was",
  "founded with a singular",
  "vision – to redefine real",
  "estate by uniting sustainability,",
  "culture, and modern living.",
  "Rooted in Pune’s serene",
  "landscapes,our journey began",
  " with a simple belief:",
  "that land is not just to be",
  "developed,but to be nurtured."
];

const philosophyLines = [
  "Inspired by India’s deep",
  "connection to nature and",
  "timeless craftsmanship,",
  "we create spaces that coexist",
  "with their surroundings",
  "where innovation serves the",
  " Earth, and design becomes",
  "an expression of balance. Each",
  "project stands as a testament to",
  "harmony, integrity, and renewal."
];

export default function Origin() {
  const heading = "DESIGNING IN HARMONY".split(" ");

  return (
    <div className="flex flex-col lg:flex-row bg-[#FBF0DA] justify-center md:mb-10 min-h-screen gap-10 md:mt-20 px-6 sm:px-8 lg:px-0 py-10 lg:py-0">
      {/* Heading Section */}
      <div className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl  md:mb-0 lg:mr-12 text-left w-full lg:w-auto">
        {heading.map((word, i) => (
          <motion.span
            key={i}
            className="block"
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

      {/* Image Section */}
      <div className="flex-shrink-0 relative w-full sm:w-4/5 md:w-3/5 lg:w-[40%]  overflow-hidden md:mb-0 mx-auto lg:mx-0">
        <motion.div
          initial={{ scaleX: 1, opacity: 1 }}
          whileInView={{ scaleX: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: "circOut" }}
          viewport={{ once: true }}
          style={{ transformOrigin: "right" }}
          className="w-full origin-right absolute z-10 h-full bg-[#FBF0DA]"
        />
        <img src={origin2} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/6 text-left md:ml-22 px-1 sm:px-0">
        <div className="mb-6">
          <motion.h3
            className="mb-2 text-base sm:text-lg"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            OUR ORIGINS
          </motion.h3>
          <div className="mb-2 md:mb-28">
            {originLines.map((line, i) => (
              <motion.p
                key={i}
                className="block text-sm sm:text-base leading-relaxed"
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
          <div className="text-sm sm:text-base leading-relaxed">
            {philosophyLines.map((line, i) => (
              <motion.p
                key={i}
                className="block"
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3 + i}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>
        <div>
          <motion.h3
            className="font-bold mb-2 text-base sm:text-lg"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
          >
            OUR ORIGINS
          </motion.h3>
          <motion.ul className="space-y-1 text-sm sm:text-base">
            <motion.li
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={6}
            >
              Harmony
            </motion.li>
            <Line />
            <motion.li
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={7}
            >
              Integrity
            </motion.li>
            <Line />
            <motion.li
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={8}
            >
              Sustainability
            </motion.li>
            <Line />
          </motion.ul>
        </div>
      </div>
    </div>
  );
}
