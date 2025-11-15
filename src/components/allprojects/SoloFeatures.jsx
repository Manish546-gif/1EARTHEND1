import React from "react";
import { motion } from "framer-motion";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";

export default function SoloFeatures() {
  return (
    <section
      className="
        max-w-8xl mx-auto px-4 sm:px-6 md:px-10 py-12 
        flex flex-col lg:flex-row 
        gap-10 sm:gap-16 lg:gap-32 my-10
        lg:items-stretch    /* MAKE ALL COLUMNS SAME HEIGHT */
      "
    >

      {/* LEFT IMAGE */}
      <motion.div className="relative overflow-hidden flex-shrink-0 w-full md:w-1/2 h-full">
        <motion.div
          initial={{ scaleX: 1, opacity: 1 }}
          whileInView={{ scaleX: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: 'circOut' }}
          viewport={{ once: true }}
          style={{ transformOrigin: 'right' }}
          className="w-full origin-right absolute h-full bg-[#FBF0DA]"
        />
        <img src={feature1} className="w-full h-full object-cover" alt="Feature 1" />
      </motion.div>

      {/* RIGHT COLUMN */}
      <div
        className="
          flex flex-col w-full relative
          lg:flex lg:flex-col lg:justify-between lg:h-auto
        "
      >
        {/* LABEL */}
        <motion.h2
          className="
            text-[clamp(16px,4vw,22px)]
            md:text-[clamp(14px,1.6vw,18px)]
            font-semibold tracking-wide mb-4
          "
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          MAIN FEATURES
        </motion.h2>

        {/* FEATURES LIST */}
        <ul className="space-y-8 md:mr-10 lg:mr-20">
          {[
            {
              title: "ECO-RESPONSIVE DESIGN",
              desc: "A thoughtfully planned layout that follows the natural terrain, preserving native trees and enhancing the landscape's organic flow.",
            },
            {
              title: "SUSTAINABLE INFRASTRUCTURE",
              desc: "Equipped with solar-ready provisions, rainwater harvesting, and a sewage treatment system to minimize ecological impact and promote self-sufficiency.",
            },
            {
              title: "WELLNESS & NATURE INTEGRATION",
              desc: "Includes meditation decks, acupressure pathways, and green parks designed to nurture physical and mental well-being amid serene surroundings.",
            },
            {
              title: "COMMUNITY & LIFESTYLE SPACES",
              desc: "Features a premium clubhouse, jogging trails, and cultural zones that encourage connection, recreation, and a balanced countryside lifestyle.",
            },
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <p
                className="
                  font-semibold uppercase tracking-tight flex items-center gap-2 mb-1
                  text-[clamp(14px,4vw,20px)]
                  md:text-[clamp(13px,1.2vw,18px)]
                "
              >
                <span className="text-2xl leading-none">•</span>
                {item.title}
              </p>

              <p
                className="
                  leading-[1.45]
                  text-[clamp(13px,3.2vw,17px)]
                  md:text-[clamp(12px,1vw,16px)]
                  text-gray-900 max-w-prose
                "
              >
                {item.desc}
              </p>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                style={{ transformOrigin: 'left' }}
                className="h-px w-full bg-black mt-5"
              />
            </motion.li>
          ))}
        </ul>

        {/* SECOND IMAGE — stick bottom on desktop */}
        <motion.div
  className="
    mt-10 sm:mt-16 
    w-full 
    md:w-[55%] 
    self-center 
    md:self-end
    md:mr-20          /* SHIFT LEFT WITHOUT CHANGING WIDTH */
    relative overflow-hidden
    lg:mt-auto
  "
>

          <motion.div
            initial={{ scaleX: 1, opacity: 1 }}
            whileInView={{ scaleX: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: 'circOut' }}
            viewport={{ once: true }}
            style={{ transformOrigin: 'right' }}
            className="w-full absolute h-full bg-[#FBF0DA]"
          />
          <img src={feature2} alt="Feature 2" className="w-full h-full object-cover" />
        </motion.div>

      </div>
    </section>
  );
}
