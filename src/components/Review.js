import React from "react";
import yelpIcon from "../images/yelp.png"; // Yelp icon

export default function Review() {
  return (
    <section className="py-12 px-6 max-w-4xl mx-auto text-pastel-lavender">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-900 mb-4">
        <u>Customer Reviews</u>
      </h2>
      {/* Yelp Icon Centered Under Header */}
      <div className="flex justify-center mb-4">
        <a
          href="https://www.yelp.com/biz/one-love-mobile-grooming-huntington-beach?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-pastel-lavender transition-colors"
        >
          <img src={yelpIcon} alt="Yelp" className="w-120 h-120" />
        </a>
      </div>
      <div className="space-y-4">
        <blockquote className="text-base sm:text-lg text-center text-gray-800 italic">
          "Amazing service! My dog has never looked better!" — Jane D.
        </blockquote>
        <blockquote className="text-base sm:text-lg text-center text-gray-800 italic">
          "The best grooming experience for my pup!" — Sarah M.
        </blockquote>
      </div>
    </section>
  );
}