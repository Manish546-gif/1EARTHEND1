import React from "react";
import { motion } from "framer-motion";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";

export default function SoloFeatures() {
  return (
    <section className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 py-12 flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-32 my-10">

      {/* LEFT IMAGE — animation untouched */}
      <motion.div className="relative overflow-hidden flex-shrink-0 w-full md:w-1/2">
        <motion.div
          initial={{ scaleX: 1, opacity: 1 }}
          whileInView={{ scaleX: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
          viewport={{ once: true }}
          style={{ transformOrigin: "right" }}
          className="w-full origin-right absolute h-full bg-[#FBF0DA]"
        />
        <img src={feature1} className="w-full h-full object-cover" alt="Feature 1" />
      </motion.div>

      {/* RIGHT TEXT */}
      <div className="flex flex-col flex-grow w-full">

        {/* LABEL */}
        <motion.h2
          className="
            text-[clamp(16px,4vw,22px)]        /* MOBILE bigger */
            md:text-[clamp(14px,1.6vw,18px)]  /* DESKTOP same */
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
              desc:
                "A thoughtfully planned layout that follows the natural terrain, preserving native trees and enhancing the landscape's organic flow.",
            },
            {
              title: "SUSTAINABLE INFRASTRUCTURE",
              desc:
                "Equipped with solar-ready provisions, rainwater harvesting, and a sewage treatment system to minimize ecological impact and promote self-sufficiency.",
            },
            {
              title: "WELLNESS & NATURE INTEGRATION",
              desc:
                "Includes meditation decks, acupressure pathways, and green parks designed to nurture physical and mental well-being amid serene surroundings.",
            },
            {
              title: "COMMUNITY & LIFESTYLE SPACES",
              desc:
                "Features a premium clubhouse, jogging trails, and cultural zones that encourage connection, recreation, and a balanced countryside lifestyle.",
            },
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* TITLE */}
              <p
                className="
                  font-semibold uppercase tracking-tight flex items-center gap-2 mb-1
                  text-[clamp(14px,4vw,20px)]       /* MOBILE */
                  md:text-[clamp(13px,1.2vw,18px)]  /* DESKTOP original */
                "
              >
                <span className="text-2xl leading-none">•</span>
                {item.title}
              </p>

              {/* DESCRIPTION */}
              <p
                className="
                  leading-[1.45]
                  text-[clamp(13px,3.2vw,17px)]      /* MOBILE paragraph size */
                  md:text-[clamp(12px,1vw,16px)]     /* DESKTOP original */
                  text-gray-900 max-w-prose
                "
              >
                {item.desc}
              </p>

              {/* UNDERLINE */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                style={{ transformOrigin: "left" }}
                className="h-px w-full bg-black mt-5 origin-left"
              />
            </motion.li>
          ))}
        </ul>

        {/* SECOND IMAGE — Animation untouched */}
        <motion.div className="mt-10 sm:mt-16 lg:mt-18 w-full sm:w-4/6 md:w-5/9 self-center md:self-end relative overflow-hidden">
          <motion.div
            initial={{ scaleX: 1, opacity: 1 }}
            whileInView={{ scaleX: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
            viewport={{ once: true }}
            style={{ transformOrigin: "right" }}
            className="w-full origin-right absolute h-full bg-[#FBF0DA]"
          />
          <img src={feature2} alt="Feature 2" className="w-full h-full object-cover" />
        </motion.div>

      </div>
    </section>
  );
}
