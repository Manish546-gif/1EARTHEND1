import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import logoDefault from "../../assets/Property 1=Default.png";
import logoVariant from "../../assets/Property 1=Variant2.png";

const Stair = (props) => {
  const locate = useLocation().pathname;

  const stairParentRef = useRef(null);
  const pageRef = useRef(null);
  const logoContainerRef = useRef(null);
  const logoFillRef = useRef(null);
  const logoDefaultRef = useRef(null);
  const logoVariantRef = useRef(null);

  // Disable scrolling while loading animation runs
  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable scroll when component unmounts or animation finishes
      document.body.style.overflow = "auto";
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Re-enable scroll after animation completes
        document.body.style.overflow = "auto";
      }
    });

    // Show stair parent
    tl.to(stairParentRef.current, { display: "block" });

    // Stairs animation - come in first
    tl.from(".stair", {
      height: 0,
      stagger: { amount: -0.25 },
    });

    // Show logo container
    tl.to(logoContainerRef.current, { display: "flex", opacity: 1, duration: 0.1 });

    // Show default logo
    tl.to(logoDefaultRef.current, { opacity: 1, duration: 0.1 });

    // Logo fill animation
    tl.fromTo(
      logoFillRef.current,
      { clipPath: "inset(100% 0% 0% 0%)" },
      { clipPath: "inset(0% 0% 0% 0%)", duration: 3, ease: "power2.inOut", }
    );

    // Hide logo
    tl.to(logoContainerRef.current, { opacity: 0, duration: 0.3,  });

    // Reveal stairs going up
    tl.to(".stair", { y: "100%", stagger: { amount: -0.25 } });
    tl.to(stairParentRef.current, { display: "none" });
    tl.to(".stair", { y: "0%" });

    // Page entrance
    gsap.from(pageRef.current, { opacity: 0, delay: 5.1, scale: 1.02 });
  }, [locate]);

  return (
    <div>
      <div ref={stairParentRef} className="h-screen w-full fixed z-10 top-0">
        {/* Logo Container */}
        <div
          ref={logoContainerRef}
          className="absolute inset-0 flex items-center justify-center z-20 opacity-0"
          style={{ display: "none" }}
        >
          <div className="relative w-38 h-38 sm:w-52 sm:h-52 md:w-64 md:h-64">
            <img
              ref={logoDefaultRef}
              src={logoDefault}
              alt="Logo"
              className="absolute inset-0 w-full h-full object-contain opacity-0"
            />
            <div ref={logoFillRef} className="absolute inset-0" style={{ clipPath: "inset(100% 0% 0% 0%)" }}>
              <img ref={logoVariantRef} src={logoVariant} alt="Logo Variant" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Stairs */}
        <div className="h-screen w-full flex">
          <div className="stair h-full w-1/5 bg-[#011827]"></div>
          <div className="stair h-full w-1/5 bg-[#011827]"></div>
          <div className="stair h-full w-1/5 bg-[#011827]"></div>
          <div className="stair h-full w-1/5 bg-[#011827]"></div>
          <div className="stair h-full w-1/5 bg-[#011827]"></div>
        </div>
      </div>
      <div ref={pageRef}>{props.children}</div>
    </div>
  );
};

export default Stair;
