import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/global.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We’ll respond soon.');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="py-16 px-6 max-w-md mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center text-gray-800">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-gray-800 font-semibold">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-gray-800 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-gray-800 font-semibold">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              rows="4"
              required
            />
          </div>
          <button type="submit" className="w-full bg-gray-300 text-gray-800 font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-400">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}