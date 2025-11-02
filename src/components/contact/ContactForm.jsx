import { motion } from "framer-motion";

export default function ContactForm() {

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="min-h-screen bg-[#FBF0DA] flex items-center justify-center p-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-8xl w-full overflow-hidden flex flex-col lg:flex-row mt-20 mb-20">
        {/* LEFT SIDE - TEXT */}
        <motion.div
          className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center"
          variants={itemVariants}
        >
          <motion.h1
            className="text-4xl lg:text-5xl font-light text-gray-800 mb-6 leading-tight"
            variants={itemVariants}
          >
            GET IN TOUCH
            <br />
            WITH ONE EARTH
            <br />
            PROPERTIES
          </motion.h1>

          <motion.p
            className="text-gray-600 mb-6 leading-relaxed max-w-lg"
            variants={itemVariants}
          >
            Whether you are looking to invest in a premium plot or want to know
            more about our projects, we're here to assist you.
          </motion.p>

          <motion.p
            className="text-gray-800 font-medium mb-8"
            variants={itemVariants}
          >
            Reach out to us anytime!
          </motion.p>

          <motion.div className="space-y-6" variants={itemVariants}>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">PHONE NO.</h3>
              <p className="text-gray-600">+91 9960372727</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">EMAIL</h3>
              <p className="text-gray-600">oneearthpropertiesllp@gmail.com</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">OFFICE</h3>
              <p className="text-gray-600">
                A1105, Godkhale Business Bay,
                <br />
                Kothrud, Pune
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">OFFICE HOURS</h3>
              <p className="text-gray-600">
                Monday to Friday
                <br />
                9:00 AM - 6:00PM
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - FORM */}
        <motion.div
          className="lg:w-1/2 p-8 lg:p-12 bg-[#FBF0DA]"
          variants={itemVariants}
        >
          <motion.form className="space-y-8" variants={containerVariants}>
            {[
              { label: "NAME", type: "text", placeholder: "Your Name" },
              { label: "EMAIL ADDRESS", type: "email", placeholder: "your@email.com" },
              { label: "COMPANY NAME", type: "text", placeholder: "Your Company Name" },
            ].map((field, index) => (
              <motion.div key={index} variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field.label}
                </label>
                <motion.input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full px-0 py-3 bg-transparent focus:outline-none placeholder-gray-400"
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6 }}
                  style={{ transformOrigin: "left" }}
                  className="h-px w-full bg-black mt-4"
                />
              </motion.div>
            ))}

            {/* PROJECT TYPE */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                PROJECT TYPE
              </label>
              <select className="w-full px-0 py-3 bg-[#FBF0DA] focus:outline-none text-gray-800">
                <option>Select One</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Investment</option>
              </select>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6 }}
                style={{ transformOrigin: "left" }}
                className="h-px w-full bg-black mt-4"
              />
            </motion.div>

            {/* MESSAGE */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                MESSAGE
              </label>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-0 py-3 bg-transparent focus:outline-none placeholder-gray-400 resize-none"
              ></textarea>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6 }}
                style={{ transformOrigin: "left" }}
                className="h-px w-full bg-black mt-4"
              />
            </motion.div>

            {/* SUBMIT BUTTON */}
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#000",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden bg-yellow-600 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors duration-200 group"
            >
              <span className="relative block transition-transform duration-300 ease-in-out group-hover:-translate-y-20">
                SUBMIT MESSAGE
              </span>
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                SUBMIT MESSAGE
              </span>
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.div>
  );
}
