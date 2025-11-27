import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import mainImage from "../../assets/try1.jpeg";
import smallImage from "../../assets/try2.jpeg";
import TransitionLink from "../common/redirect";

const textVariant = {
  hidden: { y: 40, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.06,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

function EverySpaceSection() {
  const paragraphLinesMobile = [
    "In every creation by One Earth, the spirit  of",
    "harmony remains ever-present.Rooted in",
    " the wisdom of the land,our spaces coexist",
    "with their surroundings.Each design honors",
    "nature’s intelligence—blending",
    "sustainability, tradition, and innovation into",
    "a living narrative of balance and belonging.",
  ];

  const paragraphLinesDesktop = [
    "In every creation by One Earth,the",
    "spirit of harmony is ever-present.",
    "Rooted in the wisdom of the land",
    "and the rhythm of nature, our spaces",
    "are shaped to coexist with their",
    "surroundings. Each design honors",
    "the earth's quiet intelligence",
    "blending tradition,sustainability,",
    "and innovation into aliving narrative",
    "of balance and belonging.",
  ];

  return (
    <div className="min-h-screen bg-[#FBF0DA] flex items-center justify-center p-4 py-10 md:py-20">
      <div className="max-w-[1600px] w-full mx-auto px-4 lg:px-8">
        
        {/* GRID — All columns match center image height */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-16 items-stretch">

          {/* LEFT COLUMN — aligned top & bottom */}
          <div className="flex flex-col justify-between h-full">

            {/* ABOUT LABEL */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            >
              <h5
                className="
                  tracking-[0.3em] text-black font-normal 
                  text-[clamp(14px,4vw,22px)]
                  lg:text-[clamp(25px,1vw,14px)]
                "
              >
                ABOUT
              </h5>
            </motion.div>

            {/* HEADINGS aligned to bottom */}
            <div className="text-black tracking-tight leading-[1.1] text-left mt-4">

              {/* DESKTOP 4 lines */}
              <div className="hidden sm:block">
                {["EVERY", "SPACE", "HOLDS", "A SOUL"].map((word, i) => (
                  <motion.span
                    key={i}
                    className="block whitespace-nowrap text-[clamp(28px,4vw,90px)] font-normal mb-1"
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

              {/* MOBILE 2 lines */}
              <div className="sm:hidden">
                {["EVERY SPACE", "HOLDS A SOUL"].map((line, i) => (
                  <motion.span
                    key={i}
                    className="block whitespace-nowrap text-[clamp(28px,4vw,90px)] font-normal mb-1"
                    variants={textVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                  >
                    {line}
                  </motion.span>
                ))}
              </div>

            </div>
          </div>

          {/* CENTER IMAGE (reference height for alignment) */}
          <div className="flex justify-center lg:justify-start w-full">
            <motion.div
              className="
                relative
                w-full
                max-w-[850px]
                lg:max-w-[850px]
                xl:max-w-[950px]
                h-[650px]   /* DESKTOP FIXED HEIGHT */
                overflow-hidden
              "
              initial={{ opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut", delay: 0.3 }}
            >
              <motion.div
                initial={{ scaleX: 1 }}
                whileInView={{ scaleX: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "right" }}
                className="w-full absolute z-10 h-full bg-[#FBF0DA]"
              />
              <img src={mainImage} alt="Architecture" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* RIGHT COLUMN — paragraph top & small image bottom */}
          <div className="flex flex-col justify-between h-full items-start lg:items-end">

            {/* DESKTOP PARAGRAPH */}
            <div className="hidden sm:block w-full sm:w-[90%] md:w-[80%] lg:w-[85%] xl:w-[70%] text-left space-y-1">
              {paragraphLinesDesktop.map((line, i) => (
                <motion.p
                  key={i}
                  className="text-black leading-[1.4] font-normal text-[3.5vw] sm:text-[2.2vw] md:text-base"
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

            {/* MOBILE */}
            <div className="sm:hidden space-y-2 max-w-[90%] leading-[1.25] text-[clamp(14px,4vw,18px)]">
              {paragraphLinesMobile.map((line, i) => (
                <motion.p
                  key={i}
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 4}
                  className="text-black"
                >
                  {line}
                </motion.p>
              ))}
            </div>

            {/* BUTTON */}
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[85%] xl:w-[70%] text-left mb-6">
              <TransitionLink to="/about">
                <motion.button
                  className="relative cursor-pointer overflow-hidden bg-yellow-600 hover:bg-black text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 group text-[clamp(12px,1vw,16px)]"
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={paragraphLinesDesktop.length + 4}
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

            {/* SMALL IMAGE aligned with bottom of big image */}
            <motion.div
              className="
                w-full sm:w-[70%] md:w-[60%] lg:w-[80%] xl:w-[70%]
                h-[220px] md:h-[260px] lg:h-[280px] xl:h-[200px]
                overflow-hidden relative
              "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.6 }}
            >
              <motion.div
                initial={{ scaleX: 1 }}
                whileInView={{ scaleX: 0 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "circOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "right" }}
                className="w-full absolute z-10 h-full bg-[#FBF0DA]"
              />
              <img src={smallImage} alt="Detail" className="w-full h-full object-cover" />
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default EverySpaceSection;
