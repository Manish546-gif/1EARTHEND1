import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/ProjectsSection";
import Projectsolo from "./pages/Projectsolo";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import HomeLanding from "./components/home/HomeLanding";

const App = () => {
  const scrollRef = useRef(null);
  const location = useLocation();
  const locoInstance = useRef(null);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    
    if (locoInstance.current) {
      locoInstance.current.destroy();
      locoInstance.current = null;
    }

  
    
    scrollEl.scrollTop = 0;
    window.scrollTo(0, 0);

 
    
    locoInstance.current = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.08,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    
    requestAnimationFrame(() => {
      locoInstance.current?.scrollTo(0, { duration: 0, disableLerp: true });
    });
    
    setTimeout(() => locoInstance.current?.update(), 500);

    return () => {
      locoInstance.current?.destroy();
    };
  }, [location.pathname]);
  
  useEffect(() => {
    const appContainer = scrollRef.current;
    if (appContainer) {
      appContainer.style.opacity = "0";
      appContainer.style.transition = "opacity 1s ease-out";
      setTimeout(() => (appContainer.style.opacity = "1"), 200);
    }
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="overflow-hidden bg-[#FBF0DA]"
    >
      <Navbar />

    
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/projectsolo" element={<Projectsolo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/homelanding" element={<HomeLanding />} />
      </Routes>
    </div>
  );
};

export default App;
