import React from "react";
import { motion } from "framer-motion";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";

export default function SoloFeatures() {

  return (
    <section className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 py-12 flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-32 my-10">
      {/* Left Image */}
      <motion.div
        className="relative overflow-hidden flex-shrink-0 w-full md:w-1/2"
      >
        <motion.div
          initial={{ scaleX: 1, opacity: 1 }}
          whileInView={{ scaleX: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
          viewport={{ once: true }}
          style={{ transformOrigin: "right" }}
          className="w-full origin-right absolute h-full bg-[#FBF0DA]"
        ></motion.div>
        <img
          src={feature1}
          className="w-full h-full object-cover"
          alt="Feature 1"
        />
      </motion.div>

      {/* Right Text and Second Image */}
      <div className="flex flex-col flex-grow w-full">
        <motion.h2
          className="text-lg sm:text-xl font-bold mb-6 inline-block pb-1"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          MAIN FEATURES
        </motion.h2>

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
              transition={{ duration: 0.6, delay: (i * 0.1) + 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="font-bold text-lg sm:text-xl uppercase flex items-center gap-2 mb-2">
                <span className="text-2xl">•</span>
                {item.title}
              </p>
              <p className="text-sm sm:text-base leading-relaxed max-w-prose">
                {item.desc}
              </p>
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

        {/* Bottom Image */}
        <motion.div
          className="mt-10 sm:mt-16 lg:mt-18 w-full  sm:w-4/6 md:w-5/9 self-center md:self-end relative overflow-hidden"
        >
          <motion.div
            initial={{ scaleX: 1, opacity: 1 }}
            whileInView={{ scaleX: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
            viewport={{ once: true }}
            style={{ transformOrigin: "right" }}
            className="w-full origin-right absolute h-full bg-[#FBF0DA]"
          ></motion.div>
          <img
            src={feature2}
            alt="Feature 2"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
