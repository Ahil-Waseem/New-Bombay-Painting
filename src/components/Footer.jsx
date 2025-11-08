import React from "react";
import { Phone, Home } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/icons/logo.png";

const Footer = ({ contactRef }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Scroll to Contact Section (Even from other pages)
  const handleContactClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        contactRef?.current?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      contactRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white pt-12 pb-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section */}
        <div>
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="New Bombay Painting"
              className="h-12"
            />
          </div>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Bringing colors to life with professional and high-quality painting
            services. Transforming spaces with creativity, care, and perfection.
          </p>

          <div className="flex space-x-3 mt-6">
            {/* ✅ Contact Button Scrolls to Contact.jsx */}
            <button
              onClick={() => {
                if (window.confirm("Do you want to call New Bombay Painting?")) {
                  window.location.href = "tel:+919819584682";
                }
              }}
              className="bg-yellow-500 text-black px-3 py-2 rounded-lg text-sm font-semibold flex items-center hover:bg-yellow-400 transition"
            >
              <Phone className="w-4 h-4 mr-2" /> Contact Us
            </button>

          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/about" className="hover:text-yellow-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-yellow-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-yellow-400 transition">
                Blog
              </a>
            </li>
            {/* ✅ Footer Contact scrolls to Contact.jsx */}
            <li>
              <button
                onClick={() => (window.location.href = "tel:+919819584682")}
                className="hover:text-yellow-400 transition bg-transparent border-none text-gray-300 cursor-pointer"
              >
                Contact
              </button>

            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-4 tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
            Your Home Design Is Waiting For Us
          </h3>

          {/* 🏡 7 colorful Home icons (Only 4 visible on mobile) */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {/* Always visible icons (4 on all devices) */}
            <div className="p-3 bg-yellow-500 rounded-full text-black shadow-lg shadow-yellow-400/50 hover:scale-110 transition">
              <Home size={22} className="drop-shadow-lg" />
            </div>

            <div className="p-3 bg-red-500 rounded-full text-white shadow-lg shadow-red-400/50 hover:scale-110 transition">
              <Home size={22} className="drop-shadow-lg" />
            </div>

            <div className="p-3 bg-green-500 rounded-full text-white shadow-lg shadow-green-400/50 hover:scale-110 transition">
              <Home size={22} className="drop-shadow-lg" />
            </div>

            <div className="p-3 bg-blue-500 rounded-full text-white shadow-lg shadow-blue-400/50 hover:scale-110 transition">
              <Home size={22} className="drop-shadow-lg" />
            </div>

            {/* Hidden on mobile, visible on tablet and larger */}
            <div className="hidden md:flex p-3 bg-purple-500 rounded-full text-white shadow-lg shadow-purple-400/50 hover:scale-110 transition">
              <Home size={22} className="drop-shadow-lg" />
            </div>

            <div className="hidden md:flex p-3 bg-orange-500 rounded-full text-white shadow-lg shadow-orange-400/50 hover:scale-110 transition">
              <Home size={22} className="drop-shadow-lg" />
            </div>

            <div className="hidden md:flex p-3 bg-pink-500 rounded-full text-white shadow-lg shadow-pink-400/50 hover:scale-110 transition">
              <Home size={22} className="drop-shadow-lg" />
            </div>
          </div>


          {/* 
          🕊️ Social media icons commented for later use
          <div className="flex space-x-4 mt-4">
            <a href="#" className="p-2 bg-yellow-500 rounded-full text-black hover:bg-yellow-400 transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 bg-yellow-500 rounded-full text-black hover:bg-yellow-400 transition">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 bg-yellow-500 rounded-full text-black hover:bg-yellow-400 transition">
              <Twitter size={18} />
            </a>
          </div>
          */}

          <p className="text-gray-400 text-sm mt-6">
            Get updates about our latest painting projects and offers.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} New Bombay Painting. All Rights Reserved. |
        <a
          href="/privacy-policy"
          className="text-yellow-400 hover:underline ml-1"
        >
          Privacy Policy
        </a>{" "}
        |
        <a href="/terms" className="text-yellow-400 hover:underline ml-1">
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
