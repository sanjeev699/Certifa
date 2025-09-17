import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = ["home", "courses", "about", "contact"];

  return (
    <nav className="fixed w-full z-50" style={{ backgroundColor: "0531f9" }}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="/logo2.png" alt="Certifa Logo" className="h-14 w-auto" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {sections.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-64}
              className="cursor-pointer capitalize font-semibold"
              style={{ color: "#FACC15" }}
            >
              {section}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-yellow-400 focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-blue-900 text-yellow-400 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          {sections.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-64}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer capitalize font-semibold"
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
