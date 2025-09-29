// import React from "react";
// import profile from "../assets/yuvraj.jpg"; 

// export default function Hero() {
//   return (
//     <section className="h-screen flex flex-col md:flex-row items-center justify-center bg-black text-white px-10">
//       <div className="flex-1 text-center md:text-left">
//         <p className="text-lg">Hi, I am</p>
//         <h1 className="text-5xl font-bold mt-2">Yuvraj Bisht</h1>
//         <p className="text-xl mt-4">SEO Executive | Digital Marketing </p>
//         <div className="mt-6 flex justify-center md:justify-start space-x-4">
//           <a href="#" className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-300">Hire Me</a>
//           <a href="#projects" className="border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-black">Projects</a>
//         </div>
//       </div>
//       <div className="flex-1 mt-8 md:mt-0 flex justify-center">
//         <img src={profile} alt="Profile" className="w-96 h-96 rounded-full object-cover shadow-lg" />
//       </div>
//     </section>
//   );
// }





// import React from "react";
// import profile from "../assets/yuvraj.jpg"; 

// export default function Hero() {
//   return (
//     <section className="h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black text-white px-10">
//       {/* Left Content */}
//       <div className="flex-1 text-center md:text-left">
//         <p className="text-lg text-gray-300">Hi, I am</p>
//         <h1 className="text-5xl font-bold mt-2">Yuvraj Bisht</h1>
//         <p className="text-xl mt-4 text-gray-300">SEO Executive | Digital Marketing Specialist</p>

//         {/* Buttons */}
//         <div className="mt-6 flex justify-center md:justify-start space-x-4">
//           <a 
//             href="#contact" 
//             className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition"
//           >
//             Hire Me
//           </a>
//           <a 
//             href="#projects" 
//             className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
//           >
//             Projects
//           </a>
//         </div>
//       </div>

//       {/* Right Image */}
//       <div className="flex-1 mt-8 md:mt-0 flex justify-center relative">
//         <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl hover:scale-105 transition">
//           <img 
//             src={profile} 
//             alt="Yuvraj Bisht" 
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }




import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/yuvraj.jpg"; 

export default function Hero() {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black text-white px-10">
      
      {/* Left Content - Text */}
      <motion.div 
        className="flex-1 text-center md:text-left"
        initial={{ x: -100, opacity: 0 }}    // starts from left
        animate={{ x: 0, opacity: 1 }}       // slides into place
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p className="text-lg text-gray-300">Hi, I am</p>
        <h1 className="text-5xl font-bold mt-2">Yuvraj Bisht</h1>
        <p className="text-xl mt-4 text-gray-300">SEO Executive | Digital Marketing Specialist</p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          <a 
            href="#contact" 
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition"
          >
            Hire Me
          </a>
          <a 
            href="#projects" 
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Projects
          </a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div 
        className="flex-1 mt-8 md:mt-0 flex justify-center relative"
        initial={{ x: 100, opacity: 0 }}     // starts from right
        animate={{ x: 0, opacity: 1 }}       // slides into place
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl hover:scale-105 transition">
          <img 
            src={profile} 
            alt="Yuvraj Bisht" 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
