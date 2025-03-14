import React from "react";
import Navbar from "../components/Navbar";
import Review from "../components/Review";
import "../styles/global.css";
import logoImage from "../images/Max.jpg";
import backgroundImage from "../images/logo.png"; // Background image

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-pastel-lavender text-white overflow-y-auto">
      {/* Translucent Background Image for the Entire Page */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Logo Background"
          className="w-full h-full object-contain opacity-15 bg-no-repeat"
          style={{
            backgroundSize: "50%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        />
      </div>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-pastel-lavender/70 z-10"></div>
      <div className="relative z-20">
        <Navbar />
        <header className="bg-transparent py-8 px-6 text-center border-2 border-white/20 rounded-b-lg">
          <div className="flex justify-center items-center flex-col">
            <h1
              className="text-4xl sm:text-6xl md:text-8xl font-cursive mb-1 text-center transform hover:scale-105 transition duration-300 hover-glow text-gray-900"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
            >
              One<u>L</u>ove
            </h1>
            <h2 className="text-2xl sm:text-2xl md:text-3xl mb-2 font-light text-gray-900">
              Mobile Grooming
            </h2>
            <p className="text-lg sm:text-lg md:text-xl mb-2 text-gray-700">
              Cutting-edge grooming at your doorstep
            </p>
            {/* Wrapper for Image and Button */}
            <div className="relative">
              <img
                src={logoImage}
                alt="Logo"
                className="w-64 sm:w-96 md:w-[32rem] mx-auto my-1 rounded-lg shadow-md"
              />
              <a
                href="/services"
                className="absolute bottom-[25%] left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 text-black font-semibold py-1 px-2 rounded-full shadow-lg hover:bg-gray-200 hover-glow transition text-xs" // Reduced size further
              >
                <strong>Explore Our Services</strong>
              </a>
            </div>
          </div>
        </header>
        {/* Decorative Clip (Paw Print) */}
        <div className="text-center my-2">
          <svg
            className="w-12 h-12 mx-auto text-pastel-lavender"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 14v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
        </div>
        <Review />
        <section className="bg-transparent py-8 px-6 text-pastel-lavender text-center border-2 border-white/20 rounded-lg">
          <h2 className="text-4xl font-semibold mb-4">
            <u>Book Your Appointment</u>
          </h2>
          <p className="text-lg italic">Booking system coming soon!</p>
        </section>
      </div>
    </div>
  );
}