// import React from "react";
// import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";

// export default function Skills() {
//   return (
//     <section id="skills" className="py-20 px-10 bg-white text-center">
//       <h2 className="text-3xl font-bold mb-10">Skills</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
//         <FaHtml5 size={60} className="text-orange-600" />
//         <FaCss3Alt size={60} className="text-blue-600" />
//         <FaJsSquare size={60} className="text-yellow-500" />
//         <FaReact size={60} className="text-blue-400" />
//         <FaNodeJs size={60} className="text-green-600" />
//       </div>
//     </section>
//   );
// }





import React from "react";
import { FaSearchengin, FaGoogle, FaDigitalOcean, FaChartLine, FaBullhorn } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-10 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
        {/* SEO */}
        <div className="flex flex-col items-center">
          <FaSearchengin size={60} className="text-green-600" />
          <span className="mt-2 text-sm font-medium">SEO Optimization</span>
        </div>

        {/* Google Analytics */}
        <div className="flex flex-col items-center">
          <FaGoogle size={60} className="text-red-500" />
          <span className="mt-2 text-sm font-medium">Google Analytics</span>
        </div>

        {/* Digital Marketing */}
        <div className="flex flex-col items-center">
          <FaBullhorn size={60} className="text-yellow-500" />
          <span className="mt-2 text-sm font-medium">Digital Marketing</span>
        </div>

        {/* Content Marketing */}
        <div className="flex flex-col items-center">
          <FaChartLine size={60} className="text-blue-500" />
          <span className="mt-2 text-sm font-medium">Content Marketing</span>
        </div>

        {/* Paid Advertising */}
        <div className="flex flex-col items-center">
          <FaDigitalOcean size={60} className="text-purple-500" />
          <span className="mt-2 text-sm font-medium">Paid Advertising (PPC)</span>
        </div>
      </div>
    </section>
  );
}
