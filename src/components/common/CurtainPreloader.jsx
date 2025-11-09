import React, { useEffect, useRef, useState, createContext, useContext } from "react";
import { gsap } from "gsap";
import logoDefault from "../../assets/1earthcompletelogo.svg";

// Create context for page transitions
export const PageTransitionContext = createContext();

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error("usePageTransition must be used within CurtainPreloader");
  }
  return context;
};

const CurtainPreloader = ({ children }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // New: curtain open state + promise resolvers for "waitForCurtainOpen"
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);
  const curtainOpenResolvers = useRef([]);

  const resolveAllCurtainWaiters = () => {
    setIsCurtainOpen(true);
    curtainOpenResolvers.current.forEach((r) => r());
    curtainOpenResolvers.current = [];
  };

  // Consumers call this to start their GSAP once curtains are open
  const waitForCurtainOpen = () => {
    if (isCurtainOpen && !isTransitioning && !isInitialLoad) {
      // Already open right now
      return Promise.resolve();
    }
    // Return a promise that resolves when we mark open
    return new Promise((res) => {
      curtainOpenResolvers.current.push(res);
    });
  };

  // Refs for animated parts
  const containerRef = useRef(null);
  const leftCurtainRef = useRef(null);
  const rightCurtainRef = useRef(null);
  const leftEdgeLineRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const rightEdgeLineRef = useRef(null);
  const logoContainerRef = useRef(null);
  const logoDefaultRef = useRef(null);
  const circleArcRef = useRef(null);

  // Function to trigger page transition
  const startPageTransition = (callback) => {
    setIsTransitioning(true);
    setIsCurtainOpen(false); // we're about to close them again

    // Show container
    if (containerRef.current) {
      containerRef.current.style.display = "block";
      containerRef.current.style.opacity = "1";
    }

    // Run combined closing-to-opening animation, then callback
    runCombinedAnimation(callback);
  };

  // Combined closing-to-opening animation
  const runCombinedAnimation = (switchCallback) => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsTransitioning(false);
        document.body.style.overflow = "auto";
        if (containerRef.current) {
          containerRef.current.style.display = "none";
        }
        // Final safety: ensure anyone still waiting gets resolved
        resolveAllCurtainWaiters();
      },
    });

    document.body.style.overflow = "hidden";

    // 1. Close curtains from edges
    gsap.set([leftCurtainRef.current, rightCurtainRef.current], { x: 0 });

    tl.fromTo(
      leftCurtainRef.current,
      { x: "-100%" },
      { x: "0%", duration: 0.5, ease: "power3.inOut" }
    ).fromTo(
      rightCurtainRef.current,
      { x: "100%" },
      { x: "0%", duration: 0.5, ease: "power3.inOut" },
      "<"
    );

    // 2. Grow edge lines from edges
    gsap.set([leftEdgeLineRef.current, rightEdgeLineRef.current], {
      scaleY: 0,
      opacity: 1,
    });

    tl.to(
      leftEdgeLineRef.current,
      { scaleY: 1, duration: 0.5, ease: "power3.inOut" },
      "+=0.1"
    ).to(
      rightEdgeLineRef.current,
      { scaleY: 1, duration: 0.5, ease: "power3.inOut" },
      "<+=0.1"
    );

    // 3. Show logo container and set initial states
    gsap.set(logoContainerRef.current, { opacity: 0 });
    gsap.set(logoDefaultRef.current, { opacity: 1 });

    if (circleArcRef.current) {
      const circleLength = circleArcRef.current.getTotalLength();
      gsap.set(circleArcRef.current, {
        strokeDasharray: circleLength,
        strokeDashoffset: -1,
        stroke: "#FBF0DA",
        strokeWidth: 0.5,
      });
    }

    tl.to(logoContainerRef.current, { opacity: 1, duration: 0.3 });

    // 4. Grow center lines from edges to circle perimeter
    if (circleArcRef.current) {
      const rect = logoContainerRef.current.getBoundingClientRect();
      const radiusPx = rect.width / 2;

      gsap.set(topLineRef.current, {
        height: `calc(50% - ${radiusPx}px)`,
        bottom: `calc(50% + ${radiusPx}px)`,
        top: "auto",
        scaleY: 0,
        opacity: 1,
        visibility: "visible",
        transformOrigin: "top",
      });

      gsap.set(bottomLineRef.current, {
        height: `calc(50% - ${radiusPx}px)`,
        top: `calc(50% + ${radiusPx}px)`,
        bottom: "auto",
        scaleY: 0,
        opacity: 1,
        visibility: "visible",
        transformOrigin: "bottom",
      });

      tl.to(
        topLineRef.current,
        { scaleY: 1, duration: 0.5, ease: "power3.inOut" },
        "<"
      )
        .to(
          bottomLineRef.current,
          { scaleY: 1, duration: 0.5, ease: "power3.inOut" },
          "<+=0.1"
        )
        .call(() => {
          if (switchCallback) switchCallback();
        }, [], "+=0.1");
    }

    // 5. Circle draws out (disappears)
    tl.to(
      circleArcRef.current,
      {
        strokeDashoffset: () => circleArcRef.current.getTotalLength(),
        duration: 0.6,
        ease: "power2.inOut",
      },
      "+=0.2"
    );

    // 6. Hide logo and shrink lines simultaneously
    tl.to(logoContainerRef.current, { opacity: 0, duration: 0.4 }, "+=0.1").to(
      [leftEdgeLineRef.current, rightEdgeLineRef.current, topLineRef.current, bottomLineRef.current],
      { scaleY: 0, duration: 0.6, ease: "power3.inOut" },
      "<"
    );

    // 7. Open curtains (reveals real page beneath)
    tl.to(
      leftCurtainRef.current,
      { x: "-100%", duration: 0.6, ease: "power3.inOut" },
      "+=0.1"
    ).to(
      rightCurtainRef.current,
      { x: "100%", duration: 0.6, ease: "power3.inOut" },
      "<"
    );

    // Hide overlay and mark curtains as OPEN, then resolve waiters
    tl.to(
      containerRef.current,
      {
        opacity: 0,
        duration: 0.1,
        onComplete: () => {
          if (containerRef.current) containerRef.current.style.display = "none";
          resolveAllCurtainWaiters(); // ✅ notify listeners right when fully open
        },
      },
      "+=0.2"
    );

    return tl;
  };

  // Preload images before starting animation (but keep content mounted)
  useEffect(() => {
    let isMounted = true;

    const assets = [
      logoDefault,
      "../../assets/HomeLanding.mp4",
      "../../assets/1earthcompletelogo.svg",
    ];

    let loadedCount = 0;
    const total = assets.length;

    const done = () => {
      loadedCount += 1;
      if (loadedCount === total && isMounted) setImagesLoaded(true);
    };

    assets.forEach((src) => {
      if (src.endsWith(".mp4")) {
        const video = document.createElement("video");
        video.preload = "metadata";
        video.onloadedmetadata = done;
        video.onerror = done;
        video.src = src;
      } else {
        const img = new Image();
        img.onload = done;
        img.onerror = done;
        img.src = src;
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  // Initial load animation (content stays mounted underneath)
  useEffect(() => {
    if (!imagesLoaded || !isInitialLoad) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setIsInitialLoad(false);
        setIsTransitioning(false);
        document.body.style.overflow = "auto";
        // Failsafe final resolve
        resolveAllCurtainWaiters();
      },
    });

    setIsTransitioning(true);
    setIsCurtainOpen(false); // we start closed on initial load
    document.body.style.overflow = "hidden";

    // Set initial states
    gsap.set([leftEdgeLineRef.current, rightEdgeLineRef.current], {
      scaleY: 1,
      opacity: 1,
    });

    gsap.set(logoContainerRef.current, { opacity: 1 });
    gsap.set(logoDefaultRef.current, { opacity: 1 });

    if (circleArcRef.current) {
      const circleLength = circleArcRef.current.getTotalLength();
      gsap.set(circleArcRef.current, {
        strokeDasharray: circleLength,
        strokeDashoffset: -1,
        stroke: "#FBF0DA",
        strokeWidth: 0.5,
      });
    }

    if (circleArcRef.current) {
      const rect = logoContainerRef.current.getBoundingClientRect();
      const radiusPx = rect.width / 2;

      gsap.set(topLineRef.current, {
        height: `calc(50% - ${radiusPx}px)`,
        bottom: `calc(50% + ${radiusPx}px)`,
        top: "auto",
        scaleY: 1,
        opacity: 1,
        visibility: "visible",
        transformOrigin: "top",
      });

      gsap.set(bottomLineRef.current, {
        height: `calc(50% - ${radiusPx}px)`,
        top: `calc(50% + ${radiusPx}px)`,
        bottom: "auto",
        scaleY: 1,
        opacity: 1,
        visibility: "visible",
        transformOrigin: "bottom",
      });
    }

    // Circle animation
    if (circleArcRef.current) {
      const circleLength = circleArcRef.current.getTotalLength();
      tl.to(circleArcRef.current, {
        strokeDashoffset: circleLength,
        duration: 0.8,
        ease: "power2.inOut",
      });
    }

    // Fade out logo and shrink lines
    tl.to(logoContainerRef.current, { opacity: 0, duration: 0.3 }, "+=0.2").to(
      [leftEdgeLineRef.current, rightEdgeLineRef.current, topLineRef.current, bottomLineRef.current],
      { scaleY: 0, duration: 0.5, ease: "power3.inOut" },
      "<"
    );

    // Open curtains to reveal the already-mounted content
    tl.to(
      leftCurtainRef.current,
      { x: "-100%", duration: 0.5, ease: "power3.inOut" },
      "+=0.1"
    ).to(
      rightCurtainRef.current,
      { x: "100%", duration: 0.5, ease: "power3.inOut" },
      "<"
    );

    // Mark open and hide overlay
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.1,
      onComplete: () => {
        if (containerRef.current) containerRef.current.style.display = "none";
        resolveAllCurtainWaiters(); // ✅ tell listeners the curtain is open now
      },
    });

    const fallback = setTimeout(() => {
      setIsInitialLoad(false);
      setIsTransitioning(false);
      document.body.style.overflow = "auto";
      if (containerRef.current) containerRef.current.style.display = "none";
      tl.kill();
      resolveAllCurtainWaiters(); // ensure promises aren't left hanging
    }, 8000);

    return () => {
      clearTimeout(fallback);
      tl.kill();
      document.body.style.overflow = "auto";
    };
  }, [imagesLoaded, isInitialLoad]);

  const overlayVisible = isInitialLoad || isTransitioning;

  return (
    <PageTransitionContext.Provider
      value={{
        startPageTransition,
        isTransitioning,
        isCurtainOpen,
        waitForCurtainOpen,
      }}
    >
      {/* Content is ALWAYS mounted so the curtains reveal it */}
      {children}

      {/* Curtain overlay (transparent background so it reveals content when open) */}
      <div
        ref={containerRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          overflow: "hidden",
          display: overlayVisible ? "block" : "none",
          backgroundColor: "transparent",
        }}
      >
        {/* Left Curtain */}
        <div
          ref={leftCurtainRef}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "50%",
            height: "100%",
            backgroundColor: "#011827",
          }}
        >
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <div
              ref={leftEdgeLineRef}
              style={{
                width: "0.5px",
                height: "100%",
                position: "absolute",
                left: "15%",
                bottom: 0,
                transformOrigin: "bottom",
                backgroundColor: "#FBF0DA",
                opacity: 0.8,
              }}
            />

            <div
              ref={topLineRef}
              style={{
                width: "0.5px",
                position: "absolute",
                right: 0,
                backgroundColor: "#FBF0DA",
                opacity: 0,
                visibility: "hidden",
              }}
            />

            <div
              ref={bottomLineRef}
              style={{
                width: "0.5px",
                position: "absolute",
                right: 0,
                backgroundColor: "#FBF0DA",
                opacity: 0,
                visibility: "hidden",
              }}
            />
          </div>
        </div>

        {/* Right Curtain */}
        <div
          ref={rightCurtainRef}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "50%",
            height: "100%",
            backgroundColor: "#011827",
          }}
        >
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <div
              ref={rightEdgeLineRef}
              style={{
                width: "0.5px",
                height: "100%",
                position: "absolute",
                right: "15%",
                top: 0,
                transformOrigin: "top",
                backgroundColor: "#FBF0DA",
                opacity: 0.8,
              }}
            />
          </div>
        </div>

        {/* Logo + Circle */}
        <div
          ref={logoContainerRef}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "160px",
            height: "160px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10000,
            opacity: 0,
            pointerEvents: "none",
          }}
        >
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                backgroundColor: "#011827",
                zIndex: 10001,
                pointerEvents: "none",
              }}
            />

            <img
              ref={logoDefaultRef}
              src={logoDefault}
              alt="Logo"
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "80%",
                height: "80%",
                objectFit: "contain",
                zIndex: 10002,
                opacity: 0,
                pointerEvents: "none",
              }}
            />

            <svg
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                zIndex: 10003,
                pointerEvents: "none",
              }}
              viewBox="0 0 100 100"
            >
              <circle
                ref={circleArcRef}
                transform="rotate(0 50 50)"
                cx="50"
                cy="50"
                r="49.5"
                stroke="#FBF0DA"
                strokeWidth="0.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </PageTransitionContext.Provider>
  );
};

export default CurtainPreloader;
