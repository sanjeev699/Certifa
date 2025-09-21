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
       Want to build a great career? It starts with a globally recognised certification!
      </h1>
      <p className="text-lg max-w-2xl mx-auto mb-6">
        Certifa helps you earn the right certifications and build strong credentials for a great career.

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
import heroImage from "../Assets/hero4.jpg"; // adjust path if needed

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
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-[#0531f9] -mt-8">
        <h1 className="text-4xl font-extrabold mb-6 leading-snug">
        Happy with an average job? Or ready to build a Great Career?
        </h1>
        <p className="text-xl max-w-3xl mb-8">
        The first step is earning a globally recognised certification — and Certifa shows you the way.
        </p>
        <a
          href="#courses"
          className="bg-[#0531f9] text-[#f9cd05] px-6 py-3 rounded-lg shadow hover:font-extrabold"
        >
          Explore Courses
        </a>

      <p className="mt-4 text-lg max-w-2xl text-[#0531f9] font-semibold italic">
"Average ends here. Excellence begins now."
</p>
            
      </div>
    </section>
  );
};

export default HeroSection;
