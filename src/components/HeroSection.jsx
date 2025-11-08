import React from "react";
import heroImage from "../assets/images/hero1.png"; // ✅ Correct import

function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-end overflow-hidden bg-black">
      {/* Banner Image */}
      <img
        src={heroImage}
        alt="Hero Banner"
        className="w-full h-auto max-h-[100vh] object-contain bg-black"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* CTA Button */}
      <div
        className="
          absolute bottom-5 left-4 sm:bottom-8 sm:left-1/2 
          sm:transform sm:-translate-x-1/2
          z-10
        "
      >
        <button
          onClick={() => (window.location.href = "tel:+919819584682")} // ✅ Replace with your actual number
          className="
    bg-yellow-500 hover:bg-yellow-400 text-black 
    px-4 py-2 sm:px-8 sm:py-4 
    rounded-full 
    text-xs sm:text-lg font-semibold 
    transition duration-300 shadow-md
  "
        >
          📞 Get Started
        </button>

      </div>
    </section>
  );
}

export default HeroSection;
