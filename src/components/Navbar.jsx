import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#project" },
  { name: "Certifications", href: "#certifications" },
  { name: "Hobbies", href: "#hobbies" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(item.name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-xs sm:max-w-md md:max-w-2xl">
      {/* Mobile Hamburger Button */}
      <div className="flex justify-end md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-[#1c1c1c] p-2 rounded-full text-white border border-[#2a2a2a]"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Navigation Items */}
      <div className="flex justify-center">
        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center gap-4 bg-[#1c1c1c] px-6 py-2 rounded-full shadow-lg border border-[#2a2a2a] mt-2 md:mt-0 transition-all duration-300 ease-in-out`}
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => {
                  setActive(item.name);
                  setMenuOpen(false);
                }}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                  active === item.name
                    ? "bg-[#1db954] text-white shadow-md"
                    : "bg-transparent text-white hover:bg-[#1db954]/20"
                }`}
              >
                {item.name}
                
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
