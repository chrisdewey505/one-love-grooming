import React from "react";
import Navbar from "../components/Navbar";
import "../styles/global.css";
import frenchieImage from "../images/Frenchie.jpg";

export default function Services() {
  return (
    <div className="relative min-h-screen flex flex-col bg-pastel-lavender text-white overflow-y-auto">
      {/* Translucent Background Image for the Entire Page */}
      <div className="absolute inset-0 z-0">
        <img
          src={frenchieImage}
          alt="Frenchie Beach Background"
          className="w-full h-full object-contain opacity-01 bg-no-repeat"
        />
      </div>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-pastel-lavender/70 z-10"></div>
      <div className="relative z-20">
        <Navbar />
        <section className="py-12 px-6 max-w-4xl mx-auto text-pastel-lavender border-2 border-white/20 rounded-lg">
          <h2 className="text-4xl font-semibold mb-4 text-center text-gray-900">
            <u>Mobile Luxury Grooming</u>
          </h2>
          <h3 className="text-2xl font-bold mb-2 text-center text-gray-900">
            <strong>Our Signature Spa Experience</strong>
          </h3>
          {/* Contact Button */}
          <div className="text-center my-4">
            <a
              href="/contact"
              className="inline-block bg-white bg-opacity-80 text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 hover-glow transition"
            >
              <strong>Contact Us</strong>
            </a>
          </div>
          <p className="text-lg mb-4 text-center text-gray-800">
            Indulge your cherished companion with an unparalleled grooming ritual, meticulously
            crafted to pamper and rejuvenate. Each bath is a bespoke affair, featuring:
          </p>
          <ul className="text-lg list-disc list-inside mb-4 space-y-4 text-center mx-auto max-w-2xl border-2 border-dashed border-white rounded-lg p-4 bg-white/10 text-gray-800">
            <li>
              <strong>
                <u>Hydra Luxe Bath</u>
              </strong>
              : A coat-specific infusion of Hydra’s exquisite shampoo and conditioner, leaving fur
              soft, lustrous, and radiant.
            </li>
            <li>
              <strong>
                <u>Precision Nail Care</u>
              </strong>
              : Expert trimming and buffing for flawless paws with finesse.
            </li>
            <li>
              <strong>
                <u>Paw & Nose Elegance</u>
              </strong>
              : Lavish paw butter and soothing nose cream for royal comfort.
            </li>
            <li>
              <strong>
                <u>Ear & Eye Serenity</u>
              </strong>
              : Delicate ear cleaning and eye flush for enhanced clarity.
            </li>
            <li>
              <strong>
                <u>Enzymatic Dental Brilliance</u>
              </strong>
              : Sophisticated teeth-cleaning with enzymatic technology.
            </li>
            <li>
              <strong>
                <u>Opulent Blowout</u>
              </strong>
              : A masterful fluff and finish for a voluminous coat.
            </li>
            <li>
              <strong>
                <u>Seasonal Fragrance Finale</u>
              </strong>
              : A spritz of seasonal perfume or cologne for an elegant scent.
            </li>
          </ul>
          <p className="text-lg text-center text-gray-800">
            All of this unfolds in a cage-free Spa with one-on-one attention from our artisans.
            At One Love, we curate an experience of pure luxury and grace.
          </p>
        </section>
      </div>
    </div>
  );
}