import React from 'react';
import { FaLinkedin, FaBriefcase } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-white py-4">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Navigation Links */}
          <div>
            <h3 className="text-xl text-[#1db954] font-bold mb-2">Quick Links</h3>
            <nav className="flex flex-col space-y-1">
              <a href="#home" className="hover:text-gray-300">Home</a>
              <a href="#about" className="hover:text-gray-300">About</a>
              <a href="#projects" className="hover:text-gray-300">Projects</a>
              <a href="#certification" className="hover:text-gray-300">Certification</a>
              <a href="#hobbies" className="hover:text-gray-300">Hobbies</a>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl text-[#1db954] font-bold mb-2">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/karl-joshua-encio-8739a7300/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-gray-300" />
              </a>
              <a href="https://edith.feutech.edu.ph/briefcase/profile/KarlJoshuaEncio" target="_blank" rel="noopener noreferrer">
                <FaBriefcase className="text-2xl hover:text-gray-300" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl text-[#1db954] font-bold mb-2">Contact</h3>
            <div className="space-y-1">
              <p>Manila, Philippines</p>
              <p>Phone: 09693163460</p>
              <p>Email: enciokarl@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="text-center text-[#1db954] mt-4 pt-4 border-t border-gray-600">
          <p>&copy; {new Date().getFullYear()} Karl Joshua Y. Encio | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
