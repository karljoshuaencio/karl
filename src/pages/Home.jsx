import React from "react";
import heroImage from "../assets/hero.png";
import resume from "../assets/resume/KarlJoshuaEncioResume.pdf";
import { FaBriefcase } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-[#121212] text-white">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col md:flex-row items-center md:px-15">
      {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 h-full pl-0 md:pl-16 lg:pl-32">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
            Hi, I'm <span className="text-[#1db954]">Karl Joshua Encio</span> 👑
          </h1>
          <p className="text-lg md:text-xl text-[#ffffff] max-w-md">
            Aspiring Cloud Engineer
          </p>
          <a
            href="#project"
            className="bg-[#1db954] hover:bg-[#1db954]/80 text-white px-6 py-3 rounded-full shadow-md transition"
          >
            View Projects
          </a>

          <div className="mt-11">
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <a
                href="https://edith.feutech.edu.ph/briefcase/profile/KarlJoshuaEncio"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1db954] hover:bg-[#1db954]/80 text-white px-6 py-3 rounded-full shadow-md transition flex items-center gap-2"
              >
                <FaBriefcase /> Briefcase
              </a>
              <a
                href="https://www.linkedin.com/in/karl-joshua-encio-8739a7300/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0077b5] hover:bg-[#0077b5]/80 text-white px-6 py-3 rounded-full shadow-md transition flex items-center gap-2"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href={resume}
                download
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full shadow-md transition flex items-center gap-2"
              >
                <FaFileAlt /> Resume
              </a>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center h-full mt-10 md:mt-0">
          <img
            src={heroImage}
            alt="Hero"
            className="max-h-[300px] sm:max-h-[400px] lg:max-h-[550px] w-auto object-contain"
          />
        </div>
      </section>


    </div>
  );
}
