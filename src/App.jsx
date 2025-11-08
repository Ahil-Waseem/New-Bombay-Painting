import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedHeroBanner from "./components/AnimatedHeroBanner";
// import HeroSection from "./components/HeroSection";
import AboutUsSection from "./components/AboutUsSection";
import ClientLogo from "./components/ClientLogo";
// import AnimatedCards from "./components/AnimatedCards";
import FAQSection from "./components/FAQSection";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./components/Contact";
import Terms from "./pages/Terms";
import ScrollToTop from "./components/ScrollToTop";

function Home({ aboutRef, contactRef }) {
  return (
    <>
      <AnimatedHeroBanner />
      {/* <HeroSection /> */}
      <div ref={aboutRef}>
        <AboutUsSection />
      </div>
      <ClientLogo />
      {/* <AnimatedCards /> */}
      <FAQSection />
      <Contact ref={contactRef} />
    </>
  );
}

function App() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  return (
    <Router>
      <ScrollToTop/>
      <Navbar
        links={navLinks}
        ctaText="Contact"
        aboutRef={aboutRef}
        contactRef={contactRef}
      />

      <Routes>
        <Route
          path="/"
          element={<Home aboutRef={aboutRef} contactRef={contactRef} />}
        />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
