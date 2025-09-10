import React from "react";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-certifaBlue p-4 text-white shadow-lg">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Certifa Logo" className="h-10 w-10" />
          <span className="text-xl font-bold">Certifa</span>
        </div>
        <div className="space-x-4">
          <a href="#about" className="hover:text-certifaYellow">About</a>
          <a href="#services" className="hover:text-certifaYellow">Services</a>
          <a href="#contact" className="hover:text-certifaYellow">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="text-center py-20 bg-gradient-to-r from-certifaBlue to-certifaYellow text-white">
        <h1 className="text-4xl font-bold mb-4">Right Certification. Bright Careers.</h1>
        <p className="text-lg mb-6">Earn strong credentials with Certifa and unlock better career opportunities.</p>
        <a href="#services" className="px-6 py-3 bg-white text-certifaBlue font-semibold rounded-lg shadow hover:bg-gray-200">
          Explore Services
        </a>
      </header>

      {/* About */}
      <section id="about" className="p-10 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4 text-certifaBlue">About Certifa</h2>
        <p className="text-gray-700">
          At Certifa, we help students and professionals achieve career growth
          through industry-recognized certifications. Our platform guides you
          with preparation, resume building, and interview support.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-certifaBlue text-white p-6 text-center">
        <p>&copy; {new Date().getFullYear()} Certifa. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
