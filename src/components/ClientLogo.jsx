import React from 'react';
import { Briefcase } from 'lucide-react';
import BramhaRealty from '../assets/images/BramhaRealty.webp';
import jsk from '../assets/images/jsk.jpg';
import lodha from '../assets/images/lodha.webp';

// HouseLogo component (increased width)
const HouseLogo = ({ color, logo, logoName }) => (
  <div className="flex-shrink-0 w-72 sm:w-64 p-4 m-4 flex flex-col items-center justify-center">
    {/* House Container */}
    <div
      className={`
        relative w-full h-64 shadow-xl shadow-black/50 
        ${color} bg-opacity-95 
        transition-all duration-500 transform 
        hover:scale-[1.03] hover:shadow-yellow-400/50 
        rounded-lg pt-8 flex items-center justify-center
      `}
    >
      {/* Roof */}
      <div
        className={`absolute -top-12 left-0 right-0 h-20 ${color}`}
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
      ></div>

      {/* Window */}
      <div
        className="
          absolute w-52 h-36 bg-white/20 backdrop-blur-sm 
          rounded-md flex items-center justify-center 
          border border-white/30 p-3
        "
      >
        {logo ? (
          <img src={logo} alt={logoName} className="w-44 h-32 object-contain" />
        ) : (
          <Briefcase className="w-10 h-10 text-white opacity-80" strokeWidth={3.5} />
        )}
      </div>
    </div>

    {/* Client Name */}
    <span className="mt-4 text-white text-base font-semibold uppercase tracking-wide">
      {logoName}
    </span>
  </div>
);

function ClientLogo() {
  const clients = [
    { name: 'Lodha Group', color: 'bg-indigo-600', logo: lodha },
    { name: 'JSK', color: 'bg-yellow-600', logo: jsk },
    { name: 'Brahma Realty', color: 'bg-teal-600', logo: BramhaRealty },
  ];

  return (
    <section className="pt-12 pb-12 bg-black py-0 text-center">
      {/* Section Title */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <p className="text-lg tracking-widest uppercase text-yellow-500 mb-2">
          Trusted By The Best
        </p>
        <h3 className="text-3xl sm:text-5xl font-extrabold text-white">
          Our Recent Clients
        </h3>
      </div>

      {/* Centered Logo Grid */}
      <div className="flex flex-wrap justify-center items-center gap-8">
        {clients.map((client, index) => (
          <HouseLogo
            key={index}
            color={client.color}
            logo={client.logo}
            logoName={client.name}
          />
        ))}
      </div>

      {/* Button */}
      {/* <div className="mt-12">
        <button className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition duration-300 shadow-md">
          VIEW CASE STUDIES
        </button>
      </div> */}
    </section>
  );
}

export default ClientLogo;
