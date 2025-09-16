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
import heroImage from "../Assets/hero.jpg"; // make sure the image is inside src/assets folder

const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full h-[90vh]">
      <img
        src={heroImage}
        alt="Certifa Hero"
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default HeroSection;

