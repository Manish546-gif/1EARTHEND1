import React, { useState } from 'react';
import { motion } from 'framer-motion';

const OurProcess2 = () => {
  const [activeStep, setActiveStep] = useState(4);
  const [expandedInfo, setExpandedInfo] = useState(null);

  const processSteps = [
    {
      id: 1,
      title: "SITE SELECTION & ACQUISITION",
      whatWeDo: "We carefully identify and acquire prime land plots, ensuring strategic locations with high growth potential.",
      keyActivities: [
        "Market research & location analysis",
        "Land feasibility & due diligence studies",
        "Strategic acquisition of high-potential sites"
      ]
    },
    {
      id: 2,
      title: "PLANNING & LAYOUT DESIGN",
      whatWeDo: "Our expert team creates comprehensive master plans and detailed layout designs that maximize land utilization while ensuring aesthetic appeal.",
      keyActivities: [
        "Architectural planning & design",
        "Infrastructure layout optimization",
        "Environmental impact assessment"
      ]
    },
    {
      id: 3,
      title: "APPROVALS & COMPLIANCE",
      whatWeDo: "We handle all regulatory approvals and ensure complete legal compliance with local authorities and government regulations.",
      keyActivities: [
        "Government approval processes",
        "Legal documentation & clearances",
        "Regulatory compliance management"
      ]
    },
    {
      id: 4,
      title: "INFRASTRUCTURE DEVELOPMENT",
      whatWeDo: "Complete infrastructure setup including roads, utilities, drainage systems, and essential amenities for modern living.",
      keyActivities: [
        "Road construction & connectivity",
        "Utility installation & management",
        "Amenity development & landscaping"
      ]
    },
    {
      id: 5,
      title: "PLOT DELIVERY & HANDOVER",
      whatWeDo: "Final plot preparation, documentation completion, and smooth handover process to ensure customer satisfaction.",
      keyActivities: [
        "Plot demarcation & boundary marking",
        "Final documentation & registration",
        "Customer handover & orientation"
      ]
    },
    {
      id: 6,
      title: "POST-DELIVERY SUPPORT",
      whatWeDo: "Continued support and assistance even after project completion, ensuring long-term customer satisfaction and community development.",
      keyActivities: [
        "Ongoing customer support services",
        "Community management & maintenance",
        "Property value enhancement initiatives"
      ]
    }
  ];

  const handleMoreInfoClick = (stepId) => {
    setExpandedInfo(expandedInfo === stepId ? null : stepId);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const textVariants = {
    hidden: { 
      y: 60,
      opacity: 0 
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const stepVariants = {
    hidden: { 
      y: 40,
      opacity: 0 
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const expandVariants = {
    hidden: { 
      height: 0,
      opacity: 0 
    },
    visible: { 
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="bg-[#FBF0DA] py-16 px-6 sm:px-10 md:px-16 lg:px-20">
      <div className="max-w-7xl mb-12 mx-auto">
        
        <motion.div 
          className="mb-10 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="overflow-hidden">
            <motion.span 
              className="block text-5xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-2"
              variants={textVariants}
            >
              OUR
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span 
              className="block text-5xl sm:text-5xl md:text-6xl font-light text-gray-900"
              variants={textVariants}
            >
              PROCESS
            </motion.span>
          </div>
        </motion.div>
        
        <motion.div 
          className="space-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {processSteps.map((step, index) => (
            <motion.div 
              key={step.id} 
              className="group"
              variants={stepVariants}
            >
              <motion.div
                className="flex items-center relative justify-between py-8 cursor-pointer overflow-hidden"
                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                whileHover="hover"
                initial="initial"
                variants={{
                  initial: {},
                  hover: {}
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-[#D2C6B0] "
                  variants={{
                    initial: { y: "100%" },
                    hover: { y: 0 }
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                ></motion.div>
                
                <div className="flex items-center gap-8 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="overflow-hidden">
                      <motion.span 
                        className="block text-sm font-light text-gray-600 min-w-[20px]"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        ({step.id})
                      </motion.span>
                    </div>
                  </div>
                  
                  <div className="overflow-hidden">
                    <motion.span 
                      className="block text-lg sm:text-xl md:text-2xl font-light text-gray-900 tracking-wide"
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.1 + 0.1,
                        duration: 0.6,
                        ease: "easeOut"
                      }}
                    >
                      {step.title}
                    </motion.span>
                  </div>
                </div>

                <div className="overflow-hidden relative z-10">
                  <motion.button
                    className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors duration-200 tracking-wider"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMoreInfoClick(step.id);
                    }}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {expandedInfo === step.id ? 'CLOSE' : 'MORE INFO'}
                  </motion.button>
                </div>
              </motion.div>
              
            
              {index < processSteps.length  && (
                <motion.div 
                  className="h-px bg-gray-700 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                />
              )}

              
              <motion.div 
                className="overflow-hidden"
                initial={false}
                animate={expandedInfo === step.id ? 'visible' : 'hidden'}
                variants={expandVariants}
              >
                <motion.div 
                  className="bg-[#D2C6B0] p-8 mb-8 "
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ 
                    opacity: expandedInfo === step.id ? 1 : 0,
                    y: expandedInfo === step.id ? 0 : -20
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: expandedInfo === step.id ? 1 : 0,
                        x: expandedInfo === step.id ? 0 : -20
                      }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      <div className="overflow-hidden">
                        <motion.h4 
                          className="text-sm font-medium text-gray-700 mb-4 tracking-wider"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ 
                            y: expandedInfo === step.id ? 0 : 20,
                            opacity: expandedInfo === step.id ? 1 : 0
                          }}
                          transition={{ delay: 0.3, duration: 0.4 }}
                        >
                          WHAT WE DO
                        </motion.h4>
                      </div>
                      <div className="overflow-hidden">
                        <motion.p 
                          className="text-gray-800 leading-relaxed text-sm sm:text-base"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ 
                            y: expandedInfo === step.id ? 0 : 20,
                            opacity: expandedInfo === step.id ? 1 : 0
                          }}
                          transition={{ delay: 0.4, duration: 0.4 }}
                        >
                          {step.whatWeDo}
                        </motion.p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ 
                        opacity: expandedInfo === step.id ? 1 : 0,
                        x: expandedInfo === step.id ? 0 : 20
                      }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      <div className="overflow-hidden">
                        <motion.h4 
                          className="text-sm font-medium text-gray-700 mb-4 tracking-wider"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ 
                            y: expandedInfo === step.id ? 0 : 20,
                            opacity: expandedInfo === step.id ? 1 : 0
                          }}
                          transition={{ delay: 0.3, duration: 0.4 }}
                        >
                          KEY ACTIVITIES
                        </motion.h4>
                      </div>
                      <ul className="space-y-4">
                        {step.keyActivities.map((activity, actIndex) => (
                          <li key={actIndex} className="text-sm sm:text-base text-gray-800">
                            <div className="flex items-start gap-3 mb-2">
                              <div className="overflow-hidden">
                                <motion.span 
                                  className="text-yellow-600 mt-1 block"
                                  initial={{ y: 15, opacity: 0 }}
                                  animate={{ 
                                    y: expandedInfo === step.id ? 0 : 15,
                                    opacity: expandedInfo === step.id ? 1 : 0
                                  }}
                                  transition={{ 
                                    delay: 0.5 + (actIndex * 0.1), 
                                    duration: 0.4 
                                  }}
                                >
                                  •
                                </motion.span>
                              </div>
                              <div className="overflow-hidden flex-1">
                                <motion.span
                                  className="block"
                                  initial={{ y: 15, opacity: 0 }}
                                  animate={{ 
                                    y: expandedInfo === step.id ? 0 : 15,
                                    opacity: expandedInfo === step.id ? 1 : 0
                                  }}
                                  transition={{ 
                                    delay: 0.5 + (actIndex * 0.1), 
                                    duration: 0.4 
                                  }}
                                >
                                  {activity}
                                </motion.span>
                              </div>
                            </div>
                           
                            <motion.div 
                              className="h-px bg-gray-600 origin-left ml-6 mt-2"
                              initial={{ scaleX: 0 }}
                              animate={{ 
                                scaleX: expandedInfo === step.id ? 1 : 0 
                              }}
                              transition={{ 
                                delay: 0.6 + (actIndex * 0.1), 
                                duration: 0.5 
                              }}
                            />
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
              
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurProcess2;
