import { motion } from "framer-motion";
import Line from "../common/Line.jsx";
import craft1 from "../../assets/craft1.png";
import craft2 from "../../assets/craft2.png";
import TransitionLink from "../common/redirect.jsx";

const textVariant = {
  hidden: { y: 40, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export default function CraftVisionSection() {
  const paragraphLines = [
    "One Earth blends mindful design",
    "and regenerative innovation to",
    "create spaces that not only inspire",
    "but endure. Together, we shape",
    "environments that reflect your",
    "vision, rooted in nature, built with",
    "purpose, and alive with meaning.",
  ];

  return (
    <div>
      <Line />
      <div className="min-h-screen bg-[#FBF0DA] flex items-center justify-center p-4 ">
        <div className="max-w-[1600px] w-full mx-auto px-4 lg:px-8">
          {/* ================= DESKTOP VIEW ================= */}
          <div className="hidden lg:grid grid-cols-3 items-center">
            {/* LEFT IMAGE */}
            <div>
              <motion.div className="relative md:mt-80 overflow-hidden h-70 w-full md:w-4/6">
                <motion.div
                  initial={{ scaleX: 1, opacity: 1 }}
                  whileInView={{ scaleX: 0, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.6, ease: "circOut" }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "right" }}
                  className="w-full origin-right absolute z-10 h-full bg-[#FBF0DA]"
                />
                <img src={craft1} alt="" className="w-full h-full bg-cover" />
              </motion.div>
            </div>

            {/* CENTER TEXT CONTENT */}
            <motion.div
              className="lg:col-span-1 text-left lg:px-8"
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
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.2,
                }}
              >
                <h5 className="tracking-[0.3em] text-black mt-4 sm:mt-6 text-[clamp(10px,1vw,14px)] font-normal">
                  CONNECT
                </h5>
              </motion.div>

              <div className="text-black tracking-tight mt-8 md:mt-8 leading-[1.1] text-left">
                {["CRAFT", "YOUR", "VISION"].map((word, i) => (
                  <motion.span
                    key={i}
                    className="block whitespace-nowrap text-[clamp(28px,4vw,90px)] font-normal"
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

              <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[85%] xl:w-[70%] text-left space-y-1 mt-12">
                {paragraphLines.map((line, i) => (
                  <motion.p
                    key={i}
                    className="text-black leading-[1.4] font-normal text-[5vw] sm:text-[2.2vw] md:text-base"
                    variants={textVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i + 4}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>

              <TransitionLink to="/contact">
                <motion.button
                  className="relative overflow-hidden bg-yellow-600 hover:bg-black text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 group text-[clamp(12px,1vw,16px)] mt-10"
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={paragraphLines.length + 4}
                >
                  <span className="relative block transition-transform duration-300 ease-in-out group-hover:-translate-y-20">
                    GET IN TOUCH
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                    GET IN TOUCH
                  </span>
                </motion.button>
              </TransitionLink>
            </motion.div>

            {/* RIGHT IMAGE */}
            <div>
              <motion.div className="relative h-155 overflow-hidden w-full">
                <motion.div
                  initial={{ scaleX: 1, opacity: 1 }}
                  whileInView={{ scaleX: 0, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "right" }}
                  className="w-full origin-right absolute h-full bg-[#FBF0DA]"
                />
                <img src={craft2} alt="" className="w-full h-full bg-cover" />
              </motion.div>
            </div>
          </div>

          {/* ================= MOBILE / TABLET VIEW ================= */}
          <div className="lg:hidden flex flex-col items-start mt-12 space-y-8 sm:space-y-10 text-left">
            {/* CONNECT visible in mobile view */}
            <motion.h5
              className="tracking-[0.3em] text-black uppercase text-[3.5vw] sm:text-[2vw] font-normal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              CONNECT
            </motion.h5>

            {/* HEADING */}
            <motion.h1
              className="text-black leading-tight"
              style={{ fontSize: "7vw", fontWeight: 400 }}
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
              {["CRAFT YOUR", "VISION"].map((line, index) => (
                <div className="overflow-hidden" key={index}>
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
                    {line}
                  </motion.span>
                </div>
              ))}
            </motion.h1>

            {/* FIRST IMAGE */}
            <div className="h-[320px] sm:h-[400px] md:h-[480px] w-full relative overflow-hidden ">
              <motion.div
                initial={{ scaleX: 1, opacity: 1 }}
                whileInView={{ scaleX: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "right" }}
                className="w-full origin-right absolute h-full bg-[#FBF0DA]"
              />
              <img src={craft1} className="w-full h-full object-cover" alt="" />
            </div>

            {/* PARAGRAPH + BUTTON */}
            <div className="w-full sm:w-full md:w-3/4 text-left space-y-1 px-0">
              {paragraphLines.map((line, i) => (
                <motion.p
                  key={i}
                  className="text-gray-900 leading-relaxed text-[5vw] sm:text-[2.2vw] md:text-base font-normal"
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  {line}
                </motion.p>
              ))}

              <TransitionLink to="/contact">
                <motion.button
                  className="relative mt-4 overflow-hidden bg-yellow-600 hover:bg-black text-white px-6 sm:px-8 py-3 rounded-full font-medium transition-colors duration-300 group text-[clamp(12px,1vw,16px)]"
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={paragraphLines.length + 4}
                >
                  <span className="relative block transition-transform duration-300 ease-in-out group-hover:-translate-y-20">
                    GET IN TOUCH
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                    GET IN TOUCH
                  </span>
                </motion.button>
              </TransitionLink>
            </div>

            {/* SECOND IMAGE */}
            <div className="h-[320px] sm:h-[400px] md:h-[480px] w-full relative overflow-hidden ">
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
