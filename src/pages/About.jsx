import React from "react";

import AboutLanding from '../components/about/AboutLanding'
import OurTeam from '../components/about/OurTeam'
import OurProcess from '../components/about/OurProcess'
import Footer from '../components/common/Footer'
import Line from '../components/common/Line'
import Origin from '../components/about/Origin'
import WhyChoose from '../components/about/WhyChoose'
import Philosophy from '../components/about/Philoshofy'
import CraftVisionSection from '../components/services/CraftVisionSection'

const About = () => {
  return (
    <div className="bg-[#FBF0DA]">

      <AboutLanding />
      <Origin />
      <Line />
      <OurTeam/>
      <Line />
      <Philosophy />
      <Line />
      <OurProcess />
      <WhyChoose/>
      <CraftVisionSection />
      <Footer />
    </div>
  )
}

export default About
