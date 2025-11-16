import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import heroimg from '../assets/images/hero-3.png';

// 🔥 IMPORT YOUR MOBILE BACKGROUND IMAGE
import mobileBg from '../assets/icons/mob-bg1.png';

function AnimatedHeroBanner() {
  return (
    <section
      className="relative bg-black text-white min-h-[calc(100vh-80px)] flex items-center overflow-hidden py-16 px-4"

      // 🔥 ADD THIS STYLE TO SHOW BG IMAGE ONLY IN MOBILE
      style={{
        backgroundImage: `url(${mobileBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <div className="absolute inset-0 bg-black/10 z-0"></div> */}
      {/* 🔥 MEDIA QUERY: REMOVE BG IMAGE ON LARGER SCREENS */}
      <style>
        {`
          @media (min-width: 768px) {
            section {
              background-image: none !important;
            }
          }
        `}
      </style>
      {/* END 🔥 */}

      {/* Background overlay */}
      <div className="absolute inset-0 bg-pattern-light opacity-5 z-0"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 w-full">

        {/* Left side */}
        <div className="lg:w-1/2 text-left lg:text-left mb-12 lg:mb-0 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-4">
            <span className="text-yellow-400">Your Vision</span>
            <br />
            Our Brushstrokes!
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Trusted painters for
            <span className="text-green-400 font-semibold"> homes,</span> &amp;
            <span className="text-blue-400 font-semibold"> business,</span> across
            <span className="text-red-600 font-semibold"> Mumbai</span>,
            <span className="text-green-400 font-semibold"> Lonavala,</span>
            <span className="text-yellow-500 font-semibold"> Pune</span>, &amp;
            <span className="text-blue-400 font-semibold"> all over India..</span>
          </p>

          <p className="text-lg text-gray-400 max-w-lg lg:max-w-none mx-auto lg:mx-0">
            At New Bombay Painting, we redefine walls with precision and artistry.
            Whether it’s an elegant living room, a textured wall, or a full exterior revamp—our work speaks of quality that lasts.
          </p>

          <div className="mt-8">
            <button
              onClick={() => (window.location.href = "tel:+919819584682")}
              className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-all duration-300 shadow-lg inline-flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faPhone} className="text-xl text-white" />
              Call Now
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="lg:w-1/2 flex justify-end items-center relative h-64 md:h-96 w-full lg:h-auto">
          <div className="w-full max-w-lg bg-black rounded-xl shadow-2xl p-4 flex items-center justify-center border-2 border-yellow-500/50">
            <img src={heroimg} alt="" />
          </div>
        </div>
      </div>

    </section>
  );
}

export default AnimatedHeroBanner;
