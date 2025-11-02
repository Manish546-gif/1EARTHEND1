import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../../assets/homeproject.png";
import TransitionLink from "../common/redirect";

const projects = [
  { id: 1, title: "HARMONY HINGLAND", image: img1 },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 1,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 1,
  }),
};

const ProjectSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const paginate = (newDirection) => {
    // If there's only one project, show "Coming Soon"
    if (projects.length === 1) {
      setShowComingSoon(true);
      setTimeout(() => setShowComingSoon(false), 2000); // hides after 2 seconds
      return;
    }

    setPage(([prevPage]) => {
      const nextPage = (prevPage + newDirection + projects.length) % projects.length;
      return [nextPage, newDirection];
    });
  };

  return (
    <div className="relative w-full h-screen md:h-[100vh] text-[#FBF0DA] overflow-hidden bg-black">
      {/* Arrow Buttons */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 font-light text-5xl hover:text-gray-300 hover:cursor-pointer transition-colors"
      >
        {"<"}
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 font-extralight text-5xl hover:text-gray-300 hover:cursor-pointer transition-colors"
      >
        {">"}
      </button>

      {/* Coming Soon Animation */}
      <AnimatePresence>
        {showComingSoon && (
          <motion.div
            key="coming-soon"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center z-30 bg-black/60 backdrop-blur-sm"
          >
            <motion.h2
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-4xl md:text-6xl font-light text-[#FBF0DA] tracking-widest"
            >
              Coming Soon
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={projects[page].id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full flex items-center justify-center"
        >
          {/* Background Image */}
          <motion.div
            className="absolute inset-0 w-full h-full overflow-hidden"
            initial={{ x: direction > 0 ? 50 : -50 }}
            animate={{ x: 0 }}
            exit={{ x: direction > 0 ? -50 : 50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.img
              data-scroll
              data-scroll-speed="-0.4"
              src={projects[page].image}
              alt={projects[page].title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              exit={{ scale: 1.1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>

          {/* Slide Content */}
          <div className="relative z-10 max-w-screen-2xl mx-auto px-5 sm:px-10 w-full h-full flex flex-col justify-between py-10 sm:py-20">
            {/* Page Number */}
            <div className="flex justify-end mt-10 text-xl font-light">
              {projects[page].id} / {projects.length}
            </div>

            {/* Bottom Section */}
            <div className="flex justify-between items-end">
              <div>
                <h2 className="md:text-8xl sm:text-6xl font-light tracking-tight leading-none">
                  {projects[page].title.split(" ").map((word, i) => (
                    <div key={i}>{word}</div>
                  ))}
                </h2>
              </div>

              <TransitionLink to="/project">
                <button className="relative overflow-hidden bg-transparent border border-[#FBF0DA] hover:bg-[#FBF0DA] hover:text-black hover:cursor-pointer px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 group">
                  <span className="relative block transition-transform duration-300 ease-in-out group-hover:-translate-y-20">
                    See Project
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                    See Project
                  </span>
                </button>
              </TransitionLink>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProjectSlider;
