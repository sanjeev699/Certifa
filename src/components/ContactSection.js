import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-100 py-12 px-6 text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Get in Touch</h2>
      <p className="text-gray-700 mb-6">
        Have questions about our courses or need batch details? Reach out to us!
      </p>
      <a
        href="mailto:your-email@example.com"
        className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800"
      >
        Contact Us
      </a>
    </section>
  );
};

export default ContactSection;
