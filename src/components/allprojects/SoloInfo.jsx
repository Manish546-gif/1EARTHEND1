import React from "react";
import { motion } from "framer-motion";
import projectimg from '../../assets/info1.png';
import info2 from '../../assets/info2.png';
import Line from "../common/Line";
const SoloInfo = () => {

  const details = [
    { label: "LOCATION", value: "VELHE, BHOR (OUTSKIRTS OF PUNE, INDIA)" },
    { label: "YEAR", value: "2025" },
    { label: "TOTAL LAND SIZE", value: "100+ ACRES" },
    { label: "PLOT SIZE", value: "FROM 11,000 SQ. FT." },
    { label: "CATEGORY", value: "GATED FARMLAND & PLOTTED COMMUNITY" },
    { label: "DEVELOPER", value: "ONE EARTH PROPERTIES" },
  ];

  return (
    <div className="flex flex-col    md:flex-row p-6 gap-16 md:gap-50  mt-15 mb-20 max-w-8xl mx-auto">
      <motion.div
        className=" w-full md:w-6/11  md:h-230  relative overflow-hidden sm:h-150 h-110"
      >
        <motion.div  initial={{ scaleX: 1, opacity: 1 }}
        whileInView={{ scaleX: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay:0.5 , ease:"circOut" }}
        viewport={{ once: true }}
        style={{ transformOrigin: "right" }} className="w-full origin-right absolute  h-full bg-[#FBF0DA]"></motion.div>
        <img className=" h-full w-full object-cover" src={projectimg} alt="" />
      </motion.div>

      <div className="flex flex-col md:pr-20 w-full md:w-2/6 space-y-6">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="font-bold mb-2">INFO</h3>
          <div className="text-lg">
            {[
              "The Velhe Estate by One Earth Properties is a",
              " 100-acre gated farmland community in the ",
              "serene outskirts of Pune, surrounded by",
              "the majestic Rajgad and Torna Forts. Blending",
              "nature, heritage, and sustainable design,",
              "it offers expansive plots starting from",
              "11,000 sq. ft. for farmhouses, retreats, or",
              "investment havens. With eco-conscious ",
              "infrastructure, lush landscapes, and wellness",
              "inspired amenities, the estate redefines",
              "luxury as harmony—offering a grounded yet",
              "refined lifestyle where every sunrise over",
              "the hills feels like coming home to nature."
            ].map((line, i) => (
              <motion.p
                key={i}
                className="block"
               
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: (i * 0.1) + 0.3 }}
                viewport={{ once: true }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="w-full h-50  overflow-hidden relative"
        >
           <motion.div  initial={{ scaleX: 1, opacity: 1 }}
        whileInView={{ scaleX: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay:0.4 , ease:"circOut" }}
        viewport={{ once: true }}
        style={{ transformOrigin: "right" }} className="w-full origin-right  absolute h-full bg-[#FBF0DA]"></motion.div>
        <img src={info2} className="w-full h-full " alt="" />
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold mb-4">DETAILS</h3>
          <div className="space-y-6">
            {details.map((item, index) => (
              <motion.div
                key={index}
                className="text-sm relative "
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index * 0.1) + 0.5 }}
                viewport={{ once: true }}
                whileHover="hover"
                variants={{
                  hover: {},
                }}
              >
                <div className="flex justify-between pb-1 relative z-10">
                  <span className="font-medium">{item.label}</span>
                  <span className="text-right">{item.value}</span>
                </div>
                <Line />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SoloInfo;
