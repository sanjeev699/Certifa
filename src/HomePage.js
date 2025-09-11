import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CoursesSection from "./components/CoursesSection";
import ContactSection from "./components/ContactSection";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
