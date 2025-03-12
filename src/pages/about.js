import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/global.css';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8">About OG Grooming</h1>
        <p className="text-lg text-gray-800 mb-6">We’re a mobile grooming service bringing luxury and care to your pets since 2021.</p>
      </div>
    </div>
  );
}