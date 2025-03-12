import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/global.css';

export default function Quote() {
  const [location, setLocation] = useState('Huntington Beach');
  const [breed, setBreed] = useState('Small');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [frequency, setFrequency] = useState('Monthly');
  const [coatLength, setCoatLength] = useState('Short');
  const [price, setPrice] = useState(null);

  const calculatePrice = () => {
    let basePrice = 120; // Base price for a small dog in Huntington Beach

    // Adjust for location
    if (location !== 'Huntington Beach') basePrice += 25; // Extra for nearby areas

    // Adjust for breed size
    if (breed === 'Small') basePrice -= 10;
    if (breed === 'Medium') basePrice -= 10;
    if (breed === 'Large') basePrice += 35;

    // Adjust for age (older pets may need extra care)
    if (age >= 10) basePrice += 25; // Senior pet surcharge

    // Adjust for weight
    if (weight > 30) basePrice += 30;
    if (weight > 50) basePrice += 60;
    if (weight > 65) basePrice += 90;

    // Adjust for frequency
    if (frequency === 'Weekly') basePrice -= 30;
    else if (frequency === 'Biweekly') basePrice -= 20;

    // Adjust for coat length
    if (coatLength === 'short') basePrice -= 20;
    if (coatLength === 'Medium') basePrice += 30;
    if (coatLength === 'Long') basePrice += 60;

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
        <h1 className="text-5xl font-bold mb-8 text-center text-gray-800">Get a Quote</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="location" className="block mb-2 text-gray-800 font-semibold">Location</label>
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <option>Huntington Beach</option>
              <option>Other Southern California</option>
            </select>
          </div>
          <div>
            <label htmlFor="breed" className="block mb-2 text-gray-800 font-semibold">Breed Size</label>
            <select
              id="breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div>
            <label htmlFor="age" className="block mb-2 text-gray-800 font-semibold">Age (Years)</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              required
            />
          </div>
          <div>
            <label htmlFor="weight" className="block mb-2 text-gray-800 font-semibold">Weight (lbs)</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              required
            />
          </div>
          <div>
            <label htmlFor="frequency" className="block mb-2 text-gray-800 font-semibold">Grooming Frequency</label>
            <select
              id="frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <option>Weekly</option>
              <option>Biweekly</option>
              <option>Monthly</option>
            </select>
          </div>
          <div>
            <label htmlFor="coatLength" className="block mb-2 text-gray-800 font-semibold">Desired Coat Length</label>
            <select
              id="coatLength"
              value={coatLength}
              onChange={(e) => setCoatLength(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <option>Short</option>
              <option>Medium</option>
              <option>Long</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-gray-300 text-gray-800 font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-400">
            Calculate Price
          </button>
        </form>
        {price && (
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Estimated Price: ${price}</h2>
          </div>
        )}
      </div>
    </div>
  );
}