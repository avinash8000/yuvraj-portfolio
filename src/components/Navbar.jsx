import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black text-white px-6 py-4 flex justify-between items-center z-50">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <ul className="flex space-x-6">
        <li><a href="#about" className="hover:text-gray-400">About</a></li>
        <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
        <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </nav>
  );
}
