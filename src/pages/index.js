import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/global.css';
import vanImage from '../images/logo.png'; // Add your van sketch here

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <header className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 py-20 px-6 text-center relative">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">One Love Mobile Grooming</h1>
        <p className="text-xl md:text-2xl mb-8">Cutting-edge grooming at your doorstep</p>
        <a href="/services" className="inline-block silver-accent text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-400">
          Explore Our Services
        </a>
        <div className="absolute bottom-30 right-20 opacity-15">
          <img src={vanImage} alt="Mobile Van" className="w -40" />
        </div>
      </header>
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">Mobile Luxury Grooming</h2>
        <p className="text-lg">Our Signature Spa Experience

Indulge your cherished companion with an unparalleled grooming ritual, meticulously crafted to pamper and rejuvenate. Each bath is a bespoke affair, featuring:

    Hydra Luxe Bath: A coat-specific infusion of Hydra’s exquisite shampoo and conditioner, a premium formulation designed exclusively for discerning dogs and cats, leaving their fur irresistibly soft, lustrous, and radiant.
    Precision Nail Care: Expert trimming and gentle buffing to ensure flawless paws, executed with the utmost finesse.
    Paw & Nose Elegance: A lavish application of velvety paw butter and soothing nose cream, delivering hydration and comfort worthy of royalty.
    Ear & Eye Serenity: Delicate ear cleaning and a refreshing eye flush, performed with precision to enhance clarity and well-being.
    Enzymatic Dental Brilliance: A sophisticated teeth-cleaning process using enzymatic technology, promoting a sparkling smile and impeccable oral health.
    Opulent Blowout: A masterful fluff and finish, transforming their coat into a masterpiece of volume and sheen.
    Seasonal Fragrance Finale: The perfect touch—a spritz of our exclusive seasonal perfume or cologne, enveloping your pet in a subtle, elegant scent that lingers delightfully.

All of this unfolds in a cage-free sanctuary, where your pet enjoys undivided, one-on-one attention from our skilled artisans. At One Love, we don’t merely groom—we curate an experience of pure luxury and grace, tailored to the most refined tastes..</p>
      </section>

      <section className="py-16 px-6 bg-gray-100 text-center">
  <h2 className="text-4xl font-semibold mb-6">Book Your Appointment</h2>
  <p className="text-lg text-gray-800">Booking system coming soon!</p>
</section>
    </div>
  );
}