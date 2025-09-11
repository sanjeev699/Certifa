import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-yellow-400 text-blue-900 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <a href="/" className="text-2xl font-bold">Certifa</a>

        {/* Menu Links */}
        <div className="space-x-6">
          <Link
            to="hero"
            smooth={true}
            duration={600}
            spy={true}
            offset={-80}
            activeClass="border-b-2 border-blue-900 pb-1"
            className="cursor-pointer hover:underline"
          >
            Home
          </Link>
          <Link
            to="courses"
            smooth={true}
            duration={600}
            spy={true}
            offset={-80}
            activeClass="border-b-2 border-blue-900 pb-1"
            className="cursor-pointer hover:underline"
          >
            Courses
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={600}
            spy={true}
            offset={-80}
            activeClass="border-b-2 border-blue-900 pb-1"
            className="cursor-pointer hover:underline"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
  
