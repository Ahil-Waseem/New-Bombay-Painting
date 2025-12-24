import React from "react";
import { Phone, Home } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/icons/logo.png";

/* ✅ Services Pages List */
const servicesList = [
  { name: "Interior Painting", link: "/interior-painting" },
  { name: "Exterior Painting", link: "/exterior-painting" },
  { name: "Texture Painting", link: "/texture-painting" },
  { name: "Wood Polish", link: "/wood-polish" },
  { name: "Lamination", link: "/lamination" },
  { name: "Wallpaper", link: "/wallpaper" },
  { name: "POP False Ceiling", link: "/pop-false-ceiling" },
  { name: "Home Renovation", link: "/home-renovation" },
];

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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* ---------------- LEFT SECTION ---------------- */}
        <div>
          <div className="flex items-center space-x-3">
            <img src={logo} alt="New Bombay Painting" className="h-12" />
          </div>

          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Bringing colors to life with professional and high-quality painting
            services. Transforming spaces with creativity, care, and perfection.
          </p>

          <div className="flex space-x-3 mt-6">
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

        {/* ---------------- SUPPORT SECTION ---------------- */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">
            Support
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/services" className="hover:text-yellow-400 transition">
                Services
              </a>
            </li>
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

        {/* ---------------- SERVICES SECTION (NEW) ---------------- */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">
            Services
          </h3>

          <ul className="space-y-2 text-gray-300">
            {servicesList.map((service, index) => (
              <li key={index}>
                <a
                  href={service.link}
                  className="hover:text-yellow-400 transition"
                >
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------------- RIGHT SECTION ---------------- */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-4 tracking-wide">
            Your Home Design Is Waiting For Us
          </h3>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <div className="p-3 bg-yellow-500 rounded-full text-black shadow-lg hover:scale-110 transition">
              <Home size={22} />
            </div>
            <div className="p-3 bg-red-500 rounded-full text-white shadow-lg hover:scale-110 transition">
              <Home size={22} />
            </div>
            <div className="p-3 bg-green-500 rounded-full text-white shadow-lg hover:scale-110 transition">
              <Home size={22} />
            </div>
            <div className="p-3 bg-blue-500 rounded-full text-white shadow-lg hover:scale-110 transition">
              <Home size={22} />
            </div>

            <div className="hidden md:flex p-3 bg-purple-500 rounded-full text-white shadow-lg hover:scale-110 transition">
              <Home size={22} />
            </div>
            <div className="hidden md:flex p-3 bg-orange-500 rounded-full text-white shadow-lg hover:scale-110 transition">
              <Home size={22} />
            </div>
            <div className="hidden md:flex p-3 bg-pink-500 rounded-full text-white shadow-lg hover:scale-110 transition">
              <Home size={22} />
            </div>
          </div>

          <p className="text-gray-400 text-sm mt-6">
            Get updates about our latest painting projects and offers.
          </p>
        </div>
      </div>

      {/* ---------------- FOOTER BOTTOM ---------------- */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} New Bombay Painting. All Rights Reserved. |
        <a href="/privacy-policy" className="text-yellow-400 hover:underline ml-1">
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
