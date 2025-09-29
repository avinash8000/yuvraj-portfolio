import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-10 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form className="max-w-lg mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border p-3 rounded-lg" />
        <input type="email" placeholder="Your Email" className="w-full border p-3 rounded-lg" />
        <textarea placeholder="Your Message" rows="5" className="w-full border p-3 rounded-lg"></textarea>
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">Send</button>
      </form>
    </section>
  );
}
