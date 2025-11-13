import { useState, useEffect } from "react";
import img1 from "../../assets/center1.png";
import img2 from "../../assets/lefttop.png";
import img4 from "../../assets/righttop.png";
import img3 from "../../assets/leftbottom.png";
import img5 from "../../assets/rightbottom.png";
import img6 from "../../assets/centerbottom.png";
import LetterParallax from "./LetterParallax";

const ParallaxGallery = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <section
      className="relative h-[80vh] mt-20 flex justify-center"
    >
      {isMobile ? (
        <div className="grid grid-cols-2 gap-4 p-4">
          <img
            src={img1}
            alt="Main landscape image"
            className="w-full aspect-square object-cover"
          />
          <img
            src={img2}
            alt="Top left overlay image"
            className="w-full aspect-square object-cover"
          />
          <img
            src={img3}
            alt="Top right overlay image"
            className="w-full aspect-square object-cover"
          />
          <img
            src={img4}
            alt="Bottom left overlay image"
            className="w-full aspect-square object-cover"
          />
          <img
            src={img5}
            alt="Bottom right overlay image"
            className="w-full aspect-square object-cover"
          />
          <img
            src={img6}
            alt="Center bottom overlay image"
            className="w-full aspect-square object-cover"
          />
        </div>
      ) : (
        <>
          <div className="relative w-[550px] h-[600px] md:w-[450px] md:h-[500px]">
            <img
              src={img1}
              alt="Main landscape image"
              className="w-full z-10 h-full object-cover"
            />
          </div>

          <img
            data-scroll
            data-scroll-speed="0.1"
            src={img2}
            alt="Top left overlay image"
            className="absolute z-5 top-[20%] left-[5%] w-[250px] h-[170px] md:top-[100%] md:w-[200px] md:h-[140px]"
          />

          <img
            data-scroll
            data-scroll-speed="0.1"
            src={img3}
            alt="Top right overlay image"
            className="absolute z-5 top-[20%] right-[5%] w-[250px] h-[170px] md:top-[100%] md:w-[180px] md:h-[120px]"
          />

          <img
            data-scroll
            data-scroll-speed="0.1"
            src={img4}
            alt="Bottom left overlay image"
            className="absolute z-5 bottom-[20%] left-[5%] w-[250px] h-[170px] md:-bottom-[75%] md:w-[210px] md:h-[110px]"
          />

          <img
            data-scroll
            data-scroll-speed="0.1"
            src={img5}
            alt="Bottom right overlay image"
            className="absolute z-5 bottom-[20%] right-[5%] w-[250px] h-[170px] md:-bottom-[75%] md:w-[210px] md:h-[110px]"
          />

          <img
            data-scroll
            data-scroll-speed="0.1"
            src={img6}
            alt="Center bottom overlay image"
            className="absolute z-5 bottom-[10%] left-[45%] w-[250px] h-[170px] md:-bottom-[100%] md:w-[150px] md:h-[100px]"
          />
        </>
      )}
    </section>
  );
};

export default ParallaxGallery;
