import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/global.css";

export default function Quote() {
  const [location, setLocation] = useState("Huntington Beach");
  const [breed, setBreed] = useState("Small");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [frequency, setFrequency] = useState("Monthly");
  const [coatLength, setCoatLength] = useState("Short");
  const [price, setPrice] = useState(null);

  const calculatePrice = () => {
    let basePrice = 120; // Base price for a small dog in Huntington Beach

    // Adjust for location
    if (location !== "Huntington Beach") basePrice += 25;

    // Adjust for breed size
    if (breed === "Small") basePrice -= 10;
    if (breed === "Medium") basePrice -= 0;
    if (breed === "Large") basePrice += 35;

    // Adjust for age (older pets may need extra care)
    if (age >= 10) basePrice += 25;

    // Adjust for weight
    if (weight > 30) basePrice += 30;
    if (weight > 50) basePrice += 60;
    if (weight > 65) basePrice += 90;

    // Adjust for frequency
    if (frequency === "Weekly") basePrice -= 30;
    else if (frequency === "Biweekly") basePrice -= 20;

    // Adjust for coat length
    if (coatLength === "Short") basePrice -= 20;
    if (coatLength === "Medium") basePrice += 30;
    if (coatLength === "Long") basePrice += 60;

    setPrice(basePrice);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculatePrice();
  };

  return (
    <div className="min-h-screen flex flex-col bg-pastel-lavender text-white overflow-y-auto">
      <Navbar />
      <div className="py-8 px-4 sm:px-6 max-w-md mx-auto text-pastel-lavender">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-gray-900">Get Quote</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="location" className="block mb-2 text-gray-900 font-semibold">
              Location
            </label>
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-lavender text-gray-900 bg-white"
            >
              <option>Huntington Beach</option>
              <option>Other Southern California</option>
            </select>
          </div>
          <div>
            <label htmlFor="breed" className="block mb-2 text-gray-900 font-semibold">
              Breed Size
            </label>
            <select
              id="breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-lavender text-gray-900 bg-white"
            >
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div>
            <label htmlFor="age" className="block mb-2 text-gray-900 font-semibold">
              Age (Years)
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-lavender text-gray-900 bg-white"
              required
            />
          </div>
          <div>
            <label htmlFor="weight" className="block mb-2 text-gray-900 font-semibold">
              Weight (lbs)
            </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-lavender text-gray-900 bg-white"
              required
            />
          </div>
          <div>
            <label htmlFor="frequency" className="block mb-2 text-gray-900 font-semibold">
              Frequency
            </label>
            <select
              id="frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-lavender text-gray-900 bg-white"
            >
              <option>Weekly</option>
              <option>Biweekly</option>
              <option>Monthly</option>
            </select>
          </div>
          <div>
            <label htmlFor="coatLength" className="block mb-2 text-gray-900 font-semibold">
              Coat Length
            </label>
            <select
              id="coatLength"
              value={coatLength}
              onChange={(e) => setCoatLength(e.target.value)}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-lavender text-gray-900 bg-white"
            >
              <option>Short</option>
              <option>Medium</option>
              <option>Long</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-pastel-lavender text-gray-900 font-semibold py-2 sm:py-3 px-4 rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            Calculate
          </button>
        </form>
        {price && (
          <div className="mt-4 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Price: ${price}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}