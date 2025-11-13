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
import LegacyClients from "./components/LegacyClients";
import OurLeadership from "./components/OurLeadership";
import GallerySlider from "./components/GallerySlider";
// import Project from "./components/ProjectSlider";
import paint1 from "../src/assets/images/paint1.png";
import paint2 from "../src/assets/images/paint2.jpg";
import paint3 from "../src/assets/images/paint3.jpg";
import polish1 from "../src/assets/images/polish1.jpg";
import polish2 from "../src/assets/images/polish2.jpg";
import polish3 from "../src/assets/images/polish3.jpg";
import texture1 from "../src/assets/images/texture1.jpg";
import texture2 from "../src/assets/images/texture2.jpg";
import texture3 from "../src/assets/images/texture3.jpg";
import Hierarchy from "./components/ClientShowcase";

const paintImages = [paint1, paint2, paint3];
const polishImages = [polish1, polish2, polish3];
const textureImages = [texture1, texture2, texture3];


function Home({ aboutRef, contactRef }) {
  return (
    <>
    {/* <Slider /> */}
      <AnimatedHeroBanner />
      {/* <Project/> */}
      {/* <HeroSection /> */}
      <div ref={aboutRef}>
        <AboutUsSection />
      </div>
      <LegacyClients/>
      {/* <AnimatedCircleSection/> */}
      
      <GallerySlider 
        title="Premium Painting Services for Homes & Commercial Spaces"
        subtitle="Experience flawless, vibrant, and long-lasting painting finishes with our expert painters. We use high-quality paints and modern techniques to give your walls a fresh, durable, and beautiful look."
        images={paintImages} />
      <GallerySlider 
      title="Expert Wood & Wall Polishing – Shine That Lasts"
        subtitle="Our professional polish service enhances the natural beauty of wood and walls. From glossy wood polish to elegant matte finishes, we restore shine and protect your interiors with precision and care."
         images={polishImages} />
      <GallerySlider 
        title="Modern Wall Texture Designs for Stylish Interiors"
        subtitle="Add personality to your walls with creative texture designs. Choose from stucco, marble, metallic, or rustic finishes that transform plain walls into elegant focal points — perfect for modern homes."
         images={textureImages} />
      <ClientLogo />
      {/* <AnimatedCards /> */}
    
    <Hierarchy/>
      <FAQSection />

      <OurLeadership/>
      <Contact ref={contactRef} />
      
    </>
  );
}

function App() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
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
