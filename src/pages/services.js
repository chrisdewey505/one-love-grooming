import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/global.css';

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="py-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center text-purple-300">Our Services</h1>
        <ul className="list-none space-y-6">
          <li className="bg-white p-6 rounded-lg shadow-md">
            <span className="font-semibold text-xl text-purple-300">Full Grooming</span> - $150+
            <p className="text-gray-800">Bath, haircut, nail trim, and more.</p>
          </li>
          <li className="bg-white p-6 rounded-lg shadow-md">
            <span className="font-semibold text-xl text-purple-300">Bath & Brush</span> - $100+
            <p className="text-gray-800">A refreshing clean and brush-out.</p>
          </li>
          <li className="bg-white p-6 rounded-lg shadow-md">
            <span className="font-semibold text-xl text-purple-300">Deshedding</span> - $30+
            <p className="text-gray-800">Reduce shedding with expert care.</p>
          </li>
        </ul>
        <p className="mt-8 text-center text-lg">Prices vary by breed and needs. Get a custom quote!</p>
        <a href="/quote" className="block mt-4 text-center bg-white text-purple-300 font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-100 max-w-xs mx-auto">
          Get a Quote
        </a>
      </div>
    </div>
  );
}