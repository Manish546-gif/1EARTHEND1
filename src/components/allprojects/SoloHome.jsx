import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { usePageTransition } from "../common/CurtainPreloader";
import projectimg from "../../assets/mybird.jpg";

export default function SoloHome() {
  const { waitForCurtainOpen } = usePageTransition();
  const titleRefs = useRef([]);
  const locationRef = useRef(null);

  const title = ["HARMONY", "HIGHLAND"];

  useEffect(() => {
    let killed = false;

    const animate = async () => {
      await waitForCurtainOpen();
      if (killed) return;

      const tl = gsap.timeline();

      // Set initial states
      gsap.set(titleRefs.current, { y: 30, opacity: 0 });
      gsap.set(locationRef.current, { y: 30, opacity: 0 });

      // Animate title
      tl.to(titleRefs.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "easeOut",
        stagger: 0.1,
      });

      // Animate location
      tl.to(locationRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "easeOut",
      }, "-=0.4");
    };

    animate();

    return () => {
      killed = true;
    };
  }, [waitForCurtainOpen]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <img
        src={projectimg}
        alt="Harmony Highland"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Subtle bottom gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/30 to-black/10" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-end">
        <div className="w-full px-6 md:px-12 pb-16 md:pb-24 text-[#FBF0DA]">
          {/* Title */}
          <div className="text-left leading-none">
            {title.map((word, i) => (
              <span
                key={word}
                ref={(el) => (titleRefs.current[i] = el)}
                className="block font-normal leading-[0.95] text-[clamp(32px,8vw,120px)] uppercase"
                style={{ opacity: 0, transform: 'translateY(30px)' }}
              >
                {word}
              </span>
            ))}
          </div>

          {/* Location */}
          <p
            ref={locationRef}
            className="mt-3 text-[clamp(12px,1.2vw,18px)] tracking-wide"
            style={{ opacity: 0, transform: 'translateY(30px)' }}
          >
            Velhe, Bhor, Pune
          </p>
        </div>
      </div>
    </section>
  );
}
