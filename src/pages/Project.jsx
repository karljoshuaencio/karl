import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// DMMA
import dmma1 from "../assets/Projects/DMMA/dmma1.png";
import dmma2 from "../assets/Projects/DMMA/dmma2.png";
import dmma3 from "../assets/Projects/DMMA/dmma3.png";
import dmma4 from "../assets/Projects/DMMA/dmma4.png";
import dmma5 from "../assets/Projects/DMMA/dmma5.png";
import dmma6 from "../assets/Projects/DMMA/dmma6.png";
import dmma7 from "../assets/Projects/DMMA/dmma7.png";

// Overtime
import overtime1 from "../assets/Projects/Overtime/overtime1.png";
import overtime2 from "../assets/Projects/Overtime/overtime2.png";
import overtime3 from "../assets/Projects/Overtime/overtime3.png";
import overtime4 from "../assets/Projects/Overtime/overtime4.png";
import overtime5 from "../assets/Projects/Overtime/overtime5.png";
import overtime6 from "../assets/Projects/Overtime/overtime6.png";
import overtime7 from "../assets/Projects/Overtime/overtime7.png";

// Offset
import offset1 from "../assets/Projects/Offset/offset1.png";
import offset2 from "../assets/Projects/Offset/offset2.png";
import offset3 from "../assets/Projects/Offset/offset3.png";
import offset4 from "../assets/Projects/Offset/offset4.png";

// Photobooth
import photobooth1 from "../assets/Projects/Photobooth/photobooth1.png";
import photobooth2 from "../assets/Projects/Photobooth/photobooth2.png";
import photobooth3 from "../assets/Projects/Photobooth/photobooth3.png";
import photobooth4 from "../assets/Projects/Photobooth/photobooth4.png";

// RFID
import rfid from "../assets/rfid.png";

// Spontify
import spontify from "../assets/spontify.png";

// Capstone Advisor
import capstone1 from "../assets/Projects/CapstoneAdvisor/capstone1.png";
import capstone2 from "../assets/Projects/CapstoneAdvisor/capstone2.png";

const projects = [
  {
    name: "Intern Project - Document Masterlist and Monitoring Application (DMMA)",
    description: "Developed a DMMA System for the departments of FEU - Institute of Technology, FEU - Alabang, and FEU - Diliman.",
    details: `• Develop a setup for the DMMA to cater to each department's records.
    • Develop and design a website application that allows each department to manage its records, including adding, updating, and deleting its records.
    • Implement a unique Control ID based on the records departments.
    • Implement SQL triggers for data integrity and security measures in the database.
    • Develop a Report Generation Function of Quality Records Masterlist capable of exporting data into FEU Templated Excel format.`,
    images: [dmma1, dmma2, dmma3, dmma4, dmma5, dmma6, dmma7],
  },
  {
    name: "Intern Project - HRIS and Associates Overtime System",
    description: "Developed a Overtime System for the associates portal of FEU - Institute of Technology, FEU - Alabang, and FEU - Diliman.",
    details: `• Develop and design of Overtime Application of the associates portal.
    • Implement filing of Overtime based on approved work schedules, cutoff periods, and daily work schedule times of each associate.
    • Integrated automatic detection of various Overtime Types.
    • Implement Graveyard Overtime for graveyard shifts.
    • Implement Early-In.
    • Develop an application for submitting Pre-Approval Overtime, Actual Overtime.
    • Develop the approver interface for department heads to review and act on overtime requests.
    • Develop the HRIS Admin side of the overtime to manage its records including, filing direct approval of overtime of associates, filing direct approval of offset of associates, cancelling the pending application, and voiding the approved overtime.
    • Create reports of the Pre-Approval Overtime Records, Actual Approval Records, Total hours rendered of each associate.
    • Implement SQL triggers for data integrity and security measures in the database.
    • Develop a Report Generation Function capable of exporting data into Excel format.`,
    images: [overtime1, overtime2, overtime3, overtime4, overtime5, overtime6, overtime7],
  },
  {
    name: "Intern Project - HRIS and Associates Offset System",
    description: "Developed a Offset System for the associates portal of FEU - Institute of Technology, FEU - Alabang, and FEU - Diliman.",
    'details': ` • Develop and design of Offset Application of the associates portal.
    • Implement filing of Offset based on approved work schedules, cutoff periods, and daily work schedule times of each associate.
    • Implement Graveyard Offset for graveyard shifts.
    • Implement Early-In.
    • Develop an application for submitting Pre-Approval Offset, and Actual Offset Application.
    • Develop the approver interface for department heads to review and act on offset requests.
    • Develop the HRIS Admin side of the offset to manage its records including, filing direct approval of overtime of associates, filing direct approval of offset of associates, cancelling the pending application, and voiding the approved  offset.
    • Create reports of the Pre-Approval Offset Records, Actual Approval Records, and Dates of Offset of the associate.
    • Implement SQL triggers for data integrity and security measures in the database.
    • Develop a Report Generation Function of capable of exporting data into Excel format.`,
        images: [offset1, offset2, offset3, offset4],
      },
  {
    name: "Putobooth",
    description: "React.js-based Photobooth Application that allows users to capture and generate a personalized photostrip in real-time. The app provides an interactive and user-friendly interface where users can take 3 photos, customize the photostrip layout, apply filters, and add their name.",
    details: `• Developed using React.js, Vite, Tailwind CSS, and Framer Motion for smooth animations and an interactive UI.
    • Users can capture 3 sequential photos with a 3-second timer for each shot.
    • Users can add their name and download the final photostrip,
    • Supports applying various filters
    • Provides real-time customization, including photostrip layout adjustments and color themes.`,
    images: [photobooth1, photobooth2, photobooth3, photobooth4],
  },
  {
    name: "RFID with SMS Notification using WeMos D1 and Arduino Uno",
    description: "An RFID-based system integrated with SMS notifications, designed to enhance monitoring, tracking, and communication in real-time. Using RFID (Radio Frequency Identification) technology, the system allows for efficient identification and logging of individuals or items through RFID tags. Once a tag is scanned, the system automatically logs the event and triggers an SMS alert to be sent to a predefined mobile number.",
    details: `• Built using RFID technology for real-time tracking and automated logging.
    • Integrated with an SMS gateway to send instant notifications upon RFID tag scans.  
    • Supports identification and monitoring of individuals or assets through unique RFID tags.
    • Designed for seamless data storage and retrieval to ensure accurate records. 
    • Enhances security and communication efficiency with automated alerts and logs.`,
    images: [rfid],
  },
  {
    name: "Spontify",
    description: "Swift-based iOS application dedicated to Taylor Swift's music, allowing users to explore her discography and view the lyrics to their favorite songs. The app provides a clean and intuitive interface where users can browse albums, search for specific tracks, and instantly access song lyrics.",
    details: `• Developed using Swift and SwiftUI for a seamless and responsive iOS experience.
    • Allows users to explore Taylor Swift’s discography with album and lyrics.
    • Optimized for smooth navigation and enhanced user engagement.`,
    images: [spontify],
  },
  {
    name: "Capstone Advisor",
    description: "PHP-based Capstone Adviser Request System developed using PHP, designed to help students efficiently request advisers based on expertise in programming languages and degree program alignment.",
    details: `• Allows students to request advisers based on programming language proficiency and expertise. 
    • Supports adviser change requests for flexibility in mentorship.  
    • Enables students to request advisers based on their department for better alignment.
    • Provides document attachment functionality for capstone project review and evaluation.`,
    images: [capstone1, capstone2],
  },
];

const Project = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDetails, setSelectedDetails] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const toggleDetails = (index) => {
    setSelectedDetails(selectedDetails === index ? null : index);
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.75,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeOut",
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.75,
      transition: {
        ease: "easeIn",
        duration: 0.2,
      },
    },
  };

  return (
    <div id="project" className="w-full min-h-screen bg-[#121212] snap-y snap-mandatory overflow-y-auto scroll-smooth relative">
        <div className="pt-32">  {/* Add this wrapper div with padding-top */}
            <h3 className="text-3xl font-bold mb-10 text-center text-[#1db954]">
              Projects
            </h3>
        </div>
      {projects.map((project, index) => (
        <section
          key={index}
          className="flex flex-col md:flex-row items-center justify-center min-h-screen snap-start p-6 md:p-12 lg:p-16"
        >
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-3/5 flex justify-center md:justify-end pr-0 md:pr-8" 
          >
            {project.images.length > 1 ? (
              <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                showStatus={false}
                className="w-full md:w-[100%] rounded-lg shadow-lg cursor-pointer"
                onClickItem={(index) => openModal(project.images[index])}
              >
                {project.images.map((img, idx) => (
                  <img 
                    key={idx} 
                    src={img} 
                    alt={project.name} 
                    className="rounded-lg object-cover max-h-[700px]"
                  />
                ))}
              </Carousel>
            ) : (
              <img
                src={project.images[0]}
                alt={project.name}
                className="w-full md:w-[100%] rounded-lg shadow-lg object-cover max-h-[700px] cursor-pointer"
                onClick={() => openModal(project.images[0])}
              />
            )}
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full md:w-2/5 text-center md:text-left px-6 relative" 
          >
            <AnimatePresence mode="wait">
              {selectedDetails !== index ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key="description"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1db954] mb-4">{project.name}</h2>
                  <p className="text-white text-base md:text-lg mb-4">{project.description}</p>
                  <motion.button
                    onClick={() => toggleDetails(index)}
                    className="bg-[#1db954] text-white px-4 py-2 rounded-lg hover:bg-[#18a449] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  key="details"
                  className="bg-[#1e1e1e] rounded-lg p-4"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-between items-center mb-4"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1db954]">{project.name}</h2>
                    <motion.button
                      onClick={() => toggleDetails(index)}
                      className="text-white bg-[#1db954] p-2 rounded-full hover:bg-[#18a449]"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      ×
                    </motion.button>
                  </motion.div>
                  <div className="text-white text-sm space-y-1">
                    {project.details.split('\n').map((detail, idx) => (
                      <motion.p
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="leading-relaxed"
                      >
                        {detail.trim()}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>
      ))}

      {/* Animated Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div 
              className="relative max-w-[90vw] max-h-[90vh]"
              variants={modalVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="absolute top-4 right-4 text-white text-xl bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center"
                onClick={closeModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>
              <motion.img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                layoutId={selectedImage}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project;
