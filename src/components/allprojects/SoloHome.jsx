import React from "react";
import { motion } from "framer-motion";
import projectimg from "../../assets/solo32.jpg";

const textVariant = {
  hidden: { y: 30, opacity: 0 },
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

export default function SoloHome() {
  const title = ["HARMONY", "HIGHLAND"];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <img
        src={projectimg}
        alt="Harmony Highland"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Subtle bottom gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/30 to-black/10" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-end">
        <div className="w-full px-6 md:px-12 pb-16 md:pb-24 text-[#FBF0DA]">
          {/* Title */}
          <div className="text-left leading-none">
            {title.map((word, i) => (
              <motion.span
                key={word}
                className="block font-normal leading-[0.95] text-[clamp(32px,8vw,120px)] uppercase"
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Location */}
          <motion.p
            className="mt-3 text-[clamp(12px,1.2vw,18px)] tracking-wide"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={title.length + 1}
          >
            Velhe, Bhor, Pune
          </motion.p>
        </div>
      </div>
    </section>
  );
}
