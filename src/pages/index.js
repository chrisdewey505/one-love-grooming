import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/global.css';
import vanImage from '../images/logo.png'; // Add your van sketch here

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <header className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 py-20 px-6 text-center relative">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">One Love Mobile Grooming</h1>
        <p className="text-xl md:text-2xl mb-8">Cutting-edge grooming at your doorstep</p>
        <a href="/services" className="inline-block silver-accent text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-400">
          Explore Our Services
        </a>
        <div className="absolute bottom-30 right-20 opacity-15">
          <img src={vanImage} alt="Mobile Van" className="w -40" />
        </div>
      </header>
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">Mobile Luxury Grooming</h2>
        <p className="text-lg">Premium pet care delivered in our state-of-the-art mobile van.</p>
      </section>

      <section className="py-16 px-6 bg-gray-100 text-center">
  <h2 className="text-4xl font-semibold mb-6">Book Your Appointment</h2>
  <p className="text-lg text-gray-800">Booking system coming soon!</p>
</section>
    </div>
  );
}