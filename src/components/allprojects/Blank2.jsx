import { motion } from "framer-motion";
import React from "react";
import blank2 from "../../assets/blank2.png";

function Blank2() {
  return (
    <div className="h-[70vh] sm:h-[85vh] md:h-[100vh] mt-20 mb-20 md:mt-25 md:mb-25 mx-4 sm:mx-10 md:mx-30">
      <div className="w-full h-full relative overflow-hidden">
        <motion.div
          initial={{ scaleX: 1, opacity: 1 }}
          whileInView={{ scaleX: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
          viewport={{ once: true }}
          style={{ transformOrigin: "right" }}
          className="w-full origin-right absolute h-full bg-[#FBF0DA]"
        ></motion.div>
        <img
          src={blank2}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Blank2;
