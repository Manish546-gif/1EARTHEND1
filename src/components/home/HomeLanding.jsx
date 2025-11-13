// Updated HeroSection with right-text shifted slightly left and upward

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { usePageTransition } from "../common/CurtainPreloader";
import bgVideo from "../../assets/HomeLanding.mp4";

const HeroSection = () => {
  const { waitForCurtainOpen } = usePageTransition();
  const leftTextRefs = useRef([]);
  const headingRefs = useRef([]);
  const rightTextRefs = useRef([]);

  const leftText = [
    "Creating timeless spaces where",
    "nature, culture, and design coexist",
    "in perfect balance.",
  ];

  const heading = ["SUSTAINABLE", "LIVING", "EXPERIENCES"];

  const rightText = [
    "We craft destinations that inspire",
    "a deeper connection with the",
    "Earth, where architecture",
    "breathes with the landscape, and",
    "every detail embodies mindful",
    "luxury. Our spaces invite you to",
    "live consciously, in harmony with",
    "the Earth.",
  ];

  useEffect(() => {
    let killed = false;

    const animate = async () => {
      await waitForCurtainOpen();
      if (killed) return;

      const tl = gsap.timeline();

      // Set initial states
      gsap.set(leftTextRefs.current, { y: 40, opacity: 0 });
      gsap.set(headingRefs.current, { y: 40, opacity: 0 });
      gsap.set(rightTextRefs.current, { y: 40, opacity: 0 });

      // Animate left text
      tl.to(leftTextRefs.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "easeOut",
        stagger: 0.2,
      });

      // Animate heading
      tl.to(headingRefs.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "easeOut",
        stagger: 0.2,
      }, "-=0.4");

      // Animate right text
      tl.to(rightTextRefs.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "easeOut",
        stagger: 0.2,
      }, "-=0.4");
    };

    animate();

    return () => {
      killed = true;
    };
  }, [waitForCurtainOpen]);

  return (
    <section className="relative bg-black w-full h-screen overflow-hidden flex flex-col md:flex-row justify-end md:justify-between px-6 md:px-10 py-6 md:py-10">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        data-scroll
        data-scroll-speed="-0.3"
        muted
        loop
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex w-full flex-col md:flex-row justify-end md:justify-between items-start md:items-end gap-8 md:gap-0 mt-auto">
        {/* Left Text */}
        <div className="max-w-xs md:max-w-sm text-[#FBF0DA] sm:text-left">
          {leftText.map((line, i) => (
            <p
              key={i}
              ref={(el) => (leftTextRefs.current[i] = el)}
              className="block font-Grenda text-[4vw] sm:text-[2.5vw] md:text-2xl"
              style={{ opacity: 0, transform: 'translateY(40px)' }}
            >
              {line}
            </p>
          ))}

          <div className="text-[#FBF0DA] mt-6 md:mt-20 text-left">
            {heading.map((word, i) => (
              <span
                key={i}
                ref={(el) => (headingRefs.current[i] = el)}
                className="block font-Grenda text-[8vw] sm:text-[6vw] md:text-[9vw] leading-none"
                style={{ opacity: 0, transform: 'translateY(40px)' }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Right Text shifted slightly left & upward */}
        <div className="max-w-full md:max-w-xs text-[#FBF0DA] font-Grenda text-left relative md:-translate-x-6 md:-translate-y-8">
          {rightText.map((line, i) => (
            <p
              key={i}
              ref={(el) => (rightTextRefs.current[i] = el)}
              className="block text-[3.5vw] sm:text-[2.2vw] md:text-base"
              style={{ opacity: 0, transform: 'translateY(40px)' }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
