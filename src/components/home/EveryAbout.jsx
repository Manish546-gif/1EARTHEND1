import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import mainImage from "../../assets/Rectangle 3.png";
import smallImage from "../../assets/Rectangle 51.png";
import TransitionLink from "../common/redirect";

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

function EverySpaceSection() {
  const paragraphLines = [
    "In every creation by One Earth,the spirit",
    "of harmony is ever-present.",
    "Rooted in the wisdom of the land and the ",
    "rhythm of nature, our spaces are shaped",
    "to coexist with their surroundings.",
    "Each design honors the earth's quiet",
    " intelligence blending tradition,",
    "sustainability, and innovation into a",
    "living narrative of balance and belonging.",
  ];

  return (
    <div className="min-h-screen bg-[#FBF0DA] flex items-center justify-center p-4 py-10">
      <div className="max-w-[1600px] w-full mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-16 items-center">

          {/* Column 1 */}
          <div className="flex flex-col justify-between w-full min-h-[200px] sm:min-h-[450px] md:min-h-[600px]">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            >
              <h5
                className="tracking-[0.3em] text-black mt-4 sm:mt-6"
                style={{
                  fontSize: "clamp(0.6rem, 1vw, 0.9rem)",
                  fontWeight: 400,
                }}
              >
                ABOUT
              </h5>
            </motion.div>

            <div
              className="text-black tracking-tight mt-6 md:mt-0 leading-[1.1]"
              style={{
                fontSize: "clamp(2rem, 4vw, 4.5rem)",
                fontWeight: 400,
              }}
            >
              {["EVERY", "SPACE", "HOLDS", "A SOUL"].map((word, i) => (
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
          </div>

          {/* Column 2 */}
          <div className="flex justify-center lg:justify-start w-full">
            <motion.div
              className="w-full max-w-[650px] md:max-w-[750px] lg:max-w-[850px] xl:max-w-[950px] h-[400px] sm:h-[500px] lg:h-[650px] xl:h-[700px] overflow-hidden relative"
              initial={{ opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut", delay: 0.3 }}
            >
              <motion.div
                initial={{ scaleX: 1, opacity: 1 }}
                whileInView={{ scaleX: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "right" }}
                className="w-full origin-right absolute z-10 h-full bg-[#FBF0DA]"
              />
              <img
                src={mainImage}
                alt="Modern sustainable house"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Column 3 — now perfectly right-aligned */}
          <div className="flex flex-col justify-between lg:justify-center items-start lg:items-end w-full gap-10 mt-5 md:mt-8 lg:mt-0 text-right">
            {/* Paragraphs */}
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[85%] xl:w-[70%] text-left  space-y-1 lg:mb-10">
              {paragraphLines.map((line, i) => (
                <motion.p
                  key={i}
                  className="text-black"
                  style={{
                    fontSize: "clamp(1rem, 1.2vw, 1rem)",
                    fontWeight: 400,
                    lineHeight: "1.6",
                  }}
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 4}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            {/* Button */}
            <div className="w-full flex justify-start lg:justify-end">
                <TransitionLink to="/about">
                  <motion.button
                    className="relative overflow-hidden bg-yellow-600 hover:bg-black text-white px-8 py-3 rounded-full text-sm font-medium transition-colors duration-300 group"
                    variants={textVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={paragraphLines.length + 4}
                  >
                    <span className="relative block transition-transform duration-300 ease-in-out group-hover:-translate-y-20">
                      ABOUT US
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                      ABOUT US
                    </span>
                  </motion.button>
                </TransitionLink>
            </div>

            {/* Small Image */}
            <motion.div
              className="w-full sm:w-[70%] md:w-[60%] lg:w-[80%] xl:w-[70%] self-center lg:self-end h-[180px] sm:h-[220px] md:h-[260px] lg:h-[280px] xl:h-[200px] overflow-hidden relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.6 }}
            >
              <motion.div
                initial={{ scaleX: 1, opacity: 1 }}
                whileInView={{ scaleX: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "circOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "right" }}
                className="w-full origin-right absolute z-10 h-full bg-[#FBF0DA]"
              />
              <img
                src={smallImage}
                alt="Sustainable architecture detail"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EverySpaceSection;
