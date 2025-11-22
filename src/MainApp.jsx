import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import BlogsDetails from "./pages/BlogsDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

import PopupVideo from "./components/PopupVideo";
import PopupImages from "./components/PopupImages";
import WhatsappButton from "./components/Whatsaap";

function MainApp() {
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const location = useLocation();

    const [showVideoPopup, setShowVideoPopup] = useState(false);
    const [showImagePopup, setShowImagePopup] = useState(false);
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Projects", path: "/projects" },
        { name: "Blog", path: "/blog" },
        { name: "About", path: "/about" },
    ];


    useEffect(() => {
        if (location.pathname === "/") {
            const startTimer = setTimeout(() => {
                setShowVideoPopup(true);

                const videoTimer = setTimeout(() => {
                    setShowVideoPopup(false);

                    const imageTimer = setTimeout(() => {
                        setShowImagePopup(true);
                    }, 5000);

                    return () => clearTimeout(imageTimer);
                }, 15000);

                return () => clearTimeout(videoTimer);
            }, 5000);

            return () => clearTimeout(startTimer);
        } else {
            setShowVideoPopup(false);
            setShowImagePopup(false);
        }
    }, [location.pathname]);

    return (
        <>
            <ScrollToTop />
            <Navbar
                links={navLinks}
                ctaText="Contact Us"
                aboutRef={aboutRef}
                contactRef={contactRef}
            />


            <Routes>
                <Route path="/" element={<Home aboutRef={aboutRef} contactRef={contactRef} />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogsDetails />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
            </Routes>

            <PopupVideo show={showVideoPopup} onClose={() => {
                setShowVideoPopup(false);
                setShowImagePopup(true);
            }} />

            <PopupImages show={showImagePopup} onClose={() => setShowImagePopup(false)} />
<WhatsappButton/>
            <Footer />
        </>
    );
}

export default MainApp;
