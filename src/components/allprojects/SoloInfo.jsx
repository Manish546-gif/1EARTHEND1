import React from "react";
import { motion } from "framer-motion";
import projectimg from "../../assets/info1.png";
import info2 from "../../assets/info2.png";
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

const SoloInfo = () => {
  const details = [
    { label: "LOCATION", value: "VELHE, BHOR (OUTSKIRTS OF PUNE, INDIA)" },
    { label: "YEAR", value: "2025" },
    { label: "TOTAL LAND SIZE", value: "100+ ACRES" },
    { label: "PLOT SIZE", value: "FROM 11,000 SQ. FT." },
    { label: "CATEGORY", value: "GATED FARMLAND & PLOTTED COMMUNITY" },
    { label: "DEVELOPER", value: "ONE EARTH PROPERTIES" },
  ];

  const infoPara = [
    "The Velhe Estate by One Earth Properties is a",
    "100-acre gated farmland community in the",
    "serene outskirts of Pune, surrounded by",
    "the majestic Rajgad and Torna Forts. Blending",
    "nature, heritage, and sustainable design,",
    "it offers expansive plots starting from",
    "11,000 sq. ft. for farmhouses, retreats, or",
    "investment havens. With eco-conscious",
    "infrastructure, lush landscapes, and wellness-",
    "inspired amenities, the estate redefines",
    "luxury as harmony—offering a grounded yet",
    "refined lifestyle where every sunrise over",
    "the hills feels like coming home to nature.",
  ];

  return (
    <div className="max-w-[1600px] mx-auto px-6 lg:px-8 py-12 md:py-20 flex flex-col md:flex-row gap-16">
      {/* Left: Big Image */}
      <motion.div
        className="w-full md:w-7/12 h-[400px] sm:h-[500px] lg:h-[650px] xl:h-[700px] relative overflow-hidden"
      >
        <motion.div
          initial={{ scaleX: 1, opacity: 1 }}
          whileInView={{ scaleX: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
          viewport={{ once: true }}
          style={{ transformOrigin: "right" }}
          className="absolute inset-0 bg-[#FBF0DA] z-10 origin-right"
        />
        <img src={projectimg} alt="Velhe Estate overview" className="w-full h-full object-cover" />
      </motion.div>

      {/* Right: Text + small image + details */}
      <div className="w-full md:w-5/12 flex flex-col gap-10 md:pr-4">
        {/* INFO */}
        <div>
          <motion.h3
            className="text-[clamp(14px,1.6vw,18px)] font-semibold tracking-wide mb-4"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            INFO
          </motion.h3>

          <div className="space-y-1">
            {infoPara.map((line, i) => (
              <motion.p
                key={i}
                className="leading-[1.45] text-[clamp(13px,1.2vw,18px)]"
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1 + i}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Small Image */}
        <motion.div className="w-full h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px] overflow-hidden relative">
          <motion.div
            initial={{ scaleX: 1, opacity: 1 }}
            whileInView={{ scaleX: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
            viewport={{ once: true }}
            style={{ transformOrigin: "right" }}
            className="absolute inset-0 bg-[#FBF0DA] z-10 origin-right"
          />
          <img src={info2} alt="Estate detail" className="w-full h-full object-cover" />
        </motion.div>

        {/* DETAILS */}
        <div>
          <motion.h3
            className="text-[clamp(14px,1.6vw,18px)] font-semibold tracking-wide mb-4"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={30}
          >
            DETAILS
          </motion.h3>

          <div className="space-y-5">
            {details.map((item, index) => (
              <motion.div
                key={item.label}
                className="text-[clamp(12px,1vw,16px)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="flex items-baseline justify-between gap-4 pb-1">
                  <span className="font-medium tracking-wide">{item.label}</span>
                  <span className="text-right">{item.value}</span>
                </div>
                <Line />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoloInfo;
