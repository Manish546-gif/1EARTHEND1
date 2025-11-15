import { motion } from "framer-motion";
import nextp from "../../assets/nextp.png";

const textVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.06,
      duration: 0.35,
      ease: "easeOut",
    },
  }),
};

export default function NextProject() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="max-w-8xl mx-auto md:mb-10 px-6 md:mt-10 lg:mt-10 mt-0 lg:px-8 h-screen flex items-center">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full items-center">
          
          {/* ================= TEXT SECTION ================= */}
          <div className="space-y-10 lg:space-y-52">

            {/* LABEL — mobile bigger (consistent with other sections) */}
            <motion.div
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="
                tracking-[0.3em] 
                text-gray-900 
                text-[clamp(16px,5vw,24px)]   /* Mobile */
                lg:text-[clamp(10px,1vw,14px)] /* Desktop */
                font-normal
              "
            >
              NEXT PROJECT
            </motion.div>

            {/* HEADING */}
            <div className="text-gray-900">
              {["PROJECT", "NAME"].map((line, i) => (
                <motion.span
                  key={i}
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 1}
                  className="
                    block 
                    font-normal 
                    leading-[1.05]
                    whitespace-nowrap 
                    text-[clamp(36px,8vw,90px)]   /* Mobile & Desktop consistent */
                  "
                >
                  {line}
                </motion.span>
              ))}
            </div>

            {/* BUTTON */}
            <motion.button
              disabled
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={5}
              className="
                relative 
                overflow-hidden 
                bg-gray-400 
                text-white 
                cursor-not-allowed 
                px-[6vw] py-[3vw] 
                lg:px-6 lg:py-3 
                rounded-full 
                text-[3.5vw] 
                lg:text-[clamp(12px,1vw,16px)] 
                font-medium 
                transition-colors 
                duration-200 
              "
            >
              <span className="relative block">COMING SOON</span>
            </motion.button>

          </div>

          {/* ================= IMAGE SECTION ================= */}
          <div className="relative w-full">
            <motion.div className="aspect-[4/3] lg:aspect-[1] relative overflow-hidden w-full">
              
              {/* Curtain Reveal Animation — UNTOUCHED (your original logic) */}
              <motion.div
                initial={{ scaleX: 1, opacity: 1 }}
                whileInView={{ scaleX: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "right" }}
                className="w-full absolute h-full bg-[#FBF0DA] z-10 origin-right"
              />

              <img
                src="https://images.pexels.com/photos/19911960/pexels-photo-19911960.jpeg"
                alt="Next Project Preview"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
