import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Line from "../common/Line.jsx";
import craft1 from "../../assets/111.jpg";
import craft2 from "../../assets/2222.jpg";
import TransitionLink from "../common/redirect";

const textVariant = {
  hidden: { y: 40, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function OverDesign() {
  const paragraphLines = [
    "At One Earth, architecture is an",
    "expression of coexistence. Every",
    "structure is shaped to breathe",
    "with the landscape integrating",
    "sustainability, craftsmanship, and",
    "conscious innovation. We design",
    "just for today, but for generations",
    "that will inherit this living planet.",
  ];

  return (
    <div>
      <div className="min-h-screen bg-[#FBF0DA] flex items-center justify-center p-4 sm:p-6 md:p-10 mb-15 mt-10 md:mt-20 md:mb-20">
        <div className="max-w-8xl w-full mx-auto">
          {/* ================== DESKTOP VIEW ================== */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 mt-10">
              <motion.div className="relative overflow-hidden pr-1 h-full w-full">
                <motion.div
                  initial={{ scaleX: 1, opacity: 1 }}
                  whileInView={{ scaleX: 0, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "right" }}
                  className="w-full origin-right absolute z-10 h-full bg-[#FBF0DA]"
                ></motion.div>
                <img src={craft1} alt="" className="w-full h-full object-cover" />
              </motion.div>
            </div>

            {/* Center Text Content */}
            <motion.div
              className="lg:col-span-4 self-end text-start lg:px-8 px-2 sm:px-4 md:px-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black leading-tight">
                {["DESIGN", "THAT", "NURTURES", "EARTH"].map((word, index) => (
                  <div className="overflow-hidden" key={word}>
                    <motion.span
                      className="block"
                      initial={{ y: 30, opacity: 0.5 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 0.1 + index * 0.1,
                      }}
                    >
                      {word}
                    </motion.span>
                  </div>
                ))}
              </h1>
            </motion.div>

            {/* Right Content */}
            <div className="lg:col-span-3 flex flex-col gap-6 sm:gap-10 md:gap-26 px-2 sm:px-4 lg:px-0">
              {/* Top Right Image */}
              <div className="md:mb-10">
                <motion.div className="relative overflow-hidden h-48 w-full">
                  <motion.div
                    initial={{ scaleX: 1, opacity: 1 }}
                    whileInView={{ scaleX: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
                    viewport={{ once: true }}
                    style={{ transformOrigin: "right" }}
                    className="w-full origin-right absolute h-full bg-[#FBF0DA]"
                  ></motion.div>
                  <img src={craft2} alt="" className="w-full h-full object-cover" />
                </motion.div>
              </div>

              {/* Paragraph + Button */}
              <div className="text-left">
                <div className="w-full sm:w-5/6 md:w-3/4">
                  {paragraphLines.map((line, i) => (
                    <motion.p
                      key={i}
                      className="text-sm sm:text-base leading-relaxed text-gray-900"
                      variants={textVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={i}
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>

                <div className="mt-6 md:mt-10">
                  <TransitionLink to="/contact">
                    <motion.button
                      className="relative overflow-hidden bg-yellow-600 hover:bg-black text-white px-5 sm:px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-colors duration-300 group"
                      variants={textVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={paragraphLines.length}
                    >
                      <span className="relative block transition-transform duration-300 ease-in-out group-hover:-translate-y-20">
                        CONTACT US
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                        CONTACT US
                      </span>
                    </motion.button>
                  </TransitionLink>
                </div>
              </div>
            </div>
          </div>

          {/* ================== MOBILE/TABLET VIEW ================== */}
          <div className="lg:hidden flex flex-col items-start mt-10 space-y-8 sm:space-y-10">
            {/* Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl text-black leading-tight"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              {["DESIGN", "THAT", "NURTURES", "EARTH"].map((word, index) => (
                <div className="overflow-hidden" key={word}>
                  <motion.span
                    className="block"
                    initial={{ y: 30, opacity: 0.5 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: 0.1 + index * 0.1,
                    }}
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </motion.h1>

            {/* First Image */}
            <div className="h-72 sm:h-80 md:h-[420px] w-full relative overflow-hidden">
              <motion.div
                initial={{ scaleX: 1, opacity: 1 }}
                whileInView={{ scaleX: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "right" }}
                className="w-full origin-right absolute h-full bg-[#FBF0DA]"
              />
              <img src={craft1} alt="" className="w-full h-full object-cover" />
            </div>

            {/* Paragraph + Button */}
            <div className="text-left">
              <div className="w-full sm:w-5/6 md:w-3/4">
                {paragraphLines.map((line, i) => (
                  <motion.p
                    key={i}
                    className="text-sm sm:text-base leading-relaxed text-gray-900"
                    variants={textVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>

              <div className="mt-6 md:mt-10">
                <TransitionLink to="/contact">
                  <motion.button
                    className="relative overflow-hidden bg-yellow-600 hover:bg-black text-white px-5 sm:px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-colors duration-300 group"
                    variants={textVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={paragraphLines.length}
                  >
                    <span className="relative block transition-transform duration-300 ease-in-out group-hover:-translate-y-20">
                      CONTACT US
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                      CONTACT US
                    </span>
                  </motion.button>
                </TransitionLink>
              </div>
            </div>

            {/* Second Image */}
            <div className="h-72 sm:h-80 md:h-[420px] w-full relative overflow-hidden">
              <motion.div
                initial={{ scaleX: 1, opacity: 1 }}
                whileInView={{ scaleX: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "right" }}
                className="w-full origin-right absolute h-full bg-[#FBF0DA]"
              />
              <img src={craft2} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}