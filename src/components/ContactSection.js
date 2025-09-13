import React from "react";

const ContactSection = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const contact = e.target.contact.value.trim();
    const message = e.target.message.value.trim();

    // Validate fields
    if (!name || !email || !contact || !message) {
      alert("Please fill in all the fields before submitting.");
      return;
    }

    // 1. Send to WhatsApp
    const whatsappMessage = `Hello Certifa, my name is ${name}. My email is ${email}. My contact number is ${contact}. Message: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/916366072794?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    // 2. Save to Google Sheet
    try {
      await fetch("https://script.google.com/macros/s/AKfycbzsoAWDPjCOo2GmFFIZU7xZg5C90T6ROAMTeL99ZfS0TtsNUYTJN-VtauBD6FiUwAkrlw/exec", {
        method: "POST",
        mode: "no-cors", // required for Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "contact",
          name,
          email,
          contact,
          message,
        }),
      });
    } catch (err) {
      console.error("Error saving to Google Sheet:", err);
    }

    // 3. Reset form
    e.target.reset();
  };

  return (
    <section id="contact" className="bg-gray-100 py-12 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Get in Touch</h2>
        <p className="text-gray-700 mb-6">
          Have questions about our courses or need batch details? Fill out the form below!
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded"
          />
          <input
            type="tel"
            name="contact"
            placeholder="Your Contact Number"
            className="w-full border p-3 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full border p-3 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
