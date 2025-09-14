import React from "react";
import { CheckCircle, GraduationCap, Briefcase, BarChart3, Award } from "lucide-react"; // all icons

const CoursesSection = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const contact = e.target.contact.value.trim();
    const program = e.target.program.value.trim();

    if (!name || !email || !contact || !program) {
      alert("Please fill in all the fields before submitting.");
      return;
    }

    // WhatsApp
    const phone = "916366072794";
    const message = `Hello Certifa, I want to enroll.\nName: ${name}\nEmail: ${email}\nContact: ${contact}\nProgram: ${program}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");

    // Google Sheets
    try {
      fetch(
        "https://script.google.com/macros/s/AKfycbzsoAWDPjCOo2GmFFIZU7xZg5C90T6ROAMTeL99ZfS0TtsNUYTJN-VtauBD6FiUwAkrlw/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "enrollment", name, email, contact, program }),
        }
      );
    } catch (err) {
      console.error("Error saving to Google Sheet:", err);
    }

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

      {/* Curriculum (with icons) */}

{/* Curriculum (with icons) */}
<h3 className="text-2xl font-bold mb-6 text-center">Curriculum Overview</h3>
<div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
  {[
    { title: "Excel for Analytics", img: "/excel.png" },
    { title: "Python for Data Analytics", img: "/python.png" },
    { title: "SQL for Data Management", img: "/database.png" },
    { title: "Power BI + PL-300", img: "/powerbi.png" },
  ].map((item, idx) => (
    <div
      key={idx}
      className="bg-brandBlue rounded-2xl shadow p-6 flex flex-col items-center text-center text-brandYellow"
    >
      <img
        src={item.img}
        alt={item.title}
        className="w-16 h-16 mb-4 object-contain"
      />
      <h3 className="font-bold text-lg">{item.title}</h3>
    </div>
  ))}
</div>



      {/* Why Certifa */}
      <section className="py-12 px-6 bg-brandYellow/10 mb-16 rounded-xl">
        <h3 className="text-3xl font-bold text-center text-brandBlue mb-10">
          Why Do the Data Analytics Program with{" "}
          <span className="text-brandBlue">Certifa</span>?
        </h3>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition">
            <GraduationCap className="h-10 w-10 text-brandBlue mb-3" />
            <h3 className="font-bold text-lg text-brandBlue mb-2">Industry-Aligned</h3>
            <p className="text-gray-600 text-sm">
              Hands-on skills in Excel, Python, SQL & Power BI.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition">
            <Award className="h-10 w-10 text-brandBlue mb-3" />
            <h3 className="font-bold text-lg text-brandBlue mb-2">Certification Edge</h3>
            <p className="text-gray-600 text-sm">
              Direct prep for Microsoft PL-300, globally recognized.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition">
            <Briefcase className="h-10 w-10 text-brandBlue mb-3" />
            <h3 className="font-bold text-lg text-brandBlue mb-2">4x Job Advantage</h3>
            <p className="text-gray-600 text-sm">
              Certified analysts land roles at top firms faster.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition">
            <BarChart3 className="h-10 w-10 text-brandBlue mb-3" />
            <h3 className="font-bold text-lg text-brandBlue mb-2">Higher Salaries</h3>
            <p className="text-gray-600 text-sm">
              PL-300 certified pros earn 30–50% more than non-certified.
            </p>
          </div>
        </div>
      </section>

      {/* Career Boost Bonuses */}
      <div className="max-w-5xl mx-auto mb-12">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">Career Boost Bonuses</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border rounded-lg p-4 shadow">
            <p className="font-semibold text-gray-800 mb-2">💡 Before the Exam</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>100% Microsoft Power BI PL-300 Certification Exam Fee Covered</li>
              <li>Mock Tests & Doubt-Clearing Sessions</li>
              <li>Real Business Projects for Portfolio</li>
            </ul>
          </div>
          <div className="bg-white border rounded-lg p-4 shadow">
            <p className="font-semibold text-gray-800 mb-2">🌟 After You Pass</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Naukri.com 3-month Premium Access</li>
              <li>Resume & LinkedIn Profile Makeover</li>
              <li>Mock Interviews with Industry Experts</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Enrollment Form */}
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
