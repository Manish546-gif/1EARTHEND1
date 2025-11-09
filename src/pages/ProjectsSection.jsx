import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectimg from "../assets/solo32.jpg";
import TransitionLink from "../components/common/redirect";

const ProjectsSection = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const project = {
    id: 1,
    name: "HARMONY HIGHLAND",
    location: "Velhe, Bhor, Pune",
    image: projectimg,
  };

  const handleNextClick = () => {
    setShowComingSoon(true);
    setTimeout(() => setShowComingSoon(false), 2000);
  };

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden text-[#FBF0DA]">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Foreground */}
      <div className="relative z-10 h-full px-6 sm:px-10 md:px-16 lg:px-20 pt-28 sm:pt-32 pb-10 flex flex-col">

        {/* Top bar */}
        <div className="flex justify-between items-start">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(10px,1vw,14px)] tracking-[0.3em] font-light uppercase"
          >
            OUR PROJECTS
          </motion.h2>

          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[clamp(10px,1vw,14px)] font-light"
          >
            1 / 1
          </motion.p>
        </div>

        {/* Center project */}
        <div className="flex flex-col items-center justify-center flex-grow">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 80, damping: 18 }}
            className="flex flex-col items-center"
          >
            <TransitionLink to="/projectsolo">
              <motion.div
                whileHover={{ scale: 1.04, transition: { duration: 0.4 } }}
                className="overflow-hidden shadow-2xl rounded"
              >
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-[72vw] sm:w-[60vw] md:w-[42vw] lg:w-[32vw] h-[44vh] sm:h-[56vh] md:h-[60vh]"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 2.0 }}
                />
              </motion.div>
            </TransitionLink>

            <motion.h1
              className="mt-6 text-center md:text-left uppercase tracking-tight font-normal text-[clamp(20px,2.6vw,42px)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {project.name}
            </motion.h1>

            <motion.p
              className="mt-1 text-[clamp(12px,1vw,16px)] tracking-wide text-[#FBF0DA]/85"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {project.location}
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-[clamp(11px,0.9vw,14px)] tracking-[0.2em] uppercase">
            <motion.button
              whileTap={{ scale: 0.94 }}
              whileHover={{ opacity: 0.8 }}
              className="cursor-not-allowed opacity-50"
            >
              Prev
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.96 }}
              whileHover={{ opacity: 0.9 }}
              onClick={handleNextClick}
            >
              Next
            </motion.button>
          </div>

          {/* Progress bar */}
          <motion.div
            className="h-[6px] rounded-full bg-[#FBF0DA]/30 overflow-hidden w-[120px]"
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 1, type: "spring", stiffness: 100, damping: 12 }}
          >
            <motion.div
              className="h-full bg-[#FBF0DA] rounded-full shadow-[0_0_10px_rgba(251,240,218,0.8)]"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Coming Soon Overlay */}
      <AnimatePresence>
        {showComingSoon && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[clamp(28px,4vw,64px)] font-light tracking-[0.2em]"
            >
              Coming Soon
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
