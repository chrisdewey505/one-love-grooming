import React from "react";
import logoImage from "../images/logo4.png"; // Adjust path to your logo; use as a placeholder
import instagramIcon from "../images/instagram.png"; // Instagram icon
import yelpIcon from "../images/yelp.png"; // Yelp icon

export default function Navbar() {
  return (
    <nav className="bg-pastel-lavender max-w-xl mx-auto flex items-center justify-between py-4 px-4 shadow-lg border-b-2 border-white/20 rounded-b-lg">
      <a href="/" className="flex items-center space-x-2 mr-2 sm:mr-8">
        <img src={logoImage} alt="One Love Logo" className="h-8 w-auto" />
        <h1
          className="text-2xl sm:text-3xl font-cursive text-gray-900 hover:text-black transition-colors"
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)" }}
        >
          One<u>L</u>ove
        </h1>
      </a>
      <div className="flex items-center space-x-2 sm:space-x-6">
        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/onelovegrooming/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-pastel-lavender transition-colors"
        >
          <img src={instagramIcon} alt="Instagram" className="w-10 h-7" />
        </a>
        {/* Yelp Icon */}
        <a
          href="https://www.yelp.com/biz/one-love-mobile-grooming-huntington-beach?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-pastel-lavender transition-colors mr-1"
        >
          <img src={yelpIcon} alt="Yelp" className="w-28 h-12" />
        </a>
        <a
          href="/services"
          className="text-xs sm:text-base text-gray-900 hover:text-pastel-lavender transition-colors"
        >
          Services
        </a>
        <a
          href="/about"
          className="text-xs sm:text-base text-gray-900 hover:text-pastel-lavender transition-colors"
        >
          About
        </a>
        <a
          href="/contact"
          className="text-xs sm:text-base text-gray-900 hover:text-pastel-lavender transition-colors"
        >
          Contact
        </a>
        <a
          href="/quote"
          className="text-xs sm:text-base text-gray-900 hover:text-pastel-lavender transition-colors"
        >
          Quote
        </a>
      </div>
    </nav>
  );
}