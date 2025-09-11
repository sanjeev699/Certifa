import React from "react";

const CoursesSection = () => {
  return (
    <section id="courses" className="bg-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
        Power BI Data Analyst Career Certification Package
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

      <div className="text-center mt-8">
        <a
          href="#contact"
          className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800"
        >
          Enroll Now
        </a>
      </div>
    </section>
  );
};

export default CoursesSection;
