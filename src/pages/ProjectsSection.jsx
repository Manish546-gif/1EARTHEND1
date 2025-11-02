import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import projectimg from "../assets/projectland.png";
import TransitionLink from "../components/common/redirect";

const ProjectsSection = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const project = {
    id: 1,
    name: "harmony highland",
    location: "Velhe, Bhor, Pune",
    image: projectimg,
  };

  const handleNextClick = () => {
    // Trigger “Coming Soon” overlay
    setShowComingSoon(true);
    setTimeout(() => setShowComingSoon(false), 2000); // hide after 2 seconds
  };

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden text-[#FBF0DA]">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Foreground */}
      <div className="relative z-10 flex flex-col justify-between h-full px-6 sm:px-10 md:px-16 lg:px-20 py-10">
        {/* Top */}
        <div className="flex justify-between items-start mt-10">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg tracking-widest font-light"
          >
            OUR PROJECTS
          </motion.h2>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg font-light"
          >
            1 / 1
          </motion.p>
        </div>

        {/* Center Project */}
        <div className="flex flex-col items-center justify-center flex-1">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              type: "spring",
              stiffness: 80,
              damping: 18,
            }}
            className="flex flex-col items-center"
          >
            <TransitionLink to="/projectsolo">
              <motion.div
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 0.4 },
                }}
                className="overflow-hidden shadow-2xl"
              >
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-[70vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] h-[40vh] sm:h-[55vh] md:h-[60vh]"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 2.5 }}
                />
              </motion.div>
            </TransitionLink>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl uppercase font-serif mt-6 text-center md:text-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {project.name}
            </motion.h1>

            <motion.p
              className="text-xs sm:text-sm md:text-base tracking-wider text-gray-200 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {project.location}
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 mt-8">
          {/* Controls */}
          <div className="flex gap-8 text-[#FBF0DA] text-xs sm:text-sm tracking-widest">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ opacity: 0.7 }}
              className="cursor-not-allowed opacity-50"
            >
              PREV
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ opacity: 0.8 }}
              onClick={handleNextClick}
              className="cursor-pointer"
            >
              NEXT
            </motion.button>
          </div>

          {/* Elegant single bar */}
          <motion.div
            className="h-[6px] rounded-full bg-[#FBF0DA]/30 overflow-hidden w-[100px]"
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
              damping: 12,
            }}
          >
            <motion.div
              className="h-full bg-[#FBF0DA] rounded-full shadow-[0_0_10px_rgba(251,240,218,0.8)]"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                delay: 0.5,
                duration: 1.5,
                ease: "easeOut",
              }}
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
              className="text-4xl sm:text-5xl md:text-6xl font-light tracking-widest text-[#FBF0DA]"
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
