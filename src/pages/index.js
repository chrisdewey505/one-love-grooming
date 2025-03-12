import React from "react";
import Navbar from "../components/Navbar";
import "../styles/global.css";
import vanImage from "../images/logo.png"; // Ensure this points to your van sketch or logo

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <header className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 py-20 px-6 text-center relative">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <u>One Love Mobile Grooming</u>
        </h1>
        <p className="text-xl md:text-2xl mb-8 italic">Cutting-edge grooming at your doorstep</p>
        <a
          href="/services"
          className="inline-block bg-gray-400 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-500"
        >
          <strong>Explore Our Services</strong>
        </a>
        <div className="absolute bottom-10 right-20 opacity-15">
          <img src={vanImage} alt="Mobile Van" className="w-40" />
        </div>
      </header>
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">
          <u>Mobile Luxury Grooming</u>
        </h2>
        <h3 className="text-2xl font-bold mb-4">
          <strong>Our Signature Spa Experience</strong>
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Indulge your cherished companion with an unparalleled grooming ritual, meticulously
          crafted to pamper and rejuvenate. Each bath is a bespoke affair, featuring:
        </p>
        <ul className="text-lg text-gray-700 list-disc list-inside mb-4 space-y-4">
          <li>
            <strong>
              <u>Hydra Luxe Bath</u>
            </strong>
            : A coat-specific infusion of Hydra’s exquisite shampoo and conditioner, a premium
            formulation designed exclusively for discerning dogs and cats, leaving their fur
            irresistibly soft, lustrous, and radiant.
          </li>
          <li>
            <strong>
              <u>Precision Nail Care</u>
            </strong>
            : Expert trimming and gentle buffing to ensure flawless paws, executed with the utmost
            finesse.
          </li>
          <li>
            <strong>
              <u>Paw & Nose Elegance</u>
            </strong>
            : A lavish application of velvety paw butter and soothing nose cream, delivering
            hydration and comfort worthy of royalty.
          </li>
          <li>
            <strong>
              <u>Ear & Eye Serenity</u>
            </strong>
            : Delicate ear cleaning and a refreshing eye flush, performed with precision to enhance
            clarity and well-being.
          </li>
          <li>
            <strong>
              <u>Enzymatic Dental Brilliance</u>
            </strong>
            : A sophisticated teeth-cleaning process using enzymatic technology, promoting a
            sparkling smile and impeccable oral health.
          </li>
          <li>
            <strong>
              <u>Opulent Blowout</u>
            </strong>
            : A masterful fluff and finish, transforming their coat into a masterpiece of volume
            and sheen.
          </li>
          <li>
            <strong>
              <u>Seasonal Fragrance Finale</u>
            </strong>
            : The perfect touch—a spritz of our exclusive seasonal perfume or cologne, enveloping
            your pet in a subtle, elegant scent that lingers delightfully.
          </li>
        </ul>
        <p className="text-lg text-gray-700">
          All of this unfolds in a cage-free sanctuary, where your pet enjoys undivided, one-on-one
          attention from our skilled artisans. At One Love, we don’t merely groom—we curate an
          experience of pure luxury and grace, tailored to the most refined tastes.
        </p>
      </section>
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-4xl font-semibold mb-6">
          <u>Book Your Appointment</u>
        </h2>
        <p className="text-lg text-gray-800 italic">Booking system coming soon!</p>
      </section>
    </div>
  );
}