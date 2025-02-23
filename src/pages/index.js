import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/global.css';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <header className="bg-gradient-to-r from-purple-300 to-purple-400 text-white py-20 px-6 text-center paw-bg">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">One Love Grooming</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-900">Luxury Mobile Pet Grooming in Huntington Beach</p>
        <a href="/services" className="inline-block bg-white text-purple-300 font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-100">
          Explore Our Services
        </a>
      </header>
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">Premium Grooming On Wheels</h2>
        <p className="text-lg">We bring top-tier grooming to your doorstep in our state-of-the-art Mercedes van.</p>
      </section>
      <section className="py-16 px-6 bg-purple-100 paw-bg">
        <h2 className="text-4xl font-semibold mb-6 text-center">Book Your Appointment</h2>
        <div className="max-w-md mx-auto">
          <p className="text-lg text-purple-300">Booking coming soon!</p>
        </div>
      </section>
    </div>
  );
}