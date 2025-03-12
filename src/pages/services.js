import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/global.css';

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="py-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center">Our Services</h1>
        <ul className="list-none space-y-6">
          <li className="bg-white p-6 rounded-lg shadow-md">
            <span className="font-semibold text-xl text-gray-800">Full Grooming</span> - $150+
            <p className="text-gray-600">Bath, haircut, nail trim, and more.</p>
          </li>
        </ul>
        <a href="/contact" className="block mt-8 text-center silver-accent text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-400 max-w-xs mx-auto">
          Book Now
        </a>
      </div>
    </div>
  );
}