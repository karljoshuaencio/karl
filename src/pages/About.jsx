import React, { useState } from "react";
import { motion } from "framer-motion";
import me from "../assets/me.png";
import reactskills from "../assets/skills/reactskills.png";
import ciskills from "../assets/skills/ciskills.png";
import laravelskills from "../assets/skills/laravelskills.png";
import phpskills from "../assets/skills/phpskills.png";
import jsskills from "../assets/skills/jsskills.png";
import cppskills from "../assets/skills/c++skills.png";
import htmlskills from "../assets/skills/htmlskills.png";
import kotlinskills from "../assets/skills/kotlinskills.png";
import swiftskills from "../assets/skills/swiftskills.png";
import mysqlskills from "../assets/skills/mysqlskills.png";
import navicatskills from "../assets/skills/naviskills.png";
import awsskills from "../assets/skills/awsskills.png";
import dockerskills from "../assets/skills/dockerskills.png";
import arduinoskills from "../assets/skills/arduinoskills.png";
import nextjsskills from "../assets/skills/nextjsskills.png";
import firebaseskills from "../assets/skills/firebaseskills.png";
// Fade logos
import reactfade from "../assets/fade/reactfade.png";
import cifade from "../assets/fade/cifade.png";
import laravelfade from "../assets/fade/laravelfade.png";
import phpfade from "../assets/fade/phpfade.png";
import jsfade from "../assets/fade/jsfade.png";
import cppfade from "../assets/fade/c++fade.png";
import htmlfade from "../assets/fade/htmlfade.png";
import kotlinfade from "../assets/fade/kotlinfade.png";
import swiftfade from "../assets/fade/swiftfade.png";
import mysqlfade from "../assets/fade/mysqlfade.png";
import navicatfade from "../assets/fade/navicatfade.png";
import awsfade from "../assets/fade/awsfade.png";
import dockerfade from "../assets/fade/dockerfade.png";
import arduinofade from "../assets/fade/arduinofade.png";
import nextjsfade from "../assets/fade/nextjsfade.png";
import firebasefade from "../assets/fade/firebasefade.png";

export default function About() {

  const [hoveredSkill, setHoveredSkill] = useState(null);
  const skillsData = [
    {
      title: "Frameworks",
      skills: [
        { src: reactskills, label: "React", fade: reactfade },
        { src: ciskills, label: "CI", fade: cifade },
        { src: laravelskills, label: "Laravel", fade: laravelfade },
        { src: nextjsskills, label: "Next.js", fade: nextjsfade },
      ],
    },
    {
      title: "Web",
      skills: [
        { src: phpskills, label: "PHP", fade: phpfade },
        { src: jsskills, label: "JavaScript", fade: jsfade },
        { src: cppskills, label: "C++", fade: cppfade },
        { src: htmlskills, label: "HTML", fade: htmlfade },
      ],
    },
    {
      title: "Mobile",
      skills: [
        { src: kotlinskills, label: "Kotlin", fade: kotlinfade },
        { src: swiftskills, label: "Swift", fade: swiftfade },
      ],
    },
    {
      title: "Database",
      skills: [
        { src: mysqlskills, label: "MySQL", fade: mysqlfade },
        { src: navicatskills, label: "Navicat", fade: navicatfade },
        { src: firebaseskills, label: "Firebase", fade: firebasefade },
      ],
    },
    {
      title: "Others",
      skills: [
        { src: awsskills, label: "AWS", fade: awsfade },
        { src: dockerskills, label: "Docker", fade: dockerfade },
        { src: arduinoskills, label: "Arduino", fade: arduinofade },
      ],
    },
  ];

  // Flatten the skills for easier access
  const allSkills = skillsData.flatMap(category => category.skills);
  const motionVariants = [
    { y: 20, x: 0 },  // from bottom
    { y: -20, x: 0 }, // from top
    { x: -20, y: 0 }, // from left
    { x: 20, y: 0 },  // from right
  ];
  
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-start px-6 sm:px-12 md:px-24 py-20 bg-[#121212] text-white gap-20"
    >
     
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center w-full">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={me}
            alt="Karl Joshua Encio"
            className="w-72 sm:w-96 md:w-full max-w-md rounded-2xl shadow-lg"
          />
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl font-bold mb-6 text-center md:text-left text-[#1db954]">
            About Me
          </h2>
          <div className="max-w-3xl text-gray-300 text-base sm:text-lg space-y-6 text-justify">
          <p>
          Hi, I'm Karl Joshua Y. Encio, a 4th-year Bachelor of Science in Information Technology specializing in Web and Mobile Application at <span className="text-[#1db954] font-medium">FEU - Institute of Technology</span>.
          </p>
            <p>
              I'm an aspiring <span className="text-[#1db954] font-medium">Cloud Engineer</span> who’s passionate about designing scalable, secure, and resilient cloud infrastructure. I enjoy automating deployments, optimizing system performance, and building solutions that support high availability and growth.
            </p>
            <p>
            Ever since Grade 2, I’ve been glued to my computer—playing games, browsing the web, scrolling through Facebook—and I haven’t stopped exploring tech since. Now, I channel that curiosity into building real-world tech solutions.
            </p>
          </div>
        </motion.div>
      </div>

   
    <motion.div
    id="work"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ staggerChildren: 0.3 }}
    className="w-full mt-10 border-t border-[#2a2a2a] pt-16"
  >
    <motion.h3
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="text-3xl font-bold mb-12 text-center text-[#1db954]"
    >
      Work Experience
    </motion.h3>

    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/*  Animated center vertical line */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 origin-top bg-[#1db954]"
      />

      <div className="space-y-20">
        {/*  Timeline Item - Right */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -100, scale: 0.9 },
            visible: { opacity: 1, x: 0, scale: 1 },
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col md:flex-row-reverse md:items-start relative"
        >
          {/* Dot (Mobile) */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'backOut' }}
            className="md:hidden mx-auto mb-4 w-4 h-4 bg-[#1db954] rounded-full border-4 border-[#121212]"
          />
          <div className="w-full md:w-1/2 md:pl-10 text-left">
            <p className="font-semibold text-[#1db954] text-lg">
              Software Engineer Intern
            </p>
            <p className="text-[#aaaaaa] mb-2">
              Infinity Eight Data Solutions — April 2025 - July 2025
            </p>
            <p className="text-gray-300 text-justify">
              Developed CMS websites for Elegho – a property management system – and the official company website for Infinity Eight Data Solutions Inc. Built responsive user interfaces using Next.js, implemented API integrations, and ensured compatibility across desktop, tablet, and mobile devices.
            </p>
          </div>
          {/* Dot (Desktop) */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'backOut' }}
            className="hidden md:block absolute left-[calc(50%-10px)] bg-[#1db954] w-6 h-6 rounded-full border-4 border-[#121212]"
          />
        </motion.div>

        {/*  Timeline Item - LEFT */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -100, scale: 0.9 },
            visible: { opacity: 1, x: 0, scale: 1 },
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-start relative"
        >
          {/* Dot (Mobile) */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'backOut' }}
            className="md:hidden mx-auto mb-4 w-4 h-4 bg-[#1db954] rounded-full border-4 border-[#121212]"
          />
          <div className="w-full md:w-1/2 md:pr-10 text-right">
            <p className="font-semibold text-[#1db954] text-lg">
              Systems Developer Intern
            </p>
            <p className="text-[#aaaaaa] mb-2">
              FEU Institute of Technology — Dec 2024 - Mar 2025
            </p>
            <p className="text-gray-300 text-justify">
              Developed internal systems used across multiple FEU campuses — including{" "}
              <span className="text-[#1db954] font-medium">FEU - Institute of Technology</span>,{" "}
              <span className="text-[#1db954] font-medium">FEU - Diliman</span>, and{" "}
              <span className="text-[#1db954] font-medium">FEU - Alabang</span>. Built responsive user
              interfaces using <span className="text-white font-medium">PHP</span>, ensuring cross-campus
              functionality, scalability, and performance.
            </p>
          </div>
          {/* Dot (Desktop) */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'backOut' }}
            className="hidden md:block absolute left-[calc(50%-10px)] bg-[#1db954] w-6 h-6 rounded-full border-4 border-[#121212]"
          />
        </motion.div>

        {/* 💼 Timeline Item - RIGHT */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 100, scale: 0.9 },
            visible: { opacity: 1, x: 0, scale: 1 },
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col md:flex-row-reverse md:items-start relative"
        >
          {/* Dot (Mobile) */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'backOut' }}
            className="md:hidden mx-auto mb-4 w-4 h-4 bg-[#1db954] rounded-full border-4 border-[#121212]"
          />
          <div className="w-full md:w-1/2 md:pl-10 text-left">
            <p className="font-semibold text-[#1db954] text-lg">
              Registration Marshall
            </p>
            <p className="text-[#aaaaaa] mb-2">
              GeengerGrp, Inc — October 2024
            </p>
            <p className="text-gray-300 text-justify">
              Handled the attendee registration process for Changan Auto at the 2024 Philippine International Motor Show (PIMS). Assisted clients with sign-ins, verified client details, and guided them through the registration flow. Ensured smooth check-in operations using a digital registration system.
            </p>
          </div>
          {/* Dot (Desktop) */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'backOut' }}
            className="hidden md:block absolute left-[calc(50%-10px)] bg-[#1db954] w-6 h-6 rounded-full border-4 border-[#121212]"
          />
        </motion.div>
      </div>
    </div>
  </motion.div>



        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full pt-20"
      >
        <h3 className="text-3xl font-bold mb-10 text-center text-[#1db954]">
          Tech Stack & Skills
        </h3>

        {/* 🔳 Single box container */}
        <div className="bg-[#111] rounded-xl border border-[#2a2a2a] p-6 shadow-sm w-full max-w-4xl mx-auto relative">
          
          {/* Area for the large faded logo (red circle area) */}
          <div className="absolute bottom-0 right-0 w-full md:w-2/4 h-1/2 md:h-1/3 flex items-end justify-end p-4 pointer-events-none">
          {allSkills.map((skill, index) => {
            const motionOffset = motionVariants[index % motionVariants.length];

            return (
              <motion.img
              key={index}
              src={skill.fade}
              alt={`${skill.label} Large`}
              initial={{
                opacity: 0,
                scale: 0.8,
                y: motionOffset.y,
                x: motionOffset.x,
                rotate: -10,
                filter: 'blur(1px)',
              }}
              animate={
                hoveredSkill === index
                  ? {
                      opacity: 1,
                      scale: [0.8, 1.1, 1],
                      x: 0,
                      y: 0,
                      rotate: [0, 5, 0],
                      filter: 'blur(0px)',
                    }
                  : {
                      opacity: 0,
                      scale: 0.8,
                      x: motionOffset.x,
                      y: motionOffset.y,
                      rotate: -10,
                      filter: 'blur(1px)',
                      boxShadow: '0 0 0px transparent',
                    }
              }
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="absolute w-[200px] md:w-full h-[200px] md:h-full object-contain"
            />
            );
          })}
        </div>


          {/* Skills categories */}
          {skillsData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-4">
            <h4 className="text-base font-semibold text-white mb-2">{category.title}</h4>
            <div className="flex flex-wrap gap-14">
              {category.skills.map((skill, skillIndex) => {
                // Global index for total skill count
                const globalIndex = skillsData
                  .slice(0, categoryIndex)
                  .reduce((acc, cat) => acc + cat.skills.length, 0) + skillIndex;

                return (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, y: -300, rotate: -15, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                    transition={{
                      delay: globalIndex * 0.1, // one-by-one fall delay
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1], // 'easeOutBack' style
                    }}
                    viewport={{ once: true }}
                    className="relative w-20 h-20 bg-[#1a1a1a] rounded-xl border border-[#1db954]
                      flex items-center justify-center transition-all duration-300 ease-in-out
                      hover:scale-110 hover:shadow-[0_0_15px_#1db954] hover:border-[#1db954] hover:rotate-[2deg]"
                    onMouseEnter={() => setHoveredSkill(globalIndex)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <img
                      src={skill.src}
                      alt={skill.label}
                      className="w-9 h-9 object-contain z-10"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
        </div>
      </motion.div>











    </section>
  );
}
