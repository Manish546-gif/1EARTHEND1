import { motion } from "framer-motion";
import nextp from '../../assets/nextp.png';

export default function NextProject() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="max-w-8xl mx-auto md:mb-10 px-6 md:mt-10 lg:mt-10 mt-0  lg:px-8 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full items-center">
          
          {/* Text Section */}
          <div className="space-y-8 lg:space-y-52">
            <div className="text-sm font-medium tracking-wider">
              NEXT PROJECT
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-900 leading-none sm:text-4xl">
                {["PROJECT", "NAME"].map((line, i) => (
                  <motion.span
                    key={i}
                    className="block"
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: (i * 0.1) + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {line}
                    {i === 0 && <br />}
                  </motion.span>
                ))}
              </h1>
            </div>
            <div>
              <button disabled className="relative overflow-hidden bg-gray-400 cursor-not-allowed text-white px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 group">
                <span className="relative block">
                  COMING SOON
                </span>
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full">
            <motion.div className="aspect-[4/3] lg:aspect-[1] relative overflow-hidden w-full">
              
              {/* Curtain Animation */}
              <motion.div 
                initial={{ scaleX: 1, opacity: 1 }}
                whileInView={{ scaleX: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay:0.4, ease:"circOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "right" }}
                className="w-full origin-right absolute h-full bg-[#FBF0DA]"
              ></motion.div>

              <div className="w-full h-full overflow-hidden">
                <img 
                  src={nextp}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
