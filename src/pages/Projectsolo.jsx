import React from "react";

import SoloHome from '../components/allprojects/SoloHome';
import SoloInfo from '../components/allprojects/SoloInfo';
import Footer from '../components/common/Footer';
import BlankSolo from '../components/allprojects/BlankSolo';
import SoloFeatures from '../components/allprojects/SoloFeatures';
import NextProject from '../components/allprojects/NextProject';
import Line from '../components/common/Line';
import Blank2 from '../components/allprojects/Blank2';
import TestimonialSection from '../components/allprojects/TestimonialSection';


const Projectsolo = () => {
  const project = {
    name: "PROJECT NAME",
    location: "LOCATION",
    image: "https://via.placeholder.com/1200x800?text=Project+Background"
  };

  return (
    <div className="relative bg-[#FBF0DA]">
      <SoloHome />
      <SoloInfo />
      <Line/>
      <BlankSolo />
      <Line/>
      <SoloFeatures />
      <Line/>
      <Blank2 />
      <TestimonialSection/>
       <NextProject />
      <Footer />
    </div>
  );
};

export default Projectsolo;
