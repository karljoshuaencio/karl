import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Cloud Computing Certifications
import cloudCertificate from "../assets/Certifications/cloudcertificate.png";
import cloudCredly from "../assets/Certifications/cloudcomputingcredly.png";
import cloudScore from "../assets/Certifications/cloudcomputingscore.png";

// Networking Certifications
import networkingCertificate from "../assets/Certifications/networkingcertificate.png";
import networkingCredly from "../assets/Certifications/networkingcredly.png";
import networkingScore from "../assets/Certifications/networkingscore.png";

// Add these imports at the top with other imports
import ccnaenterprise from "../assets/badges/ccnaenterprise.png";
import ccnaintroduction from "../assets/badges/ccnaintroduction.png";
import ccnaswitching from "../assets/badges/ccnaswitching.png";
import devnet from "../assets/badges/devnet.png";
import python from "../assets/badges/python.png";
import python2 from "../assets/badges/python2.png";
import cloudcomputing101 from "../assets/badges/cloudcomputing101.png";
import gettingstartedwithcompute from "../assets/badges/gettingstartedwithcompute.png";

const certifications = [
  {
    title: "IT Specialist - Cloud Computing",
    description: "Earners for this exam will be able to identify and describe end solutions that leverage cloud technologies, considerations that span across solutions and the art of the possible in utilizing cloud to develop solutions.",
    images: [cloudCertificate, cloudCredly, cloudScore],
  },
  {
    title: "IT Specialist - Networking",
    description: "Earners of this badge demonstrate foundational networking knowledge and skills, including TCP/IP, networking services, networking topologies, and troubleshooting in wired and wireless environments.",
    images: [networkingCertificate, networkingCredly, networkingScore],
  },
];

const Certification = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="certifications" className="w-full min-h-screen bg-[#121212] snap-y snap-mandatory overflow-y-auto scroll-smooth px-4 sm:px-6 md:px-8">
      <motion.h3 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariants}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-center text-[#1db954] pt-6 sm:pt-10"
      >
        Certifications
      </motion.h3>

      {certifications.map((cert, index) => {
        const sectionRef = useRef(null);
        const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

        return (
          <section 
            ref={sectionRef}
            key={index} 
            className="flex flex-col md:flex-row items-center justify-center min-h-screen snap-start p-4 sm:p-6 md:p-8 lg:p-12 gap-6 md:gap-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-2/5 text-center md:text-left px-2 sm:px-4 md:px-6"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1db954] mb-3 sm:mb-4">{cert.title}</h2>
              <p className="text-white text-sm sm:text-base md:text-lg mb-4">{cert.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full md:w-3/5 flex justify-center md:justify-start"
            >
              <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                showStatus={false}
                className="w-full max-w-[90vw] md:max-w-[600px] lg:max-w-[800px] rounded-lg shadow-lg"
              >
                {cert.images.map((img, idx) => (
                  <div key={idx} className="relative pb-[75%] h-0">
                    <img 
                      src={img} 
                      alt={cert.title} 
                      className={`absolute top-0 left-0 w-full h-full rounded-lg ${
                        img.includes('credly') || img.includes('score')
                          ? 'object-contain bg-white p-2'
                          : 'object-contain'
                      }`}
                    />
                  </div>
                ))}
              </Carousel>
            </motion.div>
          </section>
        );
      })}

      <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-center text-[#1db954]"
        >
          Badges
        </motion.h3>
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          >
            {[
              { img: ccnaenterprise, title: "CCCNA: Enterprise Networking, Security, and Automation" },
              { img: ccnaintroduction, title: "CCNA: Introduction to Networks" },
              { img: ccnaswitching, title: "CCNA: Switching, Routing, and Wireless Essentials" },
              { img: devnet, title: "DevNet Associate" },
              { img: python, title: "Python Essentials 1" },
              { img: python2, title: "Python Essentials 2" },
              { img: cloudcomputing101, title: "AWS Educate Introduction to Cloud 101" },
              { img: gettingstartedwithcompute, title: "AWS Educate Getting Started with Compute" },
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#1e1e1e] p-3 sm:p-4 rounded-lg text-center"
              >
                <img
                  src={badge.img}
                  alt={badge.title}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-3 sm:mb-4"
                />
                <h4 className="text-[#1db954] text-sm sm:text-base font-semibold px-2">{badge.title}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Certification;
