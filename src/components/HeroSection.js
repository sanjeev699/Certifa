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
import heroImage from "../assets/hero2.jpg"; // adjust path if needed

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="px-6 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4 text-[#1E40AF]">
          Global Certifications. Epic Credentials. Amazing Career.
        </h1>
        <p className="text-lg mb-6 text-[#1E40AF]">
          Your journey with us starts with Skills Mastery and ends with Certifications valued worldwide.
        </p>
        <a
          href="#courses"
          className="bg-[#1E40AF] text-[#fdcb06] px-6 py-3 rounded-lg shadow hover:font-bold"
        >
          Explore Courses
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
