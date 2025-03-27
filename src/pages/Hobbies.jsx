import { motion } from "framer-motion";
import React from "react";

import golf1 from "../assets/hobbies/golf1.jpg";
import golf2 from "../assets/hobbies/golf2.jpg";
import tft1 from "../assets/hobbies/tft1.jpg";
import tft2 from "../assets/hobbies/tft2.jpg";

const hobbies = [
  {
    id: 1,
    image: golf1, 
    title: "Golf",
    description: "Swingin', chillin",
  },
  {
    id: 2,
    image: golf2, 
    title: "Golf",
    description: "Some days I’m Tiger Woods, some days I’m just lost in the woods.",
  },
  {
    id: 3,
    image: tft1, 
    title: "2024 iTam Game Con Teamfight Tactics ",
    description: "Finished 4th place out of 64 players.",
  },
  {
    id: 4,
    image: tft2, 
    title: "Riot Games - Teamfight Tactics 5th Year Anniversary Bash",
    description: "Got invited by Riot Games to celebrate the 5th anniversary of Teamfight Tactics.",
  },
];

export default function HobbiesGallery() {
  return (
    <section id="hobbies" className="flex flex-col items-center w-full min-h-screen py-6 md:py-10 bg-[#121212] text-white px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl text-[#1db954] font-bold mb-6 md:mb-10">My Hobbies</h2>
      <div className="space-y-12 md:space-y-20 w-full max-w-4xl">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={hobby.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center gap-6 md:gap-10`}
          >
            <motion.img
              src={hobby.image}
              alt={hobby.title}
              className="w-full md:w-80 h-64 md:h-80 object-cover rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="max-w-md w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl md:text-2xl text-[#1db954] font-semibold mb-2 text-center md:text-left">{hobby.title}</h3>
              <p className="text-base md:text-lg text-gray-300 text-center md:text-left">{hobby.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
