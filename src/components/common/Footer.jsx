import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import TransitionLink from "./redirect.jsx";
import Line from "./Line";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const letterAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" },
    }),
  };

  const textVariant = {
    hidden: { y: 40, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.8, ease: "easeOut" },
    }),
  };

  const paragraphLines = [
    "More than a real estate brand, One Earth is a vision shaped by ",
    "legacy, balance, and purpose. We are guided by nature’s rhythm",
    "and India’s timeless heritage, crafting spaces that nurture",
    "life and inspire belonging. Every creation reflects our",
    "belief in integrity, sustainability, and enduring design",
    "where development honors the land and living feels grounded",
    "yet luxurious. At One Earth, we don’t just build properties;",
    "we cultivate legacies that stand the test of time.",
  ];

  const navItems = [
    { num: "1", label: "HOME", path: "/" },
    { num: "2", label: "ABOUT", path: "/about" },
    { num: "3", label: "PROJECT", path: "/project" },
    { num: "4", label: "SERVICE", path: "/services" },
    { num: "5", label: "CONTACT", path: "/contact" },
  ];

  return (
    <footer className="bg-[#041C28] text-[#FBF0DA] pt-16 md:pt-14 pb-10 md:pb-14">
      <div className="flex flex-col md:flex-row mb-20 justify-between gap-12 px-6 md:px-16 lg:px-10">

        {/* LEFT SIDE — Nav + Paragraph */}
        <div className="flex flex-col space-y-8 max-w-xl sm:text-left sm:items-start">
          {/* Navigation */}
          <nav>
            <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.num}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="flex items-baseline gap-2 overflow-hidden"
                >
                  <span className="text-xs text-gray-400">({item.num})</span>
                  <TransitionLink
                    to={item.path}
                    className=" md:text-3xl transition-all duration-300 sm:text-base"
                  >
                    {item.label}
                  </TransitionLink>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Paragraph */}
          <div className="space-y-1 text-xs md:text-sm md:max-w-sm sm:text-[0.7rem]">
            {paragraphLines.map((line, i) => (
              <motion.p
                key={i}
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
        </div>

        {/* RIGHT SIDE — Logo + Info */}
        <div className="flex flex-col items-start text-left w-full md:w-auto mt-10 md:mt-0">
          {/* Logo */}
          <div className="text-left select-none">
            <motion.h1 className="text-5xl sm:text-6xl md:text-[100px] lg:text-[120px] leading-none flex flex-wrap justify-start">
              {["O", "N", "E", "\u00A0", "E", "A", "R", "T", "H"].map(
                (char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {char}
                  </motion.span>
                )
              )}
            </motion.h1>

            <motion.h2 className="text-2xl sm:text-2xl md:text-[40px] lg:text-[50px] md:tracking-[0.85em] tracking-[0.88rem] mt-2 md:mt-4">
              {["P", "R", "O", "P", "E", "R", "T", "I", "E", "S"].map(
                (char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {char}
                  </motion.span>
                )
              )}
            </motion.h2>
          </div>

          {/* Info Section */}
          <div className={`mt-10 ${isMobile ? 'flex justify-between gap-2' : 'flex flex-col md:flex-row md:justify-start md:gap-20 lg:gap-32'} text-xs sm:text-sm md:text-base gap-8 sm:items-start sm:text-left`}>
            {/* Left Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className={`${isMobile ? 'w-2/5 space-y-3' : 'space-y-5'}`}
            >
              <div>
                <p className="uppercase font-medium mb-1">EMAIL</p>
                <p className={`text-gray-200 ${isMobile ? 'break-words' : ''}`}>
                  oneearthpropertiesllp@gmail.com
                </p>
              </div>
              <div>
                <p className="uppercase font-medium mb-1">PHONE</p>
                <p className="text-gray-300">+91 9960372727</p>
              </div>
              <div>
                <p className="uppercase font-medium mb-1">SOCIAL</p>
                <p className="text-gray-300 leading-relaxed">
                  Instagram <br /> Facebook <br /> LinkedIn
                </p>
              </div>
            </motion.div>

            {/* Right Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className={`${isMobile ? 'w-2/5 space-y-3' : 'space-y-4 mt-8 md:mt-0'}`}
            >
              <div>
                <p className="uppercase font-medium mb-1">OFFICE</p>
                <p className="text-gray-300 leading-relaxed">
                  A1105, Gokhale Business Bay, <br /> Kothrud, Pune, 411038
                </p>
                <p className="mt-3 text-gray-400">
                  Monday to Friday <br /> 9:00 AM - 6:00 PM
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <Line />

      {/* Footer Bottom */}
      <div className="px-6 md:px-10 lg:px-10 pt-4 flex flex-col md:flex-row justify-between items-start sm:items-start text-[0.7rem] sm:text-xs text-gray-400 tracking-wider gap-2 md:gap-0">
        <p>©2025 ONE EARTH PROPERTIES - ALL RIGHTS RESERVED</p>
        <div className="flex gap-2 sm:flex-col sm:items-start md:flex-row">
          <p className="cursor-pointer hover:underline">TERM OF SERVICE</p>
          <p className="cursor-pointer hover:underline">PRIVACY POLICY</p>
        </div>
      </div>
    </footer>
  );
}