
import { motion } from "framer-motion";
import React from "react";

function Line(){
    return(
          <motion.div className="h-px bg-[#585254] origin-left"
          initial={{ scaleX: 0 }}
          viewport={{ once: true }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease:"circOut" }}
          style={{ transformOrigin: "left" }}></motion.div>  
    )
}

export default Line;