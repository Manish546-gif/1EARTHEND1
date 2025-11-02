import React from "react";

import Footer from '../components/common/Footer'
import LetterParallax from '../components/home/LetterParallax'
import CraftVisionSection from '../components/services/CraftVisionSection'
import HomeLanding from '../components/home/HomeLanding'
import OverDesign from '../components/home/OverDesign.jsx'
import ParallaxGallery from '../components/home/ParallaxGallery.jsx'
import ImgHarmony from '../components/home/ImgHarmony.jsx'
import Line from "../components/common/Line.jsx";
import EveryAbout from "../components/home/EveryAbout.jsx";
import ProjectHome from '../components/home/ProjectHome.jsx'



const Home = () => {
  return (
    <div className="bg-[#FBF0DA]">
      <HomeLanding />
      <EveryAbout/>
      <Line />
      <ParallaxGallery />
      <LetterParallax />
      <ProjectHome />
      <OverDesign />
      <Line />
      <ImgHarmony />
      <CraftVisionSection />
      <Footer />

    </div>
  )
}

export default Home;
