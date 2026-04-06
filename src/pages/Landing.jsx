import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Hero from "../component/Hero";

const Landing = () => {
  return (
    <div>

      {/* Header */}
      <Header />

      {/* Hero */}
      <div id="home">
        <Hero />
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-white text-center px-6">
        <h2 className="text-3xl font-bold text-[#0b2a4a] mb-4">
          About Us
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600">
          Eduorbix is a trusted education consultancy helping students
          achieve their dreams of studying in top universities across India
          and abroad. We provide complete guidance from course selection to visa approval.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold text-center text-[#0b2a4a] mb-10">
          Our Services
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">University Admission</h3>
            <p className="text-gray-600">
              Get admission in top universities worldwide with expert support.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Visa Assistance</h3>
            <p className="text-gray-600">
              Complete support for visa process and documentation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Career Counselling</h3>
            <p className="text-gray-600">
              Personalized career guidance for better future decisions.
            </p>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white px-6 text-center">
        <h2 className="text-3xl font-bold text-[#0b2a4a] mb-6">
          Contact Us
        </h2>

        <p className="text-gray-600 mb-6">
          Have questions? Get in touch with us today.
        </p>

        <div className="max-w-xl mx-auto space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded"
          />

          <textarea
            placeholder="Your Message"
            className="w-full border p-3 rounded"
          ></textarea>

          <button className="bg-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500">
            Send Message
          </button>

        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Landing;