// import React from "react";

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full bg-black text-white px-6 py-4 flex justify-between items-center z-50">
//       <h1 className="text-2xl font-bold pr-4">Portfolio</h1>
//       <ul className="flex space-x-6">
//         <li><a href="#about" className="hover:text-gray-400">About</a></li>
//         <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
//         <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
//         <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
//       </ul>
//     </nav>
//   );
// }




import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 w-full bg-black text-white px-6 py-4 flex justify-between items-center z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold pr-4">Portfolio</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li><a href="#about" className="hover:text-gray-400">About</a></li>
        <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
        <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-black flex flex-col items-center py-6 space-y-4 md:hidden">
          <li>
            <a 
              href="#about" 
              className="hover:text-gray-400" 
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className="hover:text-gray-400" 
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="hover:text-gray-400" 
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="hover:text-gray-400" 
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

