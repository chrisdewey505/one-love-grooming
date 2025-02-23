import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-purple-300 text-white py-4 px-6 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <img src="/images/logo.jpg" alt="One Love Grooming Logo" className="h-12 w-auto" />
        <div className="space-x-6 text-lg">
          <a href="/" className="hover:text-gray-200">Home</a>
          <a href="/services" className="hover:text-gray-200">Services</a>
          <a href="/about" className="hover:text-gray-200">About</a>
          <a href="/contact" className="hover:text-gray-200">Contact</a>
          <a href="/quote" className="hover:text-gray-200">Quote</a>
        </div>
      </div>
    </nav>
  );
}