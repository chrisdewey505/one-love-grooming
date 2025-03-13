import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/global.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: "",
    weight: "",
    address: "",
    services: "",
    availability: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, breed, age, weight, address, services, availability } = formData;
    const message = `
      New Contact Form Submission:
      Name: ${name}
      Breed: ${breed}
      Age: ${age}
      Estimated Weight: ${weight}
      Address (Local Main Cross Streets): ${address}
      Services Requested: ${services}
      Best Times of Availability: ${availability}
    `.trim();

    // Use mailto to send the message to the T-Mobile SMS gateway
    const smsEmail = "5097680499@tmomail.net"; // T-Mobile SMS gateway
    window.location.href = `mailto:${smsEmail}?subject=Contact%20Form%20Submission&body=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-pastel-lavender text-white overflow-y-auto">
      <Navbar />
      <div className="py-8 px-4 sm:px-6 max-w-md mx-auto text-pastel-lavender">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-900">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-gray-900 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-lavender text-gray-900 bg-white"
              required
            />
          </div>
          <div>
            <label htmlFor="breed" className="block mb-2 text-gray-900 font-semibold">
              Breed
            </label>
            <input
              type="text"
              id="breed"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-lavender text-gray-900 bg-white"
              required
            />
          </div>
          <div>
            <label htmlFor="age" className="block mb-2 text-gray-900 font-semibold">
              Age (Years)
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-lavender text-gray-900 bg-white"
              required
            />
          </div>
          <div>
            <label htmlFor="weight" className="block mb-2 text-gray-900 font-semibold">
              Estimated Weight (lbs)
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-lavender text-gray-900 bg-white"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block mb-2 text-gray-900 font-semibold">
              Address (Local Main Cross Streets)
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-lavender text-gray-900 bg-white"
              required
            />
          </div>
          <div>
            <label htmlFor="services" className="block mb-2 text-gray-900 font-semibold">
              Services Requested
            </label>
            <textarea
              id="services"
              name="services"
              value={formData.services}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-lavender text-gray-900 bg-white"
              rows="3"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="availability" className="block mb-2 text-gray-900 font-semibold">
              Best Times of Availability (8 AM - 3 PM, Monday-Sunday)
            </label>
            <input
              type="text"
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-lavender text-gray-900 bg-white"
              placeholder="e.g., Monday 10 AM - 12 PM"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pastel-lavender text-gray-900 font-semibold py-2 sm:py-3 px-4 rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}