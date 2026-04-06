import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-20 md:pt-24 pb-24 md:pb-32">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0b2a4a]/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 text-white">

        {/* Badge */}
        <div className="inline-block bg-[#0d2f52] border border-yellow-400 text-[#c5a46d] px-3 py-1 rounded-full text-xs sm:text-sm mb-4">
          • Trusted by 15,000+ Students
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4 max-w-3xl">
          Not Just Education -{" "}
          <span className="text-[#c5a46d]">A Global Journey</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 max-w-xl mb-6 text-base sm:text-lg md:text-xl leading-relaxed">
          Personalized admission guidance, university shortlisting,
          application support, and visa assistance — all under one roof.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">

          <Link to="/contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#c5a46d] text-black px-6 py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-yellow-500 transition">
              🎓 Book Free Counselling →
            </button>
          </Link>

          <Link to="/application-form" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto border border-yellow-400 px-6 py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-yellow-400 hover:text-black transition">
              📝 Apply Now
            </button>
          </Link>

        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm md:text-base text-gray-300">
          <div className="flex items-center gap-2">
            <span className="text-[#c5a46d]">✔</span> 98% Success Rate
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#c5a46d]">✔</span> 500+ Universities
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#c5a46d]">✔</span> 25+ Countries
          </div>
        </div>

      </div>

      {/* Bottom Stats Card */}
      <div className="absolute bottom-[-70px] md:bottom-[-60px] left-1/2 -translate-x-1/2 w-[95%] sm:w-[92%] bg-white rounded-2xl shadow-lg grid grid-cols-2 md:grid-cols-4 text-center py-4 sm:py-6 z-20">

        <div className="border-r border-gray-200 px-2">
          <p className="text-xl sm:text-2xl font-bold text-[#c5a46d]">15,000+</p>
          <p className="text-gray-600 text-xs sm:text-sm">Students Placed</p>
        </div>

        <div className="border-r border-gray-200 px-2">
          <p className="text-xl sm:text-2xl font-bold text-[#c5a46d]">500+</p>
          <p className="text-gray-600 text-xs sm:text-sm">Partner Universities</p>
        </div>

        <div className="border-r border-gray-200 px-2">
          <p className="text-xl sm:text-2xl font-bold text-[#c5a46d]">25+</p>
          <p className="text-gray-600 text-xs sm:text-sm">Countries Covered</p>
        </div>

        <div className="px-2">
          <p className="text-xl sm:text-2xl font-bold text-[#c5a46d]">98%</p>
          <p className="text-gray-600 text-xs sm:text-sm">Success Rate</p>
        </div>

      </div>

    </section>
  );
};

export default Hero;