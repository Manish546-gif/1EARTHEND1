import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { usePageTransition } from "../common/CurtainPreloader";
import aboutVideo from "../../assets/aboutland.mp4";

export default function AboutLanding() {
  const { waitForCurtainOpen } = usePageTransition();
  const headingRef = useRef(null);
  const scrollRef = useRef(null);
  const paragraphRefs = useRef([]);
  const mobileHeadingRef = useRef(null);
  const mobileParagraphRefs = useRef([]);
  const mobileScrollRef = useRef(null);

  const paragraphLines = [
    "One Earth Properties creates",
    "spaces that live in harmony with",
    "nature. Guided by sustainability,",
    "balance, and purpose, each project",
    "is designed to evolve with time ",
    "while hovering the land it stands on.",
    "We don't just build, we nurture",
    "legacies that connect with people,",
    "place, and planet.",
  ];

  useEffect(() => {
    let killed = false;

    const animate = async () => {
      await waitForCurtainOpen();
      if (killed) return;

      const tl = gsap.timeline();

      // Set initial states
      gsap.set(headingRef.current, { y: 40, opacity: 0 });
      gsap.set(paragraphRefs.current, { y: 40, opacity: 0 });
      gsap.set(scrollRef.current, { y: 40, opacity: 0 });
      gsap.set(mobileHeadingRef.current, { y: 40, opacity: 0 });
      gsap.set(mobileParagraphRefs.current, { y: 40, opacity: 0 });
      gsap.set(mobileScrollRef.current, { y: 40, opacity: 0 });

      // Animate desktop heading
      tl.to(headingRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "easeOut",
      });

      // Animate desktop paragraphs
      tl.to(paragraphRefs.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "easeOut",
        stagger: 0.1,
      }, "-=0.3");

      // Animate desktop scroll
      tl.to(scrollRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "easeOut",
      }, "-=0.3");

      // Animate mobile heading
      tl.to(mobileHeadingRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "easeOut",
      }, "-=0.3");

      // Animate mobile paragraphs
      tl.to(mobileParagraphRefs.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "easeOut",
        stagger: 0.1,
      }, "-=0.3");

      // Animate mobile scroll
      tl.to(mobileScrollRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "easeOut",
      }, "-=0.3");
    };

    animate();

    return () => {
      killed = true;
    };
  }, [waitForCurtainOpen]);

  return (
    <div className="relative min-h-screen overflow-hidden text-[#FBF0DA] flex items-center justify-center">
      {/* Background Video */}
      <video
        data-scroll
        data-scroll-speed="-0.2"
        src={aboutVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-8 w-full h-screen flex items-center justify-center">

        {/* ---- Desktop Layout ---- */}
        <div className="hidden sm:block w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1
              ref={headingRef}
              className="text-[clamp(28px,5vw,90px)] font-normal"
              style={{ opacity: 0, transform: 'translateY(40px)' }}
            >
              ABOUT US
            </h1>
          </div>

          <div className="absolute lg:bottom-18 bottom-16 left-2 lg:left-8">
            <h5
              ref={scrollRef}
              className="text-xl font-light tracking-widest transform origin-left"
              style={{ opacity: 0, transform: 'translateY(40px)' }}
            >
              SCROLL
            </h5>
          </div>

          <div className="absolute lg:bottom-20 bottom-28 right-6 px-3 lg:right-8 max-w-md xl:max-w-xs">
            <div className="space-y-1">
              {paragraphLines.map((line, i) => (
                <p
                  key={i}
                  ref={(el) => (paragraphRefs.current[i] = el)}
                  className="text-[#FBF0DA] leading-[1.4] font-normal text-[3.5vw] sm:text-[2.2vw] md:text-base"
                  style={{ opacity: 0, transform: 'translateY(40px)' }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* ---- Mobile Layout ---- */}
        <div className="sm:hidden relative w-full h-full flex flex-col justify-center ">
          {/* About Heading (aligned left) */}
          <h1
            ref={mobileHeadingRef}
            className="text-4xl  tracking-wide text-left mt-10"
            style={{ opacity: 0, transform: 'translateY(40px)' }}
          >
            ABOUT US
          </h1>

          {/* Paragraph (aligned left) */}
          <div className="w-full max-w-md text-left mt-6 space-y-1">
            {paragraphLines.map((line, i) => (
              <p
                key={i}
                ref={(el) => (mobileParagraphRefs.current[i] = el)}
                className="text-[#FBF0DA] leading-[1.4] font-normal text-[3.5vw] sm:text-[2.2vw] md:text-base"
                style={{ opacity: 0, transform: 'translateY(40px)' }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* SCROLL text (bottom-left) */}
          <h5
            ref={mobileScrollRef}
            className="absolute bottom-6 left-0 text-md font-light tracking-widest"
            style={{ opacity: 0, transform: 'translateY(40px)' }}
          >
            SCROLL
          </h5>
        </div>
      </div>
    </div>
  );
}
