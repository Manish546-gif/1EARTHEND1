import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import craft1 from "../../assets/try5.jpeg";
import craft2 from "../../assets/try4.jpeg";
import TransitionLink from "../common/redirect";

const textVariant = {
  hidden: { y: 40, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.06,
      duration: 0.4,
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
    <div className="min-h-screen bg-[#FBF0DA] flex items-center justify-center p-4 py-10 md:py-20">
      <div className="max-w-[1600px] w-full mx-auto px-4 lg:px-8">

        {/* ============ DESKTOP ============ */}
        <div className="hidden lg:grid grid-cols-3 gap-10 xl:gap-16 items-stretch">

          {/* LEFT IMAGE (reference height) */}
          <div className="flex justify-center lg:justify-start h-full">
            <motion.div
              className="
                w-full max-w-[850px] xl:max-w-[950px]
                h-[400px] sm:h-[500px] lg:h-[650px] xl:h-[650px]
                overflow-hidden relative
              "
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut", delay: 0.3 }}
            >
              <motion.div
                initial={{ scaleX: 1 }}
                whileInView={{ scaleX: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "right" }}
                className="absolute inset-0 bg-[#FBF0DA] z-10"
              />
              <img src={craft1} alt="" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* CENTER HEADING — aligned to bottom */}
          <div className="flex flex-col justify-between h-full">

            {/* (empty top space since DESIGN THING has no label) */}
            <div />

            {/* Heading aligned to bottom */}
            <div className="text-black tracking-tight leading-[1.1]">
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

          </div>

          {/* RIGHT COLUMN — paragraph top + button + small image bottom */}
          <div className="flex flex-col justify-between h-full items-end">

            {/* Text Block (top) */}
            <div className="w-[70%] text-left space-y-1">
              {paragraphLines.map((line, i) => (
                <motion.p
                  key={i}
                  className="text-gray-900 leading-[1.4] text-[2vw] md:text-base font-normal"
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

            {/* Button (middle) */}
            <div className="text-left">
              <TransitionLink to="/contact">
                <motion.button
                  className="cursor-pointer relative overflow-hidden bg-yellow-600 hover:bg-black text-white rounded-full font-medium transition-colors duration-300 group px-[4vw] py-[2vw] sm:px-[3vw] sm:py-[1.5vw] lg:px-[1.8vw] lg:py-[0.9vw] text-[4vw] sm:text-[2.4vw] lg:text-[1vw]"
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={paragraphLines.length + 4}
                >
                  <span className="relative block transition-transform duration-300 group-hover:-translate-y-20">
                    CONTACT US
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    CONTACT US
                  </span>
                </motion.button>
              </TransitionLink>
            </div>

            {/* Small Image — aligned to bottom */}
            <motion.div
              className="
                w-[70%]
                h-[180px] sm:h-[220px] md:h-[260px] lg:h-[280px] xl:h-[200px]
                overflow-hidden relative
              "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.6 }}
            >
              <motion.div
                initial={{ scaleX: 1 }}
                whileInView={{ scaleX: 0 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "circOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "right" }}
                className="absolute inset-0 bg-[#FBF0DA] z-10"
              />
              <img src={craft2} alt="" className="w-full h-full object-cover" />
            </motion.div>

          </div>
        </div>

        {/* ============ MOBILE VIEW (unchanged except paragraph) ============ */}
        <div className="lg:hidden flex flex-col items-start mt-10 space-y-8 sm:space-y-10">

          <div className="text-black tracking-tight leading-[1.05] text-left">
            {["DESIGN THAT", "NURTURES EARTH"].map((line, i) => (
              <motion.span
                key={i}
                className="block text-[clamp(28px,4vw,90px)] font-normal mb-2"
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

          <div className="h-72 sm:h-80 md:h-[420px] w-full overflow-hidden relative">
            <motion.div
              initial={{ scaleX: 1 }}
              whileInView={{ scaleX: 0 }}
              transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
              viewport={{ once: true }}
              style={{ transformOrigin: "right" }}
              className="absolute inset-0 bg-[#FBF0DA]"
            />
            <img src={craft1} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="w-full space-y-2 leading-[1.25] text-[clamp(14px,4vw,18px)]">
            {paragraphMobile.map((line, i) => (
              <motion.p
                key={i}
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="text-gray-900"
              >
                {line}
              </motion.p>
            ))}
          </div>

          <TransitionLink to="/contact">
            <motion.button
              className="cursor-pointer relative overflow-hidden bg-yellow-600 hover:bg-black text-white rounded-full font-medium transition-colors duration-300 group px-[4vw] py-[2vw] sm:px-[3vw] sm:py-[1.5vw] lg:px-[1.8vw] lg:py-[0.9vw] text-[4vw] sm:text-[2.4vw] lg:text-[1vw]"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={paragraphMobile.length}
            >
              <span className="relative block transition-transform duration-300 group-hover:-translate-y-20">
                CONTACT US
              </span>
              <span className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                CONTACT US
              </span>
            </motion.button>
          </TransitionLink>

          <div className="h-72 sm:h-80 md:h-[420px] w-full overflow-hidden relative">
            <motion.div
              initial={{ scaleX: 1 }}
              whileInView={{ scaleX: 0 }}
              transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
              viewport={{ once: true }}
              style={{ transformOrigin: "right" }}
              className="absolute inset-0 bg-[#FBF0DA]"
            />
            <img src={craft2} alt="" className="w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </div>
  );
}
