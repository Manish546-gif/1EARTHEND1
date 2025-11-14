import { motion } from "framer-motion";
import React from "react";
import img1 from "../../assets/team13.JPG";
import img2 from "../../assets/team12.jpeg";
import Line from "../common/Line";

const textVariant = {
  hidden: { y: 40, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function OurTeam() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-10">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
          {/* LEFT HEADING */}
          <div className="flex-shrink-0 w-full lg:w-1/4 text-center lg:text-left">
            {["OUR", "TEAM"].map((word, i) => (
              <motion.span
                key={i}
                className="block text-black font-normal leading-[1.05] text-[clamp(28px,4vw,90px)]"
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

          {/* TEAM MEMBERS */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-10 md:gap-16 lg:gap-20 w-full lg:w-3/4">
            {/* MEMBER 1 */}
            <div className="flex flex-col items-center lg:items-start w-full sm:w-[45%] lg:w-[40%]">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mb-6 overflow-hidden">
                <img src={img1} alt="Shreyash Tarawade" className="w-full h-full object-cover" />
              </div>

              {/* Name + designation (no gap between them) */}
              <div className="text-center lg:text-left w-full">
                <div className="leading-tight">
                  <motion.h3
                    className="text-lg sm:text-xl md:text-2xl text-black uppercase tracking-wide mb-0"
                    variants={textVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={2}
                  >
                    SHREYASH TARAWADE
                  </motion.h3>
                  <motion.p
                    className="text-xs sm:text-sm md:text-base font-sans text-black uppercase tracking-wide mb-0"
                    variants={textVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={3}
                  >
                    MANAGING DIRECTOR
                  </motion.p>
                </div>

                {/* now add space before line */}
                <div className="mt-2">
                  <Line />
                </div>
              </div>
            </div>

            {/* MEMBER 2 */}
            <div className="flex flex-col items-center lg:items-start w-full sm:w-[45%] lg:w-[40%]">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mb-6 overflow-hidden">
                <img src={img2} alt="Sonal Jadhav" className="w-full h-full object-cover" />
              </div>

              {/* Name + designation (no gap between) */}
              <div className="text-center lg:text-left w-full">
                <div className="leading-tight">
                  <motion.h3
                    className="text-lg sm:text-xl md:text-2xl text-black uppercase tracking-wide mb-0"
                    variants={textVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={4}
                  >
                    SONAL JADHAV
                  </motion.h3>
                  <motion.p
                    className="text-xs sm:text-sm md:text-base font-sans text-black uppercase tracking-wide mb-0"
                    variants={textVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={5}
                  >
                    CHIEF ARCHITECT
                  </motion.p>
                </div>

                {/* space before line */}
                <div className="mt-2">
                  <Line />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}