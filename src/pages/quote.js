import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/global.css';

export default function Quote() {
  const [breed, setBreed] = useState('Small');
  const [weight, setWeight] = useState('');
  const [frequency, setFrequency] = useState('Monthly');
  const [price, setPrice] = useState(null);

  const calculatePrice = () => {
    let basePrice = 50;
    if (breed === 'Large') basePrice += 20;
    if (weight > 50) basePrice += 10;
    if (frequency === 'Weekly') basePrice -= 5;
    setPrice(basePrice);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculatePrice();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="py-16 px-6 max-w-md mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center text-purple-300">Get a Quote</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-purple-300 font-semibold">Breed Size</label>
            <select
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            >
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-purple-300 font-semibold">Weight (lbs)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-purple-300 font-semibold">Grooming Frequency</label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            >
              <option>Weekly</option>
              <option>Biweekly</option>
              <option>Monthly</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-white text-purple-300 font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-100">
            Calculate Price
          </button>
        </form>
        {price && (
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-semibold text-purple-300">Estimated Price: ${price}</h2>
          </div>
        )}
      </div>
    </div>
  );
}