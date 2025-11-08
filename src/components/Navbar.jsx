import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/icons/logo.png';

function Navbar({ links, ctaText, aboutRef, contactRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Scroll to About Section
  const handleAboutClick = () => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✅ Scroll to Contact Section
  const handleContactClick = () => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full bg-black sticky top-0 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 xl:px-0 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="w-[150px] sm:w-[180px] md:w-[220px] h-auto object-cover"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) =>
            link.name === "About" ? (
              <button
                key={link.name}
                onClick={handleAboutClick}
                className={`text-white hover:text-yellow-400 font-medium text-lg transition-colors duration-300 ${location.pathname === "/" ? "text-yellow-400" : ""
                  }`}
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`text-white hover:text-yellow-400 font-medium text-lg transition-colors duration-300 ${location.pathname === link.path ? "text-yellow-400" : ""
                  }`}
              >
                {link.name}
              </Link>
            )
          )}

          {/* ✅ Contact Button — Smooth Scroll */}
          <button
            onClick={handleContactClick}
            className="bg-yellow-500 text-white text-lg font-bold px-6 py-3 inline-flex items-center gap-2 rounded-lg whitespace-nowrap hover:bg-yellow-400 transition-all duration-300 shadow-lg"
          >
            <FontAwesomeIcon icon={faPhone} className="text-xl text-white" />
            {ctaText}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black shadow-md border-t border-gray-800">
          <div className="flex flex-col items-center space-y-4 py-4">
            {links.map((link) =>
              link.name === "About" ? (
                <button
                  key={link.name}
                  onClick={handleAboutClick}
                  className={`text-white font-medium text-lg hover:text-yellow-400 ${location.pathname === "/" ? "text-yellow-400" : ""
                    }`}
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-white font-medium text-lg hover:text-yellow-400 ${location.pathname === link.path ? "text-yellow-400" : ""
                    }`}
                >
                  {link.name}
                </Link>
              )
            )}

            {/* ✅ Mobile Contact Button */}
            <button
              onClick={handleContactClick}
              className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-all duration-300 shadow-lg inline-flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faPhone} className="text-xl text-white" />
              {ctaText}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
