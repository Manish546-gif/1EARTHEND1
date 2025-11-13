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

  /* MOBILE LONG-LINE FORMAT */
  const paragraphMobile = [
    "At One Earth, architecture is an expression of",
    "coexistence. Every structure is shaped to",
    "breathe Every structure is shaped to breathe",
    "with the landscape, integrating sustainability,",
    "craftsmanship, and conscious innovation. We", 
    "design not just for today, but for generations",
    "that will inherit this living planet.",
  ];

  return (
    <div>
      <div className="min-h-screen bg-[#FBF0DA] flex items-center justify-center p-4 py-10">
        <div className="max-w-[1600px] w-full mx-auto px-4 lg:px-8">
          
          {/* ================== DESKTOP VIEW (UNTOUCHED) ================== */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-16 items-center">

            {/* Left Image */}
            <div className="flex justify-center lg:justify-start w-full">
              <motion.div
                className="w-full max-w-[650px] md:max-w-[750px] lg:max-w-[850px] xl:max-w-[950px] 
                h-[400px] sm:h-[500px] lg:h-[650px] xl:h-[700px] overflow-hidden relative"
                initial={{ opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "circOut", delay: 0.3 }}
              >
                <motion.div
                  initial={{ scaleX: 1, opacity: 1 }}
                  whileInView={{ scaleX: 0, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "right" }}
                  className="w-full origin-right absolute z-10 h-full bg-[#FBF0DA]"
                />
                <img src={craft1} alt="" className="w-full h-full object-cover" />
              </motion.div>
            </div>

            {/* Center Heading */}
            <motion.div
              className="flex flex-col justify-between w-full min-h-[200px] sm:min-h-[450px] md:min-h-[600px]"
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
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
              >
                <h5 className="tracking-[0.3em] text-black mt-4 sm:mt-6 
                text-[clamp(10px,1vw,14px)] font-normal">
                  DESIGN
                </h5>
              </motion.div>

              <div className="text-black tracking-tight mt-6 md:mt-0 leading-[1.1] text-left">
                {["DESIGN", "THAT", "NURTURES", "EARTH"].map((word, i) => (
                  <motion.span
                    key={i}
                    className="block whitespace-nowrap text-[clamp(28px,4vw,90px)] font-normal mb-1"
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
            </motion.div>

            {/* Right Text + Button */}
            <div className="flex flex-col justify-between lg:justify-center items-start lg:items-end 
            w-full gap-26 mt-5 md:mt-8 lg:mt-0 text-right">

              {/* Desktop paragraph unchanged */}
              <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[85%] xl:w-[70%] 
              text-left space-y-1">
                {paragraphLines.map((line, i) => (
                  <motion.p
                    key={i}
                    className="text-gray-900 leading-[1.4] 
                    text-[3.5vw] sm:text-[2.2vw] md:text-base font-normal"
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

              {/* Desktop button aligned exactly same as before */}
              <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[85%] xl:w-[70%] flex justify-start">
                <TransitionLink to="/contact">
                  <motion.button
                    className="relative overflow-hidden bg-yellow-600 hover:bg-black text-white 
                    px-8 py-3 rounded-full font-medium transition-colors duration-200 group 
                    text-[clamp(12px,1vw,16px)]"
                    variants={textVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={paragraphLines.length + 4}
                  >
                    <span className="relative block transition-transform duration-300 ease-in-out group-hover:-translate-y-20">
                      CONTACT US
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center 
                    transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                      CONTACT US
                    </span>
                  </motion.button>
                </TransitionLink>
              </div>

              {/* Small Image unchanged */}
              <motion.div
                className="w-full sm:w-[70%] md:w-[60%] lg:w-[80%] xl:w-[70%] self-center lg:self-end 
                h-[180px] sm:h-[220px] md:h-[260px] lg:h-[280px] xl:h-[200px] 
                overflow-hidden relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.6 }}
              >
                <motion.div
                  initial={{ scaleX: 1, opacity: 1 }}
                  whileInView={{ scaleX: 0, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "circOut" }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "right" }}
                  className="w-full absolute z-10 h-full bg-[#FBF0DA]"
                />
                <img src={craft2} alt="" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>

          {/* ================== MOBILE / TABLET VIEW ================== */}
          <div className="lg:hidden flex flex-col items-start mt-10 space-y-8 sm:space-y-10">

            {/* DESIGN LABEL — same as EveryAbout */}
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
              <h5 className="tracking-[0.3em] text-black font-normal mt-4 sm:mt-6 
              text-[clamp(14px,4vw,22px)]">
                DESIGN
              </h5>
            </motion.div>

            {/* MOBILE HEADING — unchanged */}
            <div className="text-black tracking-tight mt-6 leading-[1.05] text-left">
              {["DESIGN THAT", "NURTURES EARTH"].map((line, i) => (
                <motion.span
                  key={i}
                  className="block whitespace-nowrap 
                  text-[clamp(28px,4vw,90px)] font-normal mb-2"
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  {line}
                </motion.span>
              ))}
            </div>

            {/* First Image */}
            <div className="h-72 sm:h-80 md:h-[420px] w-full relative overflow-hidden">
              <motion.div
                initial={{ scaleX: 1, opacity: 1 }}
                whileInView={{ scaleX: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "right" }}
                className="w-full absolute h-full bg-[#FBF0DA]"
              />
              <img src={craft1} alt="" className="w-full h-full object-cover" />
            </div>

            {/* MOBILE PARAGRAPH — NOW LONG LINES LIKE EveryAbout */}
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[85%] xl:w-[70%] 
space-y-2 leading-[1.25] text-[clamp(14px,4vw,18px)]">
              {paragraphMobile.map((line, i) => (
                <motion.p
                  key={i}
                  className="text-gray-900"
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

            {/* MOBILE BUTTON */}
            <div className="mt-6">
              <TransitionLink to="/contact">
                <motion.button
                  className="relative overflow-hidden bg-yellow-600 hover:bg-black text-white 
                  px-5 sm:px-6 py-3 rounded-full font-medium transition-colors duration-300 group"
                  style={{ fontSize: "2.5vw" }}
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={paragraphMobile.length}
                >
                  <span className="relative block transition-transform duration-300 ease-in-out group-hover:-translate-y-20">
                    CONTACT US
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center 
                  transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                    CONTACT US
                  </span>
                </motion.button>
              </TransitionLink>
            </div>

            {/* Second Image */}
            <div className="h-72 sm:h-80 md:h-[420px] w-full relative overflow-hidden">
              <motion.div
                initial={{ scaleX: 1, opacity: 1 }}
                whileInView={{ scaleX: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "right" }}
                className="w-full absolute h-full bg-[#FBF0DA]"
              />
              <img src={craft2} alt="" className="w-full h-full object-cover" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
