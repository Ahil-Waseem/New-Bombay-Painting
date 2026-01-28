import AnimatedHeroBanner from "../components/AnimatedHeroBanner";
import AboutUsSection from "../components/AboutUsSection";
import LegacyClients from "../components/LegacyClients";
import GallerySlider from "../components/GallerySlider";
import ClientLogo from "../components/ClientLogo";
import Hierarchy from "../components/ClientShowcase";
import ServicesCTA from "../components/ServicesCTA";
import FAQSection from "../components/FAQSection";
import OurLeadership from "../components/OurLeadership";
import Contact from "../components/Contact";
import HeroVideo from "../components/HeroVideo";
import homeHeroVideo from "../assets/videos/homevideo.mp4"; 

import paint1 from "../assets/images/paint1.png";
import paint2 from "../assets/images/paint2.jpg";
import paint3 from "../assets/images/paint3.jpg";

import polish1 from "../assets/images/polish1.jpg";
import polish2 from "../assets/images/polish2.jpg";
import polish3 from "../assets/images/polish3.jpg";

import texture1 from "../assets/images/texture1.jpg";
import texture2 from "../assets/images/texture2.jpg";
import texture3 from "../assets/images/texture3.jpg";

import lamination1 from "../assets/images/lamination1.png";
import lamination2 from "../assets/images/lamination2.png";
import lamination3 from "../assets/images/lamination3.png";

import pop1 from "../assets/images/pop1.png";
import pop2 from "../assets/images/pop2.png";
import pop3 from "../assets/images/pop3.png";

/* ===== Images with ALT text ===== */

const paintImages = [
  { src: paint1,
    alt: "Luxury interior wall painting service in Mumbai",
    link: "/interior-painting" },
  { src: paint2,
    alt: "Professional home painting contractor at work",
    link: "/interior-painting" },
  { src: paint3,
    alt: "Premium exterior painting for residential buildings",
link: "/interior-painting" },
];

const polishImages = [
  { src: polish1,
    alt: "PU polish service for wooden furniture in Mumbai",
link: "/wood-polish"  },
  { src: polish2,
    alt: "Melamine polish work for doors and cabinets",
link: "/wood-polish"  },
  { src: polish3,
    alt: "High gloss wood polishing service by professionals",
link: "/wood-polish"  },
];

const textureImages = [
  { src: texture1,
    alt: "Modern wall texture design for living room",
link: "/texture-painting"  },
  { src: texture2,
    alt: "Luxury textured wall painting for interiors",
link: "/texture-painting"  },
  { src: texture3,
    alt: "Creative wall texture work in Mumbai homes",
link: "/texture-painting"  },
];

const laminationImages = [
  { src: lamination1,
    alt: "Premium wall lamination work for luxury interiors",
link: "/lamination"  },
  { src: lamination2,
    alt: "Glossy and matte wall lamination design",
link: "/lamination"  },
  { src: lamination3,
    alt: "Modern interior lamination finishing service",
link: "/lamination"  },
];

const popImages = [
  { src: pop1,
    alt: "POP false ceiling design for modern homes",
link: "/wallpaper"  },
  { src: pop2, 
    alt: "Decorative POP wall design work in Mumbai",
link: "/wallpaper"  },
  { src: pop3,
    alt: "Luxury POP ceiling with LED lighting design",
link: "/wallpaper"  },
];

function Home({ aboutRef, contactRef }) {
  return (
    <>
    <HeroVideo
  videoSrc={homeHeroVideo}
  heading="New Bombay Painting"
  subText="Premium Interior, Exterior, Texture & Polish Services"
  btnText="Get Free Quote"
  btnLink="#contact"
/>

      <AnimatedHeroBanner />

      <div ref={aboutRef}>
        <AboutUsSection />
      </div>

      <LegacyClients />

      <GallerySlider
        title="Premium Painting Services for Homes & Commercial Spaces"
        subtitle="Experience flawless, vibrant and long-lasting finishes."
        images={paintImages}
      />

      <GallerySlider
        title="Expert Wood & Wall Polishing"
        subtitle="Enhance natural beauty of wood & walls."
        images={polishImages}
      />

      <GallerySlider
        title="Modern Wall Texture Designs"
        subtitle="Creative texture designs for stylish interiors."
        images={textureImages}
      />

      <GallerySlider
        title="Premium Lamination Work"
        subtitle="Luxury matte, glossy & textured laminations."
        images={laminationImages}
      />

      <GallerySlider
        title="POP False Ceiling & Wall Design"
        subtitle="Modern POP work with elegant finishes."
        images={popImages}
      />

      <ClientLogo />
      <Hierarchy />
      <ServicesCTA />
      <FAQSection />
      <OurLeadership />

      <Contact ref={contactRef} />
    </>
  );
}

export default Home;
