// import React from "react";

// export default function Projects() {
//   const projects = [
//     { id: 1, title: "Project One", img: "https://via.placeholder.com/400" },
//     { id: 2, title: "Project Two", img: "https://via.placeholder.com/400" },
//     { id: 3, title: "Project Three", img: "https://via.placeholder.com/400" },
//     { id: 4, title: "Project Four", img: "https://via.placeholder.com/400" },
//   ];

//   return (
//     <section id="projects" className="py-20 px-10 bg-gray-50 text-center">
//       <h2 className="text-3xl font-bold mb-10">Projects</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {projects.map((p) => (
//           <div key={p.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition">
//             <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
//             <h3 className="text-xl font-semibold p-4">{p.title}</h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }





import React from "react";

export default function Projects() {
  const projects = [
    { 
      id: 1, 
      title: "E-Commerce Website", 
      img: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 2, 
      title: "Food Delivery App", 
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 3, 
      title: "Portfolio Website", 
      img: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 4, 
      title: "Digital Marketing Dashboard", 
      img: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=800&q=80" 
    },
  ];

  return (
    <section id="projects" className="py-20 px-10 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div 
            key={p.id} 
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition duration-300"
          >
            <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold p-4">{p.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
