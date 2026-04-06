import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/lwl.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#0b2a4a] text-white shadow-md">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

      <a href="#home" className="inline-flex items-center">
  <img
    src={logo}
    alt="Eduorbix Logo"
    className="h-14 w-auto object-contain cursor-pointer block"
  />
</a>
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-yellow-400">Home</a>
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#services" className="hover:text-yellow-400">Services</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </nav>

        {/* Desktop Button */}
        <button className="hidden md:block bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500">
          Apply Now
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        </div>

      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50">

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="absolute top-0 right-0 w-[75%] h-full bg-[#0b2a4a] p-6 flex flex-col gap-6 shadow-lg">

            {/* Close Button */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">
                <span className="text-white">EDU</span>
                <span className="text-yellow-400">ORBIX</span>
              </h2>

              <button onClick={() => setIsOpen(false)}>
                <X size={28} />
              </button>
            </div>

            {/* Links */}
            <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Home</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">About</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Services</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Contact</a>

            {/* Button */}
            <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500">
              Apply Now
            </button>

          </div>
        </div>
      )}

    </header>
  );
};

export default Header;