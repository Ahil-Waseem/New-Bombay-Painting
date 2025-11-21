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

const paintImages = [paint1, paint2, paint3];
const polishImages = [polish1, polish2, polish3];
const textureImages = [texture1, texture2, texture3];
const laminationImages = [lamination1, lamination2, lamination3];
const popImages = [pop1, pop2, pop3];

function Home({ aboutRef, contactRef }) {
    return (
        <>
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
