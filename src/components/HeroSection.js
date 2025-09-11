import React from "react";

const HeroSection = () => {
  return (
    <section id="hero" className="bg-yellow-400 text-blue-900 py-24 px-6 pt-32 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Right Certifications. Strong Credentials. Great Career.
      </h1>
      <p className="text-lg max-w-2xl mx-auto mb-6">
        Certifa helps you earn strong credentials through the right certifications to build a great career.
      </p>
      <a
        href="#courses"
        className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800"
      >
        Explore Courses
      </a>
    </section>
  );
};

export default HeroSection;
    
