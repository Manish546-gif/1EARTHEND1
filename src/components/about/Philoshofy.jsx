import React from "react";
import { motion } from "framer-motion";
import origin2 from '../../assets/origin3.png';
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

const originsLines = [
  "One Earth Properties is more than",
  "a real estate brand - it’s a vision",
  "built on legacy, balance, and purpose.",
  "We are a collective of dreamers,",
  "planners, and creators who believe",
  "that land is not just owned -",
  "it is honoured."
];

const philosophyDescLines = [
  "Our culture is rooted in integrity,",
  "sustainability, and timeless design -",
  "values that define every community",
  "we build. Guided by the rhythm",
  "of nature, and inspired by India’s",
  "deep cultural heritage. One Earth",
  "Properties creates spaces that breathe",
  "freely, evolve gracefully, and stand",
  "resiliently against time."
];

export default function Philosophy() {
  const heading = "WHAT WE STAND FOR".split(" ");

  return (
    <div className="flex flex-col md:flex-row bg-[#FBF0DA] justify-center min-h-screen mb-10 p-8 md:gap-15 xl:gap-15 gap:10 md:mt-20">
      <div className="text-5xl md:text-7xl  mb-8 md:mb-0 md:mr-20 text-left">
        {heading.map((word, i) => (
          <motion.p
            key={i}
            className="block"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            {word}
          </motion.p>
        ))}
      </div>
      <div className="mb-6 md:w-3/6 md:ml-10">
          <motion.h3
            className=" mb-2"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
          >
            OUR PHILOSOPHY
          </motion.h3>
          <div className="md:text-lg mb-2 md:mb-28">
            {originsLines.map((line, i) => (
              <motion.p
                key={i}
                className="block"
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={5 + i}
              >
                {line}
              </motion.p>
            ))}
          </div>
          <div className="md:text-lg">
            {philosophyDescLines.map((line, i) => (
              <motion.p
                key={i}
                className="block"
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={7 + i}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>
     
      <div className="md:ml-32 w-full md:w-6/9 text-left">
      <div className="flex-shrink-0  md:h-130 relative w-full md:w-full mb-8 overflow-hidden md:mb-5">
      <motion.div
                initial={{ scaleX: 1, opacity: 1 }}
                whileInView={{ scaleX: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.6, ease: "circOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "right" }}
                className="w-full origin-right absolute z-10 h-full bg-[#FBF0DA]"
              />
              <img src={origin2} alt="" className="w-full h-full bg-cover" />
      </div>
        <div>
          <motion.h3
            className="font-bold mb-2"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={9}
          >
            OUR PHILOSOPHY
          </motion.h3>
          <motion.ul className=" space-y-1">
            <motion.li
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={10}
            >
              Innovation
            </motion.li>
            <Line />
            <motion.li
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={11}
            >
              Legacy
            </motion.li>
            <Line />
            <motion.li
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={12}
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
