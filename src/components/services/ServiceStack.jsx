import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import designConsultation from "../../assets/Rectangle 107.png";
import customSolutions from "../../assets/Rectangle 108.png";
import projectManagement from "../../assets/Rectangle 109.png";
import sustainabilityConsulting from "../../assets/Rectangle 110.png";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    number: "(1)",
    title: "LAYOUT PLANNING",
    about: "ABOUT",
    description:
      "Our layout planning process blends design intelligence with environmental sensitivity. We craft well-structured, sustainable layouts that enhance functionality while preserving the natural character of the land. Every project is meticulously planned to optimize space, connectivity, and long-term livability.",
    whatIncluded: "WHAT’S INCLUDED",
    features: [
      "Site analysis and terrain evaluation",
      "Conceptual zoning and master layout design",
      "Optimization of plots, roads, and open spaces",
      "Integration of sustainability and natural features",
    ],
    image: designConsultation,
  },
  {
    id: 2,
    number: "(2)",
    title: "REGISTRATION ASSISTANCE",
    about: "ABOUT",
    description:
      "We simplify the complex legalities of property ownership with seamless registration support. Our experts handle the documentation, verification, and compliance process end-to-end, ensuring every transaction is transparent, secure, and stress-free for our clients.",
    whatIncluded: "WHAT’S INCLUDED",
    features: [
      "Guidance through legal documentation and procedures",
      "Verification of property titles and ownership records",
      "Coordination with government registration offices",
      "Transparent handling of fees and compliance requirements",
    ],
    image: customSolutions,
  },
  {
    id: 3,
    number: "(3)",
    title: "PROPERTY CONSULTATION",
    about: "ABOUT",
    description:
      "With deep market insight and local expertise, we help you make informed investment decisions. Whether you’re buying your first plot or expanding your portfolio, our consultants provide tailored advice that aligns with your goals, budget, and vision for the future.",
    whatIncluded: "WHAT’S INCLUDED",
    features: [
      "One-on-one expert consultations and advisory sessions",
      "Market and investment potential assessments",
      "Assistance in selecting ideal plots or projects",
      "Personalized solutions aligned with client goals",
    ],
    image: projectManagement,
  },
  {
    id: 4,
    number: "(4)",
    title: "INFRASTRUCTURE DEVELOPMENT",
    about: "ABOUT",
    description:
      "We go beyond construction to create infrastructure that enhances community life and long-term value. Our developments are thoughtfully designed with robust planning, sustainable practices, and enduring materials that ensure quality, safety, and harmony with nature.",
    whatIncluded: "WHAT’S INCLUDED",
    features: [
      "Planning and execution of core site infrastructure",
      "Roads, drainage, and utility network development",
      "Implementation of eco-conscious design principles",
      "Quality checks and long-term maintenance planning",
    ],
    image: sustainabilityConsulting,
  },
  {
    id: 5,
    number: "(5)",
    title: "LOAN ASSISTANCE",
    about: "ABOUT",
    description:
      "We make property financing simple and accessible through trusted partnerships with leading financial institutions. Our team provides step-by-step guidance—from evaluating eligibility to final disbursement—helping you secure the best loan options without the hassle.",
    whatIncluded: "WHAT’S INCLUDED",
    features: [
      "Evaluation of financing options and eligibility",
      "Coordination with trusted banking partners",
      "Support with documentation and approvals",
      "Step-by-step guidance until loan disbursement",
    ],
    image: designConsultation,
  },
  {
    id: 6,
    number: "(6)",
    title: "AFTER-SALES SUPPORT",
    about: "ABOUT",
    description:
      "Our relationship with clients continues well beyond the purchase. From timely updates to dedicated service assistance, we ensure every buyer feels supported, informed, and valued throughout their ownership journey—building trust that lasts for years.",
    whatIncluded: "WHAT’S INCLUDED",
    features: [
      "Dedicated post-purchase client assistance",
      "Regular updates and communication after handover",
      "Resolution of queries or service requests",
      "Continued engagement to ensure long-term satisfaction",
    ],
    image: customSolutions,
  },
];

const ServiceCard = ({ service, bgColor, textColor }) => {
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const numberRef = useRef(null);
  const descriptionRef = useRef(null);
  const featuresRef = useRef(null);
  const imageRef = useRef(null);
  const lineRef = useRef(null);
  const aboutRef = useRef(null);
  const whatIncludedRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        },
        defaults: { ease: "power2.out", duration: 1 },
      });

      tl.fromTo(titleRef.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(
          lineRef.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 0.3, duration: 1.2 },
          "-=0.6"
        )
        .fromTo(
          numberRef.current,
          { y: 100, opacity: 0, scale: 0.8 },
          { y: 0, opacity: 0.9, scale: 1, duration: 1.2 },
          "-=0.8"
        )
        .fromTo(
          aboutRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 0.7 },
          "-=0.6"
        )
        .fromTo(
          descriptionRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1 },
          "-=0.4"
        )
        .fromTo(
          whatIncludedRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 0.8 },
          "-=0.6"
        );

      if (featuresRef.current) {
        const featureItems = featuresRef.current.querySelectorAll("li");
        tl.fromTo(
          featureItems,
          { x: -25, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        );
      }

      if (imageRef.current) {
        tl.fromTo(
          imageRef.current,
          { scale: 1.1, opacity: 0.9 },
          { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" },
          "-=1"
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="sticky top-0 min-h-screen flex items-center justify-center snap-start snap-always"
    >
      <div
        className="relative w-full h-full overflow-hidden"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <div className="max-w-[1600px] mx-auto h-full px-6 lg:px-12 py-12 lg:py-16">
          {/* Title */}
          <div className="mb-8 lg:mb-12">
            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-wide mb-4"
            >
              {service.title}
            </h1>
            <div
              ref={lineRef}
              className="w-full h-px origin-left"
              style={{ backgroundColor: textColor }}
            ></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 h-[calc(100%-120px)]">
            {/* Left Section */}
            <div className="flex flex-col justify-between">
              {" "}
              {/* Large Number */}{" "}
              <div className="overflow-hidden">
                {" "}
                <div
                  ref={numberRef}
                  className="text-[120px] sm:text-[150px] lg:text-[180px] xl:text-[200px] font-light leading-none opacity-80"
                >
                  {" "}
                  {service.number}{" "}
                </div>{" "}
              </div>{" "}
              {/* About Section */}{" "}
              <div className="space-y-4">
                {" "}
                <h3
                  ref={aboutRef}
                  className="text-sm lg:text-base font-light tracking-[0.3em] opacity-70"
                >
                  {" "}
                  {service.about}{" "}
                </h3>{" "}
              </div>{" "}
            </div>

            {/* Middle Section */}
            <div className="flex flex-col justify-between space-y-6 lg:space-y-8">
              <p
                ref={descriptionRef}
                className="text-sm lg:text-base leading-relaxed opacity-90"
              >
                {service.description}
              </p>
              <div className="space-y-4">
                <h3
                  ref={whatIncludedRef}
                  className="text-sm lg:text-base font-medium tracking-wider opacity-70"
                >
                  {service.whatIncluded}
                </h3>
                <ul ref={featuresRef} className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm lg:text-base pl-4 opacity-90"
                      style={{ borderLeft: `2px solid ${textColor}30` }}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Section */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full h-[400px] xl:h-[500px] overflow-hidden relative ">
                <motion.div
                  initial={{ scaleX: 1, opacity: 1 }}
                  whileInView={{ scaleX: 0, opacity: 1 }}
                  transition={{ duration: 1.4, delay: 0.3, ease: "circOut" }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "right", backgroundColor: bgColor }}
                  className="w-full origin-right absolute z-10 h-full"
                ></motion.div>
                <img
                  ref={imageRef}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mt-6">
            <div className="w-full h-[300px] overflow-hidden relative ">
              <motion.div
                initial={{ scaleX: 1, opacity: 1 }}
                whileInView={{ scaleX: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: "circOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "right", backgroundColor: bgColor }}
                className="w-full origin-right absolute z-10 h-full"
              ></motion.div>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const colors = [
  { bgColor: "#0A1F2E", textColor: "#FBF0DA" },
  { bgColor: "#FBF0DA", textColor: "#000000" },
];

function ServiceStack() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative">
      <div className={`relative ${isMobile ? "" : "min-h-screen"}`}>
        {services.map((service) => {
          const index = (service.id - 1) % 2;
          const color = colors[index];
          return (
            <ServiceCard
              key={service.id}
              service={service}
              bgColor={color.bgColor}
              textColor={color.textColor}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ServiceStack;
