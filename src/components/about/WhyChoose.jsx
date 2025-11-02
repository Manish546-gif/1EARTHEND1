import React from "react";
import { motion } from "framer-motion";
import whychoose from "../../assets/aboutland.png";

const textVariant = {
  hidden: { y: 40, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const WhyChoose = () => {
  return (
    <section className="relative min-h-screen flex justify-center items-center px-8 py-16 overflow-hidden">
     
      <img
  data-scroll
  data-scroll-speed="-0.2"
  src={whychoose}
  alt="Background"
  className="absolute inset-0 w-full h-full object-cover"
/>

      
      <div className="absolute inset-0 bg-black/60"></div>

      
      <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-8 text-[#FBF0DA]">
        
       
        <div className="grid grid-cols-2 gap-6 w-full">
         
          <motion.div
            className=" bg-white/10 border border-white/20  p-3 flex flex-col justify-center text-center md:h-80"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <motion.p
              className="text-lg font-semibold tracking-wide mb-2"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              TRANSPARENCY & TRUST
            </motion.p>
            <motion.p
              className="text-sm text-gray-300"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              Complete clarity in pricing, approvals, and documentation.
            </motion.p>
          </motion.div>

          
          <motion.div
            className=" bg-white/10 border border-white/20  p-6 flex flex-col justify-center text-center md:h-80"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            <motion.p
              className="text-lg font-semibold tracking-wide mb-2"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
            >
              QUALITY & PLANNING
            </motion.p>
            <motion.p
              className="text-sm text-gray-300"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={5}
            >
              Meticulous planning and infrastructure development.
            </motion.p>
          </motion.div>

         
          <motion.div
            className=" bg-white/10 border border-white/20  p-6 flex flex-col justify-center text-center md:h-80"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={6}
          >
            <motion.p
              className="text-lg font-semibold tracking-wide mb-2"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={7}
            >
              TIMELY DELIVERY
            </motion.p>
            <motion.p
              className="text-sm text-gray-300"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={8}
            >
              We respect your time and deliver on commitments.
            </motion.p>
          </motion.div>

          <motion.div
            className=" bg-white/10 border border-white/20  p-6 flex flex-col justify-center text-center md:h-80"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={9}
          >
            <motion.p
              className="text-lg font-semibold tracking-wide mb-2"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={10}
            >
              CUSTOMER-CENTRIC APPROACH
            </motion.p>
            <motion.p
              className="text-sm text-gray-300"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={11}
            >
              We provide continuous support and guidance.
            </motion.p>
          </motion.div>
        </div>

       
        <div className="flex flex-col justify-center">
          <motion.p
            className="text-lg uppercase tracking-[3px] text-gray-50 mb-6"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={12}
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            className="text-5xl font-semibold uppercase leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              className="block"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={13}
            >
              Your Trusted
            </motion.span>
            <motion.span
              className="block"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={14}
            >
              Partner in
            </motion.span>
            <motion.span
              className="block"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={15}
            >
              Land
            </motion.span>
            <motion.span
              className="block"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={16}
            >
              Investments
            </motion.span>
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
