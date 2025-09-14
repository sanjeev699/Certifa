import React from "react";
import { CheckCircle } from "lucide-react"; // for clean icons

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
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");

    // 2. Save to Google Sheet
    try {
      fetch(
        "https://script.google.com/macros/s/AKfycbzsoAWDPjCOo2GmFFIZU7xZg5C90T6ROAMTeL99ZfS0TtsNUYTJN-VtauBD6FiUwAkrlw/exec",
        {
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
        }
      );
    } catch (err) {
      console.error("Error saving to Google Sheet:", err);
    }

    // 3. Reset form
    e.target.reset();
  };

  return (
    <section className="bg-brandYellow text-brandBlue py-16 px-6 lg:px-20">
      {/* Hero */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-brandBlue mb-4">
          Data Analytics Bootcamp with Power BI (Certification Track)
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-black">
          Become a job-ready Data Analyst in just 4 months. Master Excel, Python,
          SQL, and Power BI while preparing for the{" "}
          <span className="font-bold">Microsoft PL-300 Certification</span>.
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative w-full max-w-5xl mx-auto mb-16">
        <img
          src="/h1.jpg"
          alt="Students learning Data Analytics with Power BI"
          className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
        />
        <div className="absolute inset-0 bg-brandBlue bg-opacity-20 rounded-2xl"></div>
      </div>

      {/* Curriculum */}
      <h3 className="text-2xl font-bold mb-6 text-center">Curriculum Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        {[
          { title: "Excel for Analytics", img: "/excel.png" },
          { title: "Python for Analytics", img: "/python.png" },
          { title: "SQL for Data", img: "/database.png" },
          { title: "Power BI + PL-300", img: "/powerbi.png" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center"
          >
            <img
              src={item.img}
              alt={`${item.title} course in Bootcamp`}
              className="w-16 h-16 mb-4 object-contain"
            />
            <h4 className="font-semibold text-brandBlue">{item.title}</h4>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <h3 className="text-2xl font-bold mb-6 text-center">Your 4-Month Journey</h3>
      <div className="flex justify-between items-center max-w-4xl mx-auto mb-16 relative">
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-brandBlue rounded-full -z-10"></div>
        {["Excel", "Python", "SQL", "Power BI & Certification"].map((step, i) => (
          <div key={i} className="flex flex-col items-center w-1/4 text-center">
            <div className="bg-brandBlue text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mb-2">
              {i + 1}
            </div>
            <p className="font-medium">{step}</p>
          </div>
        ))}
      </div>

      {/* Bonuses */}
      <h3 className="text-2xl font-bold mb-6 text-center">Career Boost Bonuses</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h4 className="text-xl font-semibold mb-4 text-brandBlue">Before Exam</h4>
          <ul className="space-y-3">
            {[
              "Microsoft PL-300 exam fee (first attempt)",
              "Mock Tests & Doubt Sessions",
              "End-to-end Real Business Projects",
            ].map((bonus, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-brandBlue mr-2 mt-1" />
                <span>{bonus}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-brandBlue text-white rounded-xl shadow-md p-6">
          <h4 className="text-xl font-semibold mb-4">After You Pass</h4>
          <ul className="space-y-3">
            {[
              "Naukri.com 3 months premium subscription",
              "Resume Building Session",
              "LinkedIn Profile Enhancement",
              "Mock Interviews with Industry Experts",
            ].map((bonus, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-brandYellow mr-2 mt-1" />
                <span>{bonus}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Enrollment Form with WhatsApp + Google Sheet */}
      <div className="text-center mt-8 max-w-lg mx-auto">
        <h3 className="text-2xl font-bold text-brandBlue mb-4">Enroll Now</h3>
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
          <select name="program" className="w-full border p-3 rounded">
            <option value="">-- Select Program --</option>
            <option value="Data Analytics Bootcamp with Power BI (Certification Track)">
              Data Analytics Bootcamp with Power BI (Certification Track)
            </option>
          </select>
          <button
            type="submit"
            className="bg-brandBlue text-white px-6 py-3 rounded-lg shadow hover:bg-brandYellow hover:text-black w-full transition"
          >
            Submit Enrollment
          </button>
        </form>
      </div>
    </section>
  );
};

export default CoursesSection;
