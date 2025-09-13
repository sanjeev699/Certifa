import React from "react";

const CoursesSection = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const contact = e.target.contact.value.trim();
    const program = e.target.program.value.trim();

    // Validation
    if (!name || !email || !contact || !program) {
      alert("Please fill in all the fields before submitting.");
      return;
    }

    // 1. Open WhatsApp immediately
 const phone = "916366072794";
const message = `Hello Certifa, I want to enroll.\nName: ${name}\nEmail: ${email}\nContact: ${contact}\nProgram: ${program}`;
const encodedMessage = encodeURIComponent(message);

// Open WhatsApp Web with a short delay to ensure the URL is processed
window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");

    // 2. Save to Google Sheet
    try {
      fetch("https://script.google.com/macros/s/AKfycbzsoAWDPjCOo2GmFFIZU7xZg5C90T6ROAMTeL99ZfS0TtsNUYTJN-VtauBD6FiUwAkrlw/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "enrollment",
          name,
          email,
          contact,
          program,
        }),
      });
    } catch (err) {
      console.error("Error saving to Google Sheet:", err);
    }

    // 3. Reset form
    e.target.reset();
  };

  return (
    <section id="courses" className="bg-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
        Data Analytics Bootcamp with Power BI (Certification Track)
      </h2>
      <p className="text-center max-w-2xl mx-auto text-gray-700 mb-8">
        A 4-month, career-oriented program designed to take you from basics to advanced analytics. 
        Gain skills in Excel, Python, SQL, and Power BI while preparing for the official Microsoft PL-300 certification.
      </p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left side */}
        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Course Details</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Microsoft Excel for Analytics</li>
            <li>Python for Data Analytics</li>
            <li>SQL for Data Management</li>
            <li>Microsoft Power BI (PL-300 Certification Empowering Course)</li>
          </ul>
          <p className="mt-4"><strong>Duration:</strong> 4 Months</p>
          <p><strong>Batch Timings:</strong> Please reach out for latest availability</p>
        </div>

        {/* Right side */}
        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Bonuses</h3>
          <p className="font-semibold text-gray-800">Before Exam:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Microsoft Power BI PL-300 exam fee (first attempt)</li>
            <li>Mock Tests for PL-300</li>
            <li>End-to-end Real Business Projects</li>
          </ul>
          <p className="font-semibold text-gray-800">After You Pass:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Naukri.com 3 months' premium subscription</li>
            <li>Resume Building Session</li>
            <li>LinkedIn Profile Enhancement</li>
            <li>Mock Interviews</li>
          </ul>
        </div>
      </div>

      {/* Enroll Form */}
      <div className="text-center mt-8 max-w-lg mx-auto">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Enroll Now</h3>
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
          <select
            name="program"
            className="w-full border p-3 rounded"
          >
            <option value="">-- Select Program --</option>
            <option value="Data Analytics Bootcamp with Power BI (Certification Track)">
              Data Analytics Bootcamp with Power BI (Certification Track)
            </option>
          </select>
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 w-full"
          >
            Submit Enrollment
          </button>
        </form>
      </div>
    </section>
  );
};

export default CoursesSection;
