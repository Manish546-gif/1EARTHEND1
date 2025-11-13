import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';


gsap.registerPlugin(ScrollTrigger);

export default function LetterParallaxService() {
    const containerRef = useRef(null);
    const textRef = useRef(null);
  
    useEffect(() => {
      const letters = textRef.current.querySelectorAll('.letter');
      const container = containerRef.current;
  
      gsap.set(letters, {
        opacity: 0,
        rotationX: () => gsap.utils.random(45, 180),
        rotationY: () => gsap.utils.random(-90, 90),
        rotationZ: () => gsap.utils.random(-45, 45),
        scale: 0.2,
        z: () => gsap.utils.random(-2000, -500), 
        transformOrigin: "center center",
        filter: "blur(1px)",
      });
  
    
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
         start: "-15% 60%",
      //  markers:true,
        end: "90% 60%",
          scrub: 1.5,
        }
      });
  
      
      mainTl.to(letters, {
        opacity: 1,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scale: 1,
        z: 0, 
        filter: "blur(0px)",
        duration: 2.5,
        ease: "power2.out",
        stagger: {
          amount: 1.2,
          from: "start"
        }
      });
  
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }, []);
  
    const createLetters = (text) => {
      return text.split('').map((char, index) => (
        <span
          key={index}
          className="letter inline-block transform-gpu"
          style={{ 
            display: char === ' ' ? 'inline' : 'inline-block',
            width: char === ' ' ? '0.5em' : 'auto',
            transformStyle: 'preserve-3d'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    };
  
    return (
    <div
      ref={containerRef}
      className="relative md:h-[84vh] h-[40vh]  md:mt-45 bg-[#FBF0DA] md:mt-0 lg:mt-0 mt-10  overflow-hidden  justify-center"
      style={{ perspective: '2000px' }}
    >
    <div className='flex justify-center uppercase text-2xl mb-10 text-gray-900'>
         <motion.h2
  initial={{ y: 40, opacity: 0, scale: 0.95 }}
  whileInView={{ y: 0, opacity: 1, scale: 1 }}
  transition={{
    duration: 1,
    ease: [0.25, 0.46, 0.45, 0.94],
  }}
  viewport={{ once: true }}
>
  Innovation
</motion.h2>
      </div>
        <div className="relative z-10 text-center" style={{ transformStyle: 'preserve-3d' }}>
          <div 
            ref={textRef}
            className="text-5xl md:text-9xl lg:text-10xl  text-black leading-tight select-none"
            style={{ 
              perspective: '2000px',
              transformStyle: 'preserve-3d'
            }}
          >
            
            <div className="block " style={{ transformStyle: 'preserve-3d' }}>
              {createLetters('CRAFTED WITH')}
            </div>
            
            <div className="block" style={{ transformStyle: 'preserve-3d' }}>
              {createLetters('PURPOSE')}
            </div>
          </div>
        </div>
      </div>
  );
}
