import React from "react";
import { motion } from "framer-motion";
import origin2 from "../../assets/harmoney2.jpeg";
import Line from "../common/Line";

/* Variants */
const textVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.04,      // faster stagger
      duration: 0.2,        // faster animation
      ease: "easeOut",
    },
  }),
};

/* Paragraphs */
const originLines = [
  "One Earth Properties was founded with",
  "a singular vision – to redefine real",
  "estate by uniting sustainability,culture,",
  " and modern living.Rooted in Pune’s",
  "serene landscapes, our journey began",
  "with a simple belief: that land is not ",
  "just to be developed, but to be nurtured.",
];

const philosophyLines = [
  "Inspired by India’s deep connection to",
  "nature and timeless craftsmanship, we",
  "create spaces that coexist with their",

  "surroundings where innovation serves",
  "the Earth, and design becomes an",
  " expression of balance. Each project",
  " stands as a testament to harmony,",
  " integrity, and renewal.",
];

export default function Origin() {
  const heading = "DESIGNING IN HARMONY".split(" ");

  return (
    <section className="w-full min-h-screen bg-[#FBF0DA] px-8 lg:px-20 py-20 flex flex-col lg:flex-row gap-16">

      {/* LEFT COLUMN — HEADING */}
<div className="w-full lg:w-1/4 text-left">

  {/* DESKTOP — ORIGINAL 3 WORDS, 3 LINES */}
  <div className="hidden lg:block">
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

  {/* MOBILE — TWO LINES ONLY */}
  <div className="lg:hidden">
    {["DESIGNING IN", "HARMONY"].map((line, i) => (
      <motion.span
        key={i}
        className="block text-black font-normal leading-[1.05] text-[clamp(28px,7vw,60px)] whitespace-nowrap"
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


      {/* MIDDLE COLUMN — IMAGE */}
      <div className="w-full lg:w-2/4 flex justify-center">
        <div className="w-full max-w-xl h-[400px] sm:h-[500px] lg:h-[650px] xl:h-[700px] overflow-hidden relative">
          <motion.div
            initial={{ scaleX: 1 }}
            whileInView={{ scaleX: 0 }}
            transition={{
              duration: 0.7,      // faster curtain slide
              delay: 0.25,        // synced with heading
              ease: "circOut"
            }}
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
        {/* MOBILE VIEW */}
        <div className="lg:hidden">
          {/* OUR ORIGINS */}
          <div>
            <motion.h3
              className="text-[clamp(16px,1.8vw,20px)] font-semibold tracking-wide mb-4"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={15}
            >
              OUR ORIGINS
            </motion.h3>

            {/* FIRST PARAGRAPH */}
            <div className="space-y-1 mb-6">
              {originLines.map((line, i) => (
                <motion.p
                  key={i}
                  className="leading-[1.45] text-[clamp(16px,1.2vw,18px)]"
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={16 + i}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            {/* SECOND PARAGRAPH */}
            <div className="space-y-1">
              {philosophyLines.map((line, i) => (
                <motion.p
                  key={i}
                  className="leading-[1.45] text-[clamp(16px,1.2vw,18px)]"
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={30 + i}
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </div>

          {/* OUR VALUES */}
          <div className="mt-6">
            <motion.h3
              className="text-[clamp(16px,1.8vw,20px)] font-semibold tracking-wide mb-4"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={50}
            >
              OUR VALUES
            </motion.h3>

            <motion.ul className="space-y-1 text-[clamp(15px,1.2vw,18px)] leading-[1.45]">
              {["Harmony", "Integrity", "Sustainability"].map((item, i) => (
                <React.Fragment key={i}>
                  <motion.li
                    variants={textVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={51 + i}
                  >
                    {item}
                  </motion.li>
                  <Line />
                </React.Fragment>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden lg:block">
          {/* OUR ORIGINS */}
          <div>
            <motion.h3
              className="text-[clamp(14px,1.6vw,18px)] font-semibold tracking-wide mb-4"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={15}
            >
              OUR ORIGINS
            </motion.h3>

            {/* FIRST PARAGRAPH */}
            <div className="space-y-1 mb-6">
              {originLines.map((line, i) => (
                <motion.p
                  key={i}
                  className="leading-[1.45] text-[clamp(13px,1.2vw,18px)]"
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={16 + i}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            {/* SECOND PARAGRAPH */}
            <div className="space-y-1">
              {philosophyLines.map((line, i) => (
                <motion.p
                  key={i}
                  className="leading-[1.45] text-[clamp(13px,1.2vw,18px)]"
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={30 + i}
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
              custom={50}
            >
              OUR VALUES
            </motion.h3>

            <motion.ul className="space-y-1 text-[clamp(13px,1.2vw,18px)] leading-[1.45]">
              {["Harmony", "Integrity", "Sustainability"].map((item, i) => (
                <React.Fragment key={i}>
                  <motion.li
                    variants={textVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={51 + i}
                  >
                    {item}
                  </motion.li>
                  <Line />
                </React.Fragment>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
