import React from "react";

// Replace these colors with exact shades from your logo if needed
const blueColor = "#0D47A1"; // navbar/logo blue
const yellowColor = "#FFD600"; // logo yellow

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Who Are We */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Certifa is just not another institute..</h2>
          <p className="text-gray-700 leading-relaxed">
            Certifa is a premier learning platform dedicated to empowering students with the right skills and certifications that truly matter in the industry. Unlike traditional institutes that focus solely on knowledge, we provide hands-on training designed to help students understand real-world industry requirements and successfully crack prestigious certifications.
          </p>
        </div>

        {/* Vision & Mission */}
       // <div className="mb-12">
          //<h2 className="text-3xl font-bold text-blue-900 mb-4">Vision & Mission</h2>
          <h3 className="text-xl font-semibold text-yellow-600 mb-2">Vision</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            To be India’s leading platform for certification-driven career growth, enabling students to gain not just skills but recognized industry credentials.
          </p>
          <h3 className="text-xl font-semibold text-yellow-600 mb-2">Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To provide practical, industry-aligned training that helps students earn valuable certifications, boosting their chances of securing jobs and growing their careers.
          </p>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Why Choose Certifa?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-yellow-600 mb-2">Premium Certifications</h3>
              <p className="text-gray-700">
                Earn recognized credentials that increase your employability.
              </p>
            </div>
            {/* Card 2 */}
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-yellow-600 mb-2">Hands-on Training</h3>
              <p className="text-gray-700">
                Learn by doing and understand real industry expectations.
              </p>
            </div>
            {/* Card 3 */}
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">👨‍🏫</div>
              <h3 className="text-xl font-semibold text-yellow-600 mb-2">Expert Guidance</h3>
              <p className="text-gray-700">
                Learn from industry professionals who understand what employers look for.
              </p>
            </div>
            {/* Card 4 */}
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-yellow-600 mb-2">Career Advantage</h3>
              <p className="text-gray-700">
                Boost your employability and grow your career in a competitive market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
