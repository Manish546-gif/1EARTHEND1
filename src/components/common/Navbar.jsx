import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import logo from "../../assets/1earthcompletelogo.svg";
import menuIcon from "../../assets/menu.svg";
import Line from "./Line";
import { usePageTransition } from "./CurtainPreloader";
import TransitionLink from "./redirect";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { startPageTransition } = usePageTransition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isLightBackground, setIsLightBackground] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // GSAP Refs
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const overlayRef = useRef(null);
  const navRef = useRef(null);

  // Detect background color behind navbar
  useEffect(() => {
    const detectBackgroundColor = () => {
      if (!navRef.current) return;
      const navRect = navRef.current.getBoundingClientRect();
      const leftX = navRect.left + 10; // Leftmost point near logo
      const centerY = navRect.top + navRect.height / 2;

      navRef.current.style.pointerEvents = "none";
      const elementBehind = document.elementFromPoint(leftX, centerY);
      navRef.current.style.pointerEvents = "auto";

      if (elementBehind) {
        const bgColor = window.getComputedStyle(elementBehind).backgroundColor;
        const rgb = bgColor.match(/\d+/g);
        if (rgb && rgb.length >= 3) {
          const r = parseInt(rgb[0]);
          const g = parseInt(rgb[1]);
          const b = parseInt(rgb[2]);
          // Calculate luminance to determine if light or dark
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          setIsLightBackground(luminance > 0.5); // Light if luminance > 0.5
        }
      }
    };

    detectBackgroundColor();
    window.addEventListener("scroll", detectBackgroundColor);
    window.addEventListener("resize", detectBackgroundColor);
    return () => {
      window.removeEventListener("scroll", detectBackgroundColor);
      window.removeEventListener("resize", detectBackgroundColor);
    };
  }, [location.pathname]);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hide/Show navbar on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHidden(currentScrollY > lastScrollY && currentScrollY > 100);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      if (scrollY) window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [isMenuOpen]);

  const toggleMenu = () => (isMenuOpen ? closeMenu() : openMenu());

  const openMenu = () => {
    setIsMenuOpen(true);
    const tl = gsap.timeline();
    tl.set([leftPanelRef.current, rightPanelRef.current], { display: "block" })
      .to(overlayRef.current, { opacity: 1, duration: 0.3, ease: "circOut" })
      .fromTo(
        leftPanelRef.current,
        { x: "-100%" },
        { x: "0%", duration: 0.8, ease: "circOut" },
        0.1
      )
      .fromTo(
        rightPanelRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.8, ease: "circOut" },
        0.1
      );
  };

  const closeMenu = () => {
    const tl = gsap.timeline({
      onComplete: () => setIsMenuOpen(false),
    });

    tl.to([leftPanelRef.current, rightPanelRef.current], {
      x: (index) => (index === 0 ? "-100%" : "100%"),
      duration: 1,
      ease: "circOut",
    }).set([leftPanelRef.current, rightPanelRef.current], { display: "none" });
  };

  const handleNavigation = (path) => {
    if (startPageTransition) {
      startPageTransition(() => navigate(path));
    } else navigate(path);
    closeMenu();
  };

  const menuItemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      y: 20,
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const lineVariants = {
    hidden: {
      scaleX: 0,
      opacity: 0,
    },
    visible: (i) => ({
      scaleX: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.5,
        duration: 0.8,
        ease: "circOut",
      },
    }),
  };

  const rightPanelVariants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const rightContentVariants = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "circOut",
      },
    },
  };

  const logoVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <>
      <motion.nav
        ref={navRef}
        className="w-full fixed top-0 z-40 bg-transparent"
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="max-w-8xl mx-auto px-8 sm:px-10 lg:px-12 py-2">
          <div className="flex items-center justify-between h-16">
            <motion.div>
              <TransitionLink to="/" className="flex items-center gap-3">
                <motion.img
                  src={logo}
                  alt="Earth logo"
                  className="h-12 w-auto transition-all duration-100"
                  style={{
                    filter: isLightBackground ? "brightness(0)" : "none",
                  }}
                />
              </TransitionLink>
            </motion.div>
            <motion.button
              onClick={toggleMenu}
              className="p-2 rounded-md z-50 relative"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.img
                src={menuIcon}
                alt="Menu"
                className="h-8 w-8 transition-all duration-100"
                style={{
                  filter: isLightBackground ? "brightness(0)" : "none",
                }}
               
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>
        <Line />
      </motion.nav>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 opacity-0 overflow-hidden"
        style={{
          display: isMenuOpen ? "block" : "none",
          height: "100vh",
          width: "100vw",
        }}
      >
        {/* LEFT PANEL */}
        <div
          ref={leftPanelRef}
          className="absolute top-0 left-0 bg-[#FBF0DA] overflow-auto"
          style={{
            transform: "translateX(-100%)",
            height: isMobile ? "50vh" : "100vh",
            width: isMobile ? "100vw" : "50vw",
          }}
        >
          <div className={`h-full flex flex-col ${isMobile ? 'justify-start py-8' : 'justify-center'} px-8 lg:px-12 overflow-hidden`}>
            <motion.button
              onClick={closeMenu}
              className="absolute top-6 right-6 lg:top-8 lg:right-8 text-gray-700 hover:text-gray-900 text-2xl font-light"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close menu"
            >
               <motion.img
                src={menuIcon}
                alt="Menu"
                className="h-8 w-8 transition-all duration-300"
                style={{
                  filter:"brightness(0)",
                }}
                
                whileHover={{rotate:90}}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <nav className="space-y-4 lg:space-y-6">
              <AnimatePresence>
                {isMenuOpen && (
                  <>
                    <motion.div
                      className="flex items-center gap-6 lg:gap-0 cursor-pointer overflow-hidden group"
                      onClick={() => handleNavigation("/")}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={0}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    >
                      <motion.span
                        className="text-xs lg:text-xl ml-5 font-light text-gray-800 min-w-[30px] lg:min-w-[40px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        (1)
                      </motion.span>
                      <motion.span
                        className="text-2xl lg:text-4xl hover:ml-7 duration-300 xl:text-5xl font-light text-gray-900 tracking-wide"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.4,
                          duration: 0.8,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        HOME
                      </motion.span>
                    </motion.div>

                    <motion.hr
                      className="border-gray-700 origin-left"
                      variants={lineVariants}
                      initial="hidden"
                      animate="visible"
                      custom={0}
                    />

                    <motion.div
                      className="flex items-center gap-6 lg:gap-0 overflow-hidden cursor-pointer group"
                      onClick={() => handleNavigation("/about")}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={1}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    >
                      <motion.span
                        className="text-xs lg:text-xl ml-5 font-light text-gray-800 min-w-[30px] lg:min-w-[40px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        (2)
                      </motion.span>
                      <motion.span
                        className="text-2xl lg:text-3xl hover:ml-7 duration-300 xl:text-5xl font-light text-gray-900 tracking-wide"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.5,
                          duration: 0.8,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        ABOUT
                      </motion.span>
                    </motion.div>

                    <motion.hr
                      className="border-gray-700 origin-left"
                      variants={lineVariants}
                      initial="hidden"
                      animate="visible"
                      custom={1}
                    />

                    <motion.div
                      className="flex items-center gap-6 lg:gap-0 overflow-hidden cursor-pointer group"
                      onClick={() => handleNavigation("/project")}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={2}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    >
                      <motion.span
                        className="text-xs lg:text-xl ml-5 font-light text-gray-800 min-w-[30px] lg:min-w-[40px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        (3)
                      </motion.span>
                      <motion.span
                        className="text-2xl lg:text-3xl hover:ml-7 duration-300 xl:text-5xl font-light text-gray-900 tracking-wide"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.6,
                          duration: 0.8,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        PROJECTS
                      </motion.span>
                    </motion.div>

                    <motion.hr
                      className="border-gray-700 origin-left"
                      variants={lineVariants}
                      initial="hidden"
                      animate="visible"
                      custom={2}
                    />

                    <motion.div
                      className="flex items-center gap-6 lg:gap-0 overflow-hidden cursor-pointer group"
                      onClick={() => handleNavigation("/services")}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={3}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    >
                      <motion.span
                        className="text-xs lg:text-xl ml-5 font-light text-gray-800 min-w-[30px] lg:min-w-[40px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        (4)
                      </motion.span>
                      <motion.span
                        className="text-2xl lg:text-3xl hover:ml-7 duration-300 xl:text-5xl font-light text-gray-900 tracking-wide"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.7,
                          duration: 0.8,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        SERVICES
                      </motion.span>
                    </motion.div>

                    <motion.hr
                      className="border-gray-700 origin-left"
                      variants={lineVariants}
                      initial="hidden"
                      animate="visible"
                      custom={3}
                    />

                    <motion.div
                      className="flex items-center gap-6 lg:gap-0 overflow-hidden cursor-pointer group"
                      onClick={() => handleNavigation("/contact")}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={4}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    >
                      <motion.span
                        className="text-xs lg:text-xl ml-5 font-light text-gray-600 min-w-[30px] lg:min-w-[40px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        (5)
                      </motion.span>
                      <motion.span
                        className="text-2xl lg:text-3xl hover:ml-7 duration-300 xl:text-5xl font-light text-gray-900 tracking-wide"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.8,
                          duration: 0.8,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        CONTACT
                      </motion.span>
                    </motion.div>

                    <motion.hr
                      className="border-gray-700 origin-left"
                      variants={lineVariants}
                      initial="hidden"
                      animate="visible"
                      custom={4}
                    />
                  </>
                )}
              </AnimatePresence>
            </nav>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div
          ref={rightPanelRef}
          className="absolute right-0 bg-[#1a2332] overflow-auto"
          style={{
            transform: "translateX(100%)",
            height: isMobile ? "50vh" : "100vh",
            width: isMobile ? "100vw" : "50vw",
            bottom: isMobile ? "0" : "auto",
          }}
        >
          <div className="h-full flex flex-col justify-between px-8 lg:px-12 xl:px-16 py-6 lg:py-8 pb-12 text-[#FBF0DA] overflow-hidden">
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  variants={rightPanelVariants}
                  initial="hidden"
                  animate="visible"
                  className="h-full flex flex-col justify-between"
                >
                  <motion.div className={`mb-8 ${isMobile ? 'hidden' : ''}`} variants={logoVariants}>
                    <motion.h1 className="text-3xl  lg:text-8xl font-light ml-10 tracking-wider">
                      ONE EARTH
                    </motion.h1>
                    <motion.h2 className="text-base lg:text-5xl ml-12 font-light tracking-[0.7em] ">
                      PROPERTIES
                    </motion.h2>
                  </motion.div>

                  <motion.div
                    className="flex justify-between mb-6 gap-2 md:gap-4"
                    variants={rightPanelVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div className="w-2/5" variants={rightContentVariants}>
                      <p className="text-base md:text-lg uppercase">
                        EMAIL
                      </p>
                      <p className={`text-xs md:text-sm text-gray-400 mb-10 uppercase ${isMobile ? 'break-words' : ''}`}>
                        ONEEARTHPROPERTIESLLP@GMAIL.COM
                      </p>
                      <p className="text-base md:text-lg uppercase">
                        PHONE
                      </p>
                      <p className="text-xs md:text-sm text-gray-400 mb-3 uppercase">
                        +91 9960372727
                      </p>
                      <p className="text-base mt-6 md:text-lg uppercase">
                        SOCIAL
                      </p>
                      {["INSTAGRAM", "FACEBOOK", "LINKDIEN"].map((s, i) => (
                        <motion.p
                          key={s}
                          className="text-xs md:text-sm text-gray-400 hover:text-white cursor-pointer uppercase"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                          whileHover={{ scale: 1.05, x: 5 }}
                        >
                          {s}
                        </motion.p>
                      ))}
                    </motion.div>

                    <motion.div className="w-2/5" variants={rightContentVariants}>
                      <p className="text-base md:text-lg uppercase">
                        OFFICE
                      </p>
                      <p className="text-xs md:text-sm text-gray-400 mb-3 uppercase">
                        A1105, GOKHALE BUSINESS BAY, KOTHRUD, PUNE, 411038
                      </p>
                      <p className="text-base md:text-lg uppercase">
                        MONDAY TO FRIDAY
                      </p>
                      <p className="text-xs md:text-sm text-gray-400 mb-3 uppercase">
                        8:00 AM - 6:00 PM
                      </p>
                      <p className="text-base md:text-lg uppercase">
                        LEGAL
                      </p>
                      <p className="text-xs md:text-sm text-gray-400 uppercase">
                        PRIVACY POLICY
                      </p>
                      <p className="text-xs md:text-sm text-gray-400 uppercase">
                        TERMS AND CONDITION
                      </p>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="w-full flex sm:flex-col justify-between items-center text-xs opacity-70 border-t border-white/20 pt-3"
                    variants={rightContentVariants}
                  >
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.4 }}
                      className="text-gray-400 uppercase"
                    >
                      ©2025 ONE EARTH PROPERTIES - ALL RIGHTS RESERVED
                    </motion.p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
