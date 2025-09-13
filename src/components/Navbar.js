import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  // Update these section names to match your IDs in HomePage.js
  const sections = ["home", "courses", "about", "contact"];

  return (
    <nav className="fixed w-full z-50" style={{ backgroundColor: "#1E40AF" }}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0 -ml-48" >
          <img src="/logo.png" alt="Certifa Logo" className="h-14 w-auto" />
        </div>

        {/* Navigation links */}
        <div className="hidden md:flex space-x-8">
          {sections.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-64} // prevents overlap with navbar
              className="cursor-pointer capitalize font-semibold"
              style={{ color: "#FACC15" }}
            >
              {section}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
