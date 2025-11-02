import { motion } from "framer-motion";
import React from "react";
import blank from "../../assets/blank1.png";

const BlankSolo = () => {
  return (
    <div className="h-[100vh] sm:h-[100vh] md:h-[130vh] md:mb-20 mt-20">
      <div className="w-full h-full relative overflow-hidden">
        <motion.div
          initial={{ scaleX: 1, opacity: 1 }}
          whileInView={{ scaleX: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
          viewport={{ once: true }}
          style={{ transformOrigin: "right" }}
          className="w-full origin-right absolute h-full bg-[#FBF0DA]"
        />
        <img
          src={blank}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default BlankSolo;
