import React from "react";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CoursesSection from "./components/CoursesSection";
import ContactSection from "./components/ContactSection";

const HomePage = () => {
  return (
    <div>
     
      <HeroSection />
       <AboutSection />
      <CoursesSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;