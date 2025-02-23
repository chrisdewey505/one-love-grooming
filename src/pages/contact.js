import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/global.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! We’ll get back to you soon.');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="py-16 px-6 max-w-md mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center text-purple-300">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-purple-300 font-semibold">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-purple-300 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-purple-300 font-semibold">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              rows="4"
              required
            />
          </div>
          <button type="submit" className="w-full bg-white text-purple-300 font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-100">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}