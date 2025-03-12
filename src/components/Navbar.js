import React from 'react';
import logo from '../images/logo4.png'; // Adjust path to your logo

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 py-6 px-6 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-start">
        <div className="relative group">
          <a href="/" title="Go to Home Page">
            <img
              src={logo}
              alt="OG Grooming Logo"
              className="h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>
          <div className="absolute top-full left-0 w-48 hidden group-hover:block bg-white p-4 shadow-lg z-50 border border-gray-300 fade-in">
            <div className="flex flex-col space-y-3">
              <a
                href="/services"
                className="block w-full py-2 px-4 bg-gray-100 text-gray-800 rounded-full text-center font-semibold hover:bg-gray-200 transition-colors"
              >
                Services
              </a>
              <a
                href="/about"
                className="block w-full py-2 px-4 bg-gray-100 text-gray-800 rounded-full text-center font-semibold hover:bg-gray-200 transition-colors"
              >
                About
              </a>
              <a
                href="/contact"
                className="block w-full py-2 px-4 bg-gray-100 text-gray-800 rounded-full text-center font-semibold hover:bg-gray-200 transition-colors"
              >
                Contact
              </a>
              <a
                href="/quote"
                className="block w-full py-2 px-4 bg-gray-100 text-gray-800 rounded-full text-center font-semibold hover:bg-gray-200 transition-colors"
              >
                Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}