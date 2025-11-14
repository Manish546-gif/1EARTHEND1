import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { usePageTransition } from "../components/common/CurtainPreloader";
import projectimg from "../assets/unwater.jpeg";
import TransitionLink from "../components/common/redirect";

const ProjectsSection = () => {
  const { waitForCurtainOpen } = usePageTransition();
  const [showComingSoon, setShowComingSoon] = useState(false);

  const topBarH2Ref = useRef(null);
  const topBarPRef = useRef(null);
  const centerDivRef = useRef(null);
  const centerImgRef = useRef(null);
  const centerH1Ref = useRef(null);
  const centerPRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const progressBarRef = useRef(null);
  const comingSoonRef = useRef(null);

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

  useEffect(() => {
    let killed = false;

    const animate = async () => {
      await waitForCurtainOpen();
      if (killed) return;

      const tl = gsap.timeline();

      // Set initial states
      gsap.set(topBarH2Ref.current, { y: -20, opacity: 0 });
      gsap.set(topBarPRef.current, { y: -20, opacity: 0 });
      gsap.set(centerDivRef.current, { opacity: 0, y: 60, scale: 0.95 });
      gsap.set(centerImgRef.current, { scale: 1.05 });
      gsap.set(centerH1Ref.current, { opacity: 0, y: 20 });
      gsap.set(centerPRef.current, { opacity: 0, y: 20 });
      gsap.set(progressBarRef.current, { width: 0 });
      gsap.set(progressBarRef.current.children[0], { width: 0 });

      // Animate top bar
      tl.to(topBarH2Ref.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "easeOut",
      });

      tl.to(topBarPRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "easeOut",
      }, "-=0.6");

      // Animate center project
      tl.to(centerDivRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
      }, "-=0.4");

      tl.to(centerImgRef.current, {
        scale: 1,
        duration: 2.0,
        ease: "easeOut",
      }, "-=1.0");

      tl.to(centerH1Ref.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "easeOut",
      }, "-=0.8");

      tl.to(centerPRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "easeOut",
      }, "-=0.6");

      // Animate progress bar
      tl.to(progressBarRef.current, {
        width: 120,
        duration: 1,
        ease: "power2.out",
      }, "-=0.4");

      tl.to(progressBarRef.current.children[0], {
        width: "100%",
        duration: 1.2,
        ease: "easeOut",
      }, "-=0.8");
    };

    animate();

    return () => {
      killed = true;
    };
  }, [waitForCurtainOpen]);

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden text-[#FBF0DA]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Foreground */}
      <div className="relative z-10 h-full px-6 sm:px-10 md:px-16 lg:px-20 pt-28 sm:pt-32 pb-10 flex flex-col">

        {/* Top bar */}
        <div className="flex justify-between items-start">
          <h2
            ref={topBarH2Ref}
            className="text-[clamp(10px,1vw,14px)] tracking-[0.3em] font-light uppercase"
            style={{ opacity: 0, transform: 'translateY(-20px)' }}
          >
            OUR PROJECTS
          </h2>

          <p
            ref={topBarPRef}
            className="text-[clamp(10px,1vw,14px)] font-light"
            style={{ opacity: 0, transform: 'translateY(-20px)' }}
          >
            1 / 1
          </p>
        </div>

        {/* Center project */}
        <div className="flex flex-col items-center justify-center flex-grow">
          <div
            ref={centerDivRef}
            className="flex flex-col items-center"
            style={{ opacity: 0, transform: 'translateY(60px) scale(0.95)' }}
          >
            <TransitionLink to="/projectsolo">
              <div
                className="overflow-hidden shadow-2xl rounded"
                onMouseEnter={() => gsap.to(centerDivRef.current, { scale: 1.04, duration: 0.4 })}
                onMouseLeave={() => gsap.to(centerDivRef.current, { scale: 1, duration: 0.4 })}
              >
                <img
                  ref={centerImgRef}
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-[72vw] sm:w-[60vw] md:w-[42vw] lg:w-[32vw] h-[44vh] sm:h-[56vh] md:h-[60vh]"
                  style={{ scale: 1.05 }}
                />
              </div>
            </TransitionLink>

            <h1
              ref={centerH1Ref}
              className="mt-6 text-center md:text-left uppercase tracking-tight font-normal text-[clamp(20px,2.6vw,42px)]"
              style={{ opacity: 0, transform: 'translateY(20px)' }}
            >
              {project.name}
            </h1>

            <p
              ref={centerPRef}
              className="mt-1 text-[clamp(12px,1vw,16px)] tracking-wide text-[#FBF0DA]/85"
              style={{ opacity: 0, transform: 'translateY(20px)' }}
            >
              {project.location}
            </p>
          </div>
        </div>

        {/* Bottom controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-[clamp(11px,0.9vw,14px)] tracking-[0.2em] uppercase">
            <button
              ref={prevButtonRef}
              className="cursor-not-allowed opacity-50"
              onClick={() => gsap.to(prevButtonRef.current, { scale: 0.94, duration: 0.1, yoyo: true, repeat: 1 })}
            >
              Prev
            </button>
            <button
              ref={nextButtonRef}
              onClick={() => {
                gsap.to(nextButtonRef.current, { scale: 0.96, duration: 0.1, yoyo: true, repeat: 1 });
                handleNextClick();
              }}
            >
              Next
            </button>
          </div>

          {/* Progress bar */}
          <div
            ref={progressBarRef}
            className="h-[6px] rounded-full bg-[#FBF0DA]/30 overflow-hidden w-[120px]"
            style={{ width: 0 }}
          >
            <div
              className="h-full bg-[#FBF0DA] rounded-full shadow-[0_0_10px_rgba(251,240,218,0.8)]"
              style={{ width: 0 }}
            />
          </div>
        </div>
      </div>

      {/* Coming Soon Overlay */}
      {showComingSoon && (
        <div
          ref={comingSoonRef}
          className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-30"
          style={{ opacity: 0 }}
        >
          <h1
            className="text-[clamp(28px,4vw,64px)] font-light tracking-[0.2em]"
            style={{ transform: 'translateY(40px)', opacity: 0 }}
          >
            Coming Soon
          </h1>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
