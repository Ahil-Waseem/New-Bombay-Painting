import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/icons/logo.png';

function Navbar({ links=[], ctaText, aboutRef, contactRef }) {
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
            link.dropdown ? (
              <div className="relative group" key={link.name}>

                {/* Click → open /services page */}
                <Link
                  to="/services"
                  className="text-white hover:text-yellow-400 font-medium text-lg transition-colors duration-300"
                >
                  {link.name}
                </Link>

                {/* Dropdown */}
                <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-black/90 backdrop-blur-md shadow-lg rounded-md py-3 w-64 border border-gray-700 z-50">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-white hover:bg-yellow-500 hover:text-black transition-all duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : link.name === "About" ? (
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

          {/* Contact Button */}
          <button
            onClick={handleContactClick}
            className="bg-yellow-500 text-white text-lg font-bold px-6 py-3 inline-flex items-center gap-2 rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg"
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
              link.dropdown ? (
                <div key={link.name} className="w-full px-4">
                  <details className="group w-full">

                    {/* SUMMARY BUTTON */}
                    <summary className="flex items-center justify-between w-full cursor-pointer py-3 px-3 bg-black/40 border border-yellow-500 rounded-md text-white text-lg hover:bg-black/60 transition-all duration-300">
                      <span className="mx-auto">{link.name}</span>

                      {/* Arrow */}
                      <ChevronDown
                        size={20}
                        className="ml-2 transition-transform duration-300 group-open:rotate-180"
                      />
                    </summary>

                    {/* DROPDOWN ITEMS */}
                    <div className="mt-2 pl-2 pb-3 space-y-2 animate-fadeIn">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="block w-full text-center text-white py-2 rounded-md hover:bg-yellow-500 hover:text-black transition-all duration-300"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </details>
                </div>
              ) : (
                // Other links stay same
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-lg hover:text-yellow-400"
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
