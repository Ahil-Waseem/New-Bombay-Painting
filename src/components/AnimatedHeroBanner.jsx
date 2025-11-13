import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// You might want to add some animation libraries later, e.g., framer-motion
// import { motion } from 'framer-motion';
import heroimg from '../assets/images/hero-3.png';

function AnimatedHeroBanner() {
  return (
    <section className="relative bg-black text-white min-h-[calc(100vh-80px)] flex items-center overflow-hidden py-16 px-4">
      {/* Background overlay for subtle effect */}
      <div className="absolute inset-0 bg-pattern-light opacity-5 z-0"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 w-full">
        {/* Left Side: Animated Text Content */}
        <div className="lg:w-1/2 text-left lg:text-left mb-12 lg:mb-0 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-4">
            <span className="text-yellow-400">Your Vision</span>
            <br />
            Our Brushstrokes!
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Trusted painters for<span className="text-green-400 font-semibold"> homes,</span> &amp; <span className="text-blue-400 font-semibold">business,</span> and commercial spaces across
            <span className="text-red-600 font-semibold"> Mumbai</span>,
            <span className="text-green-400 font-semibold"> Lonavala,</span>
            <span className="text-yellow-500 font-semibold"> Pune</span>, and 
            &amp;
            <span className="text-blue-400 font-semibold"> all over India..
              </span>
          </p>
          <p className="text-lg text-gray-400 max-w-lg lg:max-w-none mx-auto lg:mx-0">
            At New Bombay Painting, we redefine walls with precision and artistry.
            Whether it’s an elegant living room, a textured wall, or a full exterior revamp-our work speaks of quality that lasts and beauty that inspires.
          </p>
          <div className="mt-8">
            <button
              onClick={() => (window.location.href = "tel:+919819584682")}
              className="
        bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-all duration-300 shadow-lg inline-flex items-center gap-2
      "
            >
              <FontAwesomeIcon icon={faPhone} className="text-xl text-white" />
              Get Started
            </button>

          </div>
        </div>

        {/* Right Side: 3D Animated Bangalow Image */}
        <div className="lg:w-1/2 flex justify-end items-center relative h-64 md:h-96 w-full lg:h-auto">
          {/* This is where your generated image will go! */}
          <div className="w-full max-w-lg bg-black rounded-xl shadow-2xl p-4 flex  items-center justify-center border-2 border-yellow-500/50">
            <p className="text-gray-400 text-center">
              {/* Your 3D Animated Bangalow Image will appear here. */}
              <img src={heroimg} alt="" />
            </p>
          </div>
        </div>
      </div>


  
    </section>
  );
}

export default AnimatedHeroBanner;