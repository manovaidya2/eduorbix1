import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/lwl.png";

const Footer = () => {
  return (
    <footer className="bg-[#0f2f57] text-white pt-14 pb-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand + Contact */}
          <div>
            <a href="#home" className="inline-flex items-center">
              <img
                src={logo}
                alt="Eduorbix Logo"
                className="h-14 w-auto object-contain cursor-pointer block"
              />
            </a>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Professional education consultancy helping students secure admission
              in top universities across India and abroad.
            </p>

            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-400">About</a></li>
              <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Programs
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-yellow-400 cursor-pointer">MBA / BBA</li>
              <li className="hover:text-yellow-400 cursor-pointer">Engineering</li>
              <li className="hover:text-yellow-400 cursor-pointer">Medical</li>
              <li className="hover:text-yellow-400 cursor-pointer">Law</li>
            </ul>
          </div>

          {/* Address (RIGHT SIDE) */}
          <div>
            
            <h3 className="text-lg font-semibold mb-4">
              Address
            </h3>

            <div className="flex gap-3">
              <MapPin size={18} className="text-yellow-400 mt-1 flex-shrink-0" />

              <div className="text-sm text-gray-300 leading-relaxed">
                Flat 302, Tower B, Orchid Residency <br />
                Sector 57, Gurugram <br />
                Gurugram, Haryana - 122003 <br />
                India
              </div>
              
            </div>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <Phone size={16} className="text-yellow-400 mt-1" />
                <span>8882408906</span>
              </div>

              <div className="flex items-start gap-2">
                <Mail size={16} className="text-yellow-400 mt-1" />
                <span>eduglobecontent@gmail.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-[#254a7a] mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 text-center md:text-left gap-3">

          <p>© 2026 Eduorbix. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <span className="hover:text-yellow-400 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-yellow-400 cursor-pointer">
              Terms & Conditions
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;