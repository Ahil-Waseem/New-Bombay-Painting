import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import heroimg from "../assets/images/hero-3.png";
import mobileBg from "../assets/icons/mob-bg1.png";

function AnimatedHeroBanner() {
  return (
    <section
      className="relative bg-black text-white overflow-hidden px-4 md:px-8"
      style={{
        backgroundImage: `url(${mobileBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* remove bg image on desktop */}
      <style>
        {`
          @media (min-width: 768px) {
            section {
              background-image: none !important;
            }
          }
        `}
      </style>

      <div className="absolute inset-0 bg-pattern-light opacity-5 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10 py-10 lg:py-8">

        {/* ---------- FULL WIDTH H1 ---------- */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-10 text-left lg:text-left">
          Professional Painting & Interior Services in Mumbai & Navi Mumbai
        </h1>

        {/* ---------- CONTENT ROW ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">

            <h2 className="text-2xl md:text-3xl font-bold mb-5">
              <span className="text-yellow-400">Your Vision</span>
              <br />
              Our Brushstrokes!
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Trusted painters for
              <span className="text-green-400 font-semibold"> homes</span> &amp;
              <span className="text-blue-400 font-semibold"> businesses</span> across
              <span className="text-red-600 font-semibold"> Mumbai</span> &amp;
              <span className="text-yellow-500 font-semibold"> Navi Mumbai</span>.
            </p>

            <p className="text-lg text-gray-400 mb-8">
              If you are searching for painting services near you in Mumbai or Navi Mumbai,
              New Bombay Painting delivers reliable interior painting, exterior painting,
              wallpaper installation, texture painting and duco spray painting solutions.
              Explore our{" "}
              <a
                href="/services"
                className="text-yellow-400 underline hover:text-yellow-300 font-medium"
              >
                professional painting services
              </a>{" "}
              designed to deliver quality that lasts.
            </p>

            <button
              onClick={() => (window.location.href = "tel:+919819584682")}
              className="bg-yellow-500 text-black px-7 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-all duration-300 shadow-lg inline-flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faPhone} className="text-xl" />
              Contact Us
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl rounded-2xl border-2 border-yellow-500/40 shadow-2xl overflow-hidden">
              <img
                src={heroimg}
                alt="Professional painting services in Mumbai"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AnimatedHeroBanner;
