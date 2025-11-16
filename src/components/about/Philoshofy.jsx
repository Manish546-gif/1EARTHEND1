import React from "react";
import { motion } from "framer-motion";
import origin2 from "../../assets/origin3.png";
import Line from "../common/Line";

/* Faster + smoother animation */
const textVariant = {
  hidden: { y: 25, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.06,     // quicker stagger
      duration: 0.3,       // faster slide + fade
      ease: "easeOut",
    },
  }),
};

/* Content */
const originsLines = [
  "One Earth Properties is more than",
  "a real estate brand - it’s a vision",
  "built on legacy, balance, and purpose.",
  "We are a collective of dreamers,",
  "planners, and creators who believe",
  "that land is not just owned -",
  "it is honoured.",
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
  "resiliently against time.",
];

export default function Philosophy() {
  const heading = "WHAT WE STAND FOR".split(" ");

  return (
    <section className="w-full min-h-screen bg-[#FBF0DA] px-8 lg:px-20 py-20 flex flex-col md:flex-row gap-16">

      {/* LEFT HEADING */}
      <div className="w-full md:w-1/3 text-left">
        {heading.map((word, i) => (
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

      {/* MIDDLE TEXT BLOCK */}
      <div className="w-full md:w-1/3 text-left">
        {/* MOBILE VIEW */}
        <div className="md:hidden">
          <motion.h3
            className="text-[clamp(16px,1.8vw,20px)] font-semibold tracking-wide mb-4"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={8}
          >
            OUR PHILOSOPHY
          </motion.h3>

          {/* FIRST PARAGRAPH */}
          <div className="space-y-1 mb-8">
            {originsLines.map((line, i) => (
              <motion.p
                key={i}
                className="text-black leading-[1.4] text-[clamp(13px,1.2vw,18px)]"
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={9 + i}
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* SECOND PARAGRAPH */}
          <div className="space-y-1">
            {philosophyDescLines.map((line, i) => (
              <motion.p
                key={i}
                className="text-black leading-[1.4] text-[clamp(13px,1.2vw,18px)]"
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={18 + i}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:block">
          <motion.h3
            className="text-[clamp(14px,1.6vw,18px)] font-semibold tracking-wide mb-4"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={8}
          >
            OUR PHILOSOPHY
          </motion.h3>

          {/* FIRST PARAGRAPH */}
          <div className="space-y-1 mb-8">
            {originsLines.map((line, i) => (
              <motion.p
                key={i}
                className="text-black leading-[1.4] text-[clamp(13px,1.2vw,18px)]"
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={9 + i}
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* SECOND PARAGRAPH */}
          <div className="space-y-1">
            {philosophyDescLines.map((line, i) => (
              <motion.p
                key={i}
                className="text-black leading-[1.4] text-[clamp(13px,1.2vw,18px)]"
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={18 + i}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>
      </div>

      {/* IMAGE + VALUES */}
      <div className="w-full md:w-1/3 text-left">
        {/* MOBILE VIEW */}
        <div className="md:hidden">
          {/* IMAGE */}
          <div className="w-full h-[400px] sm:h-[500px] lg:h-[650px] xl:h-[700px] mb-10 overflow-hidden relative">
            <motion.div
              initial={{ scaleX: 1 }}
              whileInView={{ scaleX: 0 }}
              transition={{
                duration: 0.75,   // faster curtain
                delay: 0.25,      // synced with heading + text
                ease: "circOut"
              }}
              viewport={{ once: true }}
              className="absolute inset-0 bg-[#FBF0DA] z-10 origin-right"
            />

            <img src={origin2} alt="Philosophy" className="w-full h-full object-cover" />
          </div>

          {/* VALUES LIST */}
          <motion.h3
            className="text-[clamp(16px,1.8vw,20px)] font-semibold tracking-wide mb-4"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={30}
          >
            OUR VALUES
          </motion.h3>

          <motion.ul className="space-y-1 text-[clamp(13px,1.2vw,18px)] leading-[1.45]">
            {["Innovation", "Legacy", "Sustainability"].map((item, i) => (
              <React.Fragment key={i}>
                <motion.li
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={31 + i}
                >
                  {item}
                </motion.li>
                <Line />
              </React.Fragment>
            ))}
          </motion.ul>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:block">
          {/* IMAGE */}
          <div className="w-full h-[400px] sm:h-[500px] lg:h-[650px] xl:h-[700px] mb-10 overflow-hidden relative">
            <motion.div
              initial={{ scaleX: 1 }}
              whileInView={{ scaleX: 0 }}
              transition={{
                duration: 0.75,   // faster curtain
                delay: 0.25,      // synced with heading + text
                ease: "circOut"
              }}
              viewport={{ once: true }}
              className="absolute inset-0 bg-[#FBF0DA] z-10 origin-right"
            />

            <img src={origin2} alt="Philosophy" className="w-full h-full object-cover" />
          </div>

          {/* VALUES LIST */}
          <motion.h3
            className="text-[clamp(14px,1.6vw,18px)] font-semibold tracking-wide mb-4"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={30}
          >
            OUR VALUES
          </motion.h3>

          <motion.ul className="space-y-1 text-[clamp(13px,1.2vw,18px)] leading-[1.45]">
            {["Innovation", "Legacy", "Sustainability"].map((item, i) => (
              <React.Fragment key={i}>
                <motion.li
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={31 + i}
                >
                  {item}
                </motion.li>
                <Line />
              </React.Fragment>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
