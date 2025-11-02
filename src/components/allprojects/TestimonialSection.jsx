
import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import whychoose from "../../assets/whychoose.png";

const TestimonialSection = () => {

  return (
    <section className="relative text-[#FBF0DA] min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
      
      <img
  data-scroll
  data-scroll-speed="-0.2"
  src={whychoose}
  alt="Background"
  className="absolute inset-0 w-full h-full object-cover"
/>

      <div className="absolute inset-0 bg-black/60"></div>
      <FaQuoteLeft className="hidden md:block text-5xl absolute mb-60 mr-60 opacity-90" />

      
      <div className="relative z-10 max-w-3xl ">



        <div className=" text-[15px] md:ml-40 w-70 text-start leading-relaxed md:text-base">
          {[
            "Investing in One Earth Properties has",
            "been one of the most fulfilling",
            "decisions I’ve made. The project",
            "beautifully combines natural serenity",
            "with thoughtful planning — every",
            "detail reflects care, balance, and",
            "sustainability. It’s not just a", 
            "property; it feels like being part of",
            "something larger, a community built",
            "with purpose."
          ].map((line, i) => (
            <motion.p
              key={i}
              className="block"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: (i * 0.1) + 0.2 }}
              viewport={{ once: true }}
            >
              {line}
            </motion.p>
          ))}
        </div>


        <motion.div
          className="h-px bg-gray-400/40 my-6 md:ml-40 w-60"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ transformOrigin: "left" }}
        ></motion.div>


        <motion.div
          className="md:ml-40"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold tracking-wide">
            ANANYA MEHTA
          </h3>
          <p className="text-sm  mt-1">Managing Director</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
