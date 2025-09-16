/* import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="text-blue-900 py-24 px-6 pt-32 text-center"
      style={{
        background: "linear-gradient(to right, #1E40AF 0%, #FFD700 10%, #FFD700 90%, #1E40AF 100%)",
      }}
    >
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
*/



import React from "react";
import heroImage from "../assets/hero.jpg"; // Place your hero image inside src/assets/

const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full h-[90vh]">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Certifa Hero"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-60 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-brandBlue mb-4 drop-shadow">
          Global Certifications. Epic Credentials. Amazing Career.
        </h1>
        <p className="text-lg md:text-xl text-brandBlue max-w-2xl mb-6">
          Your journey with us starts with Skills Mastery and ends with Certifications
          that build Credentials employers trust worldwide.
        </p>
        <a
          href="#courses"
          className="bg-brandYellow text-brandBlue px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-400 hover:scale-105 transition transform"
        >
          Explore Courses
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
