import React, { useEffect, useRef, useState, createContext, useContext } from "react";
import { gsap } from "gsap";
import logoDefault from "../../assets/1earthcompletelogo.svg";

// Create context for page transitions
export const PageTransitionContext = createContext();

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error('usePageTransition must be used within CurtainPreloader');
  }
  return context;
};

const CurtainPreloader = ({ children }) => {
  const [showContent, setShowContent] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

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
    setShowContent(false);

    // Show container
    if (containerRef.current) {
      containerRef.current.style.display = 'block';
      containerRef.current.style.opacity = '1';
    }

    // Run combined closing-to-opening animation, then callback
    runCombinedAnimation(callback);
  };

  // Closing animation (reverse sequence)
  const runClosingAnimation = (onComplete) => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    document.body.style.overflow = "hidden";

    // 1. Close curtains from edges
    gsap.set([leftCurtainRef.current, rightCurtainRef.current], { x: 0 });
    
    tl.fromTo(
      leftCurtainRef.current,
      { x: "-100%" },
      { x: "0%", duration: 0.7, ease: "power3.inOut" }
    ).fromTo(
      rightCurtainRef.current,
      { x: "100%" },
      { x: "0%", duration: 0.7, ease: "power3.inOut" },
      "<"
    );

    // 2. Grow edge lines from edges
    gsap.set([leftEdgeLineRef.current, rightEdgeLineRef.current], { 
      scaleY: 0, 
      opacity: 1 
    });

    tl.to(
      leftEdgeLineRef.current,
      { scaleY: 1, duration: 0.7, ease: "power3.inOut" },
      "+=0.1"
    ).to(
      rightEdgeLineRef.current,
      { scaleY: 1, duration: 0.7, ease: "power3.inOut" },
      "<+=0.1"
    );

    // 3. Show logo container and set initial states
    gsap.set(logoContainerRef.current, { opacity: 0 });
    gsap.set(logoDefaultRef.current, { opacity: 1 });

    // Set circle to be fully visible during closing
    if (circleArcRef.current) {
      const circleLength = circleArcRef.current.getTotalLength();
      gsap.set(circleArcRef.current, {
        strokeDasharray: circleLength,
        strokeDashoffset: -1,
        stroke: "#FBF0DA",
        strokeWidth: 0.5
      });
    }

    tl.to(logoContainerRef.current, { opacity: 1, duration: 0.4 });

    // 4. Grow center lines from edges to circle perimeter
    if (circleArcRef.current) {
      const rect = logoContainerRef.current.getBoundingClientRect();
      const radiusPx = rect.width / 2;

      gsap.set(topLineRef.current, {
        height: `calc(40% - ${radiusPx}px)`,
        bottom: `calc(40% + ${radiusPx}px)`,
        top: 'auto',
        scaleY: 0,
        opacity: 1,
        visibility: 'visible',
        transformOrigin: 'top'
      });

      gsap.set(bottomLineRef.current, {
        height: `calc(50% - ${radiusPx}px)`,
        top: `calc(50% + ${radiusPx}px)`,
        bottom: 'auto',
        scaleY: 0,
        opacity: 1,
        visibility: 'visible',
        transformOrigin: 'bottom'
      });

      tl.to(
        topLineRef.current,
        { scaleY: 1, duration: 0.7, ease: "power3.inOut" },
        "<"
      ).to(
        bottomLineRef.current,
        { scaleY: 1, duration: 0.7, ease: "power3.inOut" },
        "<+=0.1"
      );
    }

    return tl;
  };

  // Combined closing-to-opening animation
  const runCombinedAnimation = (switchCallback) => {
    const tl = gsap.timeline({
      onComplete: () => {
        setShowContent(true);
        setIsTransitioning(false);
        document.body.style.overflow = "auto";
        if (containerRef.current) {
          containerRef.current.style.display = "none";
        }
      },
    });

    document.body.style.overflow = "hidden";

    // 1. Close curtains from edges
    gsap.set([leftCurtainRef.current, rightCurtainRef.current], { x: 0 });

    tl.fromTo(
      leftCurtainRef.current,
      { x: "-100%" },
      { x: "0%", duration: 0.7, ease: "power3.inOut" }
    ).fromTo(
      rightCurtainRef.current,
      { x: "100%" },
      { x: "0%", duration: 0.7, ease: "power3.inOut" },
      "<"
    );

    // 2. Grow edge lines from edges
    gsap.set([leftEdgeLineRef.current, rightEdgeLineRef.current], {
      scaleY: 0,
      opacity: 1
    });

    tl.to(
      leftEdgeLineRef.current,
      { scaleY: 1, duration: 0.7, ease: "power3.inOut" },
      "+=0.1"
    ).to(
      rightEdgeLineRef.current,
      { scaleY: 1, duration: 0.7, ease: "power3.inOut" },
      "<+=0.1"
    );

    // 3. Show logo container and set initial states
    gsap.set(logoContainerRef.current, { opacity: 0 });
    gsap.set(logoDefaultRef.current, { opacity: 1 });

    // Set circle to be fully visible during closing
    if (circleArcRef.current) {
      const circleLength = circleArcRef.current.getTotalLength();
      gsap.set(circleArcRef.current, {
        strokeDasharray: circleLength,
        strokeDashoffset: -1,
        stroke: "#FBF0DA",
        strokeWidth: 0.5
      });
    }

    tl.to(logoContainerRef.current, { opacity: 1, duration: 0.4 });

    // 4. Grow center lines from edges to circle perimeter
    if (circleArcRef.current) {
      const rect = logoContainerRef.current.getBoundingClientRect();
      const radiusPx = rect.width / 2;

      gsap.set(topLineRef.current, {
        height: `calc(50% - ${radiusPx}px)`,
        bottom: `calc(50% + ${radiusPx}px)`,
        top: 'auto',
        scaleY: 0,
        opacity: 1,
        visibility: 'visible',
        transformOrigin: 'top'
      });

      gsap.set(bottomLineRef.current, {
        height: `calc(50% - ${radiusPx}px)`,
        top: `calc(50% + ${radiusPx}px)`,
        bottom: 'auto',
        scaleY: 0,
        opacity: 1,
        visibility: 'visible',
        transformOrigin: 'bottom'
      });

      tl.to(
        topLineRef.current,
        { scaleY: 1, duration: 0.7, ease: "power3.inOut" },
        "<"
      ).to(
        bottomLineRef.current,
        { scaleY: 1, duration: 0.7, ease: "power3.inOut" },
        "<+=0.1"
      ).call(() => {
        if (switchCallback) switchCallback();
      }, [], "+=0.1");
    }

    // 5. Once lines reach the circle, start the circle disappearing animation
    tl.to(circleArcRef.current, {
      strokeDashoffset: () => circleArcRef.current.getTotalLength(),
      duration: 0.8,
      ease: "power2.inOut",
    }, "+=0.2");

    // 6. Hide logo and shrink lines simultaneously
    tl.to(logoContainerRef.current, { opacity: 0, duration: 0.6 }, "+=0.1")
      .to(
        [leftEdgeLineRef.current, rightEdgeLineRef.current, topLineRef.current, bottomLineRef.current],
        { scaleY: 0, duration: 0.8, ease: "power3.inOut" },
        "<"
      );

    // 7. Open curtains
    tl.to(
      leftCurtainRef.current,
      { x: "-100%", duration: 0.8, ease: "power3.inOut" },
      "+=0.1"
    ).to(
      rightCurtainRef.current,
      { x: "100%", duration: 0.8, ease: "power3.inOut" },
      "<"
    );

    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.2,
    }, "+=0.3");

    return tl;
  };


  // Preload images before starting animation
  useEffect(() => {
    let isMounted = true;

    const imagesToPreload = [
      logoDefault,
      "../../assets/HomeLanding.mp4", // video
      "../../assets/1.png",
      "../../assets/1earthcompletelogo.svg",
      "../../assets/111.jpg",
      "../../assets/2222.jpg",
      "../../assets/aboutland.png",
      "../../assets/blank1.png",
      "../../assets/blank2.png",
      "../../assets/center1.png",
      "../../assets/centerbottom.png",
      "../../assets/craft1.png",
      "../../assets/craft2.png",
      "../../assets/earthlogo.svg",
      "../../assets/feature1.png",
      "../../assets/feature2.png",
      "../../assets/homeproject.png",
      "../../assets/house-1477041_1920.png",
      "../../assets/info1.png",
      "../../assets/info2.png",
      "../../assets/LandingHome.png",
      "../../assets/leftbottom.png",
      "../../assets/lefttop.png",
      "../../assets/menu.svg",
      "../../assets/nextp.png",
      "../../assets/origin2.png",
      "../../assets/origin3.png",
      "../../assets/projectland.png",
      "../../assets/Property 1=Default.png",
      "../../assets/Property 1=Variant2.png",
      "../../assets/react.svg",
      "../../assets/Rectangle 2.png",
      "../../assets/Rectangle 3.png",
      "../../assets/Rectangle 51.png",
      "../../assets/Rectangle 79.png",
      "../../assets/Rectangle 107.png",
      "../../assets/Rectangle 108.png",
      "../../assets/Rectangle 109.png",
      "../../assets/Rectangle 110.png",
      "../../assets/rightbottom.png",
      "../../assets/righttop.png",
      "../../assets/serviceland.png",
      "../../assets/team1.png",
      "../../assets/team2.png",
      "../../assets/topleft.png",
      "../../assets/whychoose.png",
    ];

    const preloadImages = () => {
      let loadedCount = 0;
      const totalImages = imagesToPreload.length;

      const checkAllLoaded = () => {
        loadedCount++;
        if (loadedCount === totalImages && isMounted) {
          setImagesLoaded(true);
        }
      };

      imagesToPreload.forEach(src => {
        if (src.endsWith('.mp4')) {
          // Handle video preload
          const video = document.createElement('video');
          video.preload = 'metadata';
          video.onloadedmetadata = checkAllLoaded;
          video.onerror = checkAllLoaded;
          video.src = src;
        } else {
          // Handle image preload
          const img = new Image();
          img.onload = checkAllLoaded;
          img.onerror = checkAllLoaded;
          img.src = src;
        }
      });
    };

    preloadImages();

    return () => {
      isMounted = false;
    };
  }, []);

  // Initial load animation
  useEffect(() => {
    if (!imagesLoaded || !isInitialLoad) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setShowContent(true);
        setIsInitialLoad(false);
        document.body.style.overflow = "auto";
      },
    });

    document.body.style.overflow = "hidden";

    // Set initial heights for center lines
    if (circleArcRef.current) {
      const rect = logoContainerRef.current.getBoundingClientRect();
      const radiusPx = rect.width / 2;

      gsap.set(topLineRef.current, {
        height: `calc(50% - ${radiusPx}px)`,
        bottom: `calc(50% + ${radiusPx}px)`,
        top: 'auto',
        scaleY: 1,
        opacity: 1,
        visibility: 'visible',
        transformOrigin: 'top'
      });

      gsap.set(bottomLineRef.current, {
        height: `calc(50% - ${radiusPx}px)`,
        top: `calc(50% + ${radiusPx}px)`,
        bottom: 'auto',
        scaleY: 1,
        opacity: 1,
        visibility: 'visible',
        transformOrigin: 'bottom'
      });
    }

    gsap.set([leftEdgeLineRef.current, rightEdgeLineRef.current], {
      scaleY: 1,
      opacity: 1
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

    tl.to({}, { duration: 0.6 });

    if (circleArcRef.current) {
      const circleLength = circleArcRef.current.getTotalLength();
      tl.to(circleArcRef.current, {
        strokeDashoffset: circleLength,
        duration: 1.2,
        ease: "power2.inOut",
      }, "+=0.5");
    }

    tl.to(logoContainerRef.current, { opacity: 0, duration: 0.4 }, "+=0.3")
      .to(
        [leftEdgeLineRef.current, rightEdgeLineRef.current],
        { scaleY: 0, duration: 0.7, ease: "power3.inOut", stagger: 0.1 },
        "<"
      )
      .to(
        [topLineRef.current, bottomLineRef.current],
        { scaleY: 0, duration: 0.7, ease: "power3.inOut", stagger: 0.1 },
        "<"
      );

    tl.to(
      leftCurtainRef.current,
      { x: "-100%", duration: 0.7, ease: "power3.inOut" },
      "+=0.1"
    ).to(
      rightCurtainRef.current,
      { x: "100%", duration: 0.7, ease: "power3.inOut" },
      "<"
    );

    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        if (containerRef.current) {
          containerRef.current.style.display = "none";
        }
      },
    });

    const fallbackTimeout = setTimeout(() => {
      setShowContent(true);
      setIsInitialLoad(false);
      document.body.style.overflow = "auto";
      if (containerRef.current) containerRef.current.style.display = "none";
      tl.kill();
    }, 8000);

    return () => {
      clearTimeout(fallbackTimeout);
      tl.kill();
      document.body.style.overflow = "auto";
    };
  }, [imagesLoaded, isInitialLoad]);

  // Show loading screen while images are loading
  if (!imagesLoaded) {
    return (
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          backgroundColor: '#011827',
          overflow: 'hidden'
        }}
      />
    );
  }

  return (
    <PageTransitionContext.Provider value={{ startPageTransition, isTransitioning }}>
      <div 
        ref={containerRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          overflow: 'hidden',
          display: showContent && !isTransitioning ? 'none' : 'block',
          backgroundColor: 'transparent'
        }}
      >
        {/* Left Curtain */}
        <div
          ref={leftCurtainRef}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '50%',
            height: '100%',
            backgroundColor: '#011827'
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div
              ref={leftEdgeLineRef}
              style={{
                width: '0.5px',
                height: '100%',
                position: 'absolute',
                left: '15%',
                bottom: 0,
                transformOrigin: 'bottom',
                backgroundColor: '#FBF0DA',
                opacity: 0.8
              }}
            />

            <div
              ref={topLineRef}
              style={{
                width: '0.5px',
                position: 'absolute',
                right: 0,
                backgroundColor: '#FBF0DA',
                opacity: 0,
                visibility: 'hidden'
              }}
            />

            <div
              ref={bottomLineRef}
              style={{
                width: '0.5px',
                position: 'absolute',
                right: 0,
                backgroundColor: '#FBF0DA',
                opacity: 0,
                visibility: 'hidden'
              }}
            />
          </div>
        </div>

        {/* Right Curtain */}
        <div
          ref={rightCurtainRef}
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '50%',
            height: '100%',
            backgroundColor: '#011827'
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div
              ref={rightEdgeLineRef}
              style={{
                width: '0.5px',
                height: '100%',
                position: 'absolute',
                right: '15%',
                top: 0,
                transformOrigin: 'top',
                backgroundColor: '#FBF0DA',
                opacity: 0.8
              }}
            />
          </div>
        </div>

        {/* Logo Container */}
        <div
          ref={logoContainerRef}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '160px',
            height: '160px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            opacity: 0
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                backgroundColor: '#011827',
                zIndex: 10001,
                pointerEvents: 'none'
              }}
            />

            <img
              ref={logoDefaultRef}
              src={logoDefault}
              alt="Logo"
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                height: '80%',
                objectFit: 'contain',
                zIndex: 10002,
                opacity: 0
              }}
            />

            <svg
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                zIndex: 10003
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
      
      {showContent && children}
    </PageTransitionContext.Provider>
  );
};

export default CurtainPreloader;