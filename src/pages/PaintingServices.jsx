import React from "react";
import { Helmet } from "react-helmet";

// banner placeholders (baad me image add karna)
import bannerDesktop from "../assets/images/painting-services-banner-lg.jpg";
// import bannerMobile from "../assets/images/painting-services-banner-sm.webp";
import ctaBg from "../assets/images/cta-bg-image.png";
const PaintingServices = () => {
  return (
    <>
      <Helmet>
        <title>
          Painting Services in Mumbai & Navi Mumbai | New Bombay Painting
        </title>
        <meta
          name="description"
          content="Explore complete house painting services in Mumbai & Navi Mumbai by New Bombay Painting. Interior, exterior, commercial painting, texture work, waterproofing, colour consultation & more."
        />

        {/* Business Schema */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "New Bombay Painting",
  "url": "https://newbombaypainting.in/services/painting-services-mumbai",
  "areaServed": ["Mumbai", "Navi Mumbai"],
  "serviceType": "House Painting Services"
}
`}
        </script>
      </Helmet>

      <section className="bg-black text-white w-full">

        {/* ================= HERO BANNER ================= */}
        {/* <div className="relative w-full max-h-[700px] h-[260px] sm:h-[320px] md:h-[420px] lg:h-[700px] overflow-hidden">

 
  <img
    src={bannerDesktop}
    alt="Painting Services in Mumbai"
    className="
    //   hidden sm:block
    // sm:block
      w-full h-full
      object-cover
      object-top
    "
  /> */}

  {/* Mobile Banner */}
  {/* <img
    src={bannerMobile}
    alt="Painting Services in Mumbai"
    className="
      sm:hidden
      w-full h-full
      object-cover
      object-center
    "
  /> */}
          <div className="
  relative w-full overflow-hidden
  h-[210px]
  sm:h-[320px]
  md:h-[420px]
  lg:h-[700px]
">

  {/* Responsive Banner (Desktop image only, mobile-friendly) */}
  <img
    src={bannerDesktop}
    alt="Painting Services in Mumbai"
    className="
      w-full h-full
      object-cover
      object-top
    "
    loading="eager"
  />

</div>


          
        {/* </div> */}

        {/* ================= MAIN CONTENT ================= */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="w-full max-w-7xl">

            {/* PAGE TITLE */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-yellow-400 text-center mb-10">
              Painting Services Offered by New Bombay Painting
            </h1>

            {/* INTRO */}
            <p className="text-lg text-gray-300 leading-relaxed mb-10">
              At <span className="text-yellow-400 font-semibold">New Bombay Painting</span>,
              we provide a complete range of professional house painting services
              in Mumbai and Navi Mumbai for residential, commercial, and custom décor
              requirements. Our focus is on durability, clean execution, and
              long-lasting finish.
            </p>

            {/* SERVICES OVERVIEW */}
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">
              Our Painting & Home Improvement Services
            </h2>

            <ul className="space-y-4 text-gray-300 mb-12">
              <li>• Interior Painting Services</li>
              <li>• Residential Painting (Flats, Villas & Societies)</li>
              <li>• Commercial Painting for Offices & Shops</li>
              <li>• Professional Colour Consultation</li>
              <li>• Wall Texture & Decorative Painting</li>
              <li>• Wall Stencil Painting</li>
              <li>• Wood Painting & Furniture Polishing</li>
              <li>• Wallpaper Installation</li>
              <li>• Surface Preparation & Crack Repairs</li>
              <li>• Waterproofing & Weatherproofing</li>
              <li>• End-to-End Project Management</li>
              <li>• Online Booking & Free Site Inspection</li>
            </ul>

            {/* PROCESS (SUMMARY) */}
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Our House Painting Process
            </h2>
            <ol className="list-decimal list-inside text-gray-300 space-y-3 mb-12">
              <li>Detailed site visit & requirement discussion</li>
              <li>Colour consultation & finish selection</li>
              <li>Surface preparation & safety covering</li>
              <li>Professional paint application</li>
              <li>Final inspection & clean handover</li>
            </ol>

            {/* ROOM WISE (SUMMARY) */}
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Room-Specific Paint Recommendations
            </h2>
            <p className="text-gray-300 leading-relaxed mb-12">
              Bedrooms need calm tones, living rooms need warm shades, kitchens
              require washable finishes, and kids’ rooms need safe low-VOC paints.
              Our experts help you choose the right solution for every room.
            </p>

            {/* TRUST */}
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Why Choose New Bombay Painting?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-14">
              With years of experience, trained painters, and strict quality
              standards, we deliver professional painting services with minimum
              disruption and maximum satisfaction.
            </p>
{/* ================= REFERENCE STYLE CTA ================= */}
<section className="w-full bg-black py-16 px-4">
  <div
    className="
      relative
      max-w-7xl mx-auto
      rounded-3xl
      overflow-hidden
    "
  >
    {/* Background Image */}
     <img
      src={ctaBg}
      alt="Professional Painting Services CTA"
      className="absolute inset-0 w-full h-full object-cover"
    /> 

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20"></div>

    {/* Content */}
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-8 py-14">

      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
          Transform Your Home with <br />
          <span className="text-yellow-400">
            Professional Painting Services
          </span>
        </h2>

        <p className="text-gray-200 mt-4 max-w-lg">
          From interior & exterior painting to texture finishes and waterproofing,
          New Bombay Painting delivers premium quality, clean execution, and
          long-lasting results across Mumbai & Navi Mumbai.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="tel:+919819584682"
            className="px-6 py-3 bg-yellow-300 text-black font-semibold rounded-full transition"
          >
            📞 Free Site Inspection
          </a>

      
        </div>
      </div>

      {/* RIGHT SIDE (ILLUSTRATION SPACE) */}
      <div className="hidden md:flex justify-end">
        {/* Placeholder for illustration */}
        {/* <img
          src={ctaIllustration}
          alt="Painting Services Illustration"
          className="max-w-md w-full"
        /> */}
      </div>

    </div>
  </div>
</section>
{/* ================= CTA END ================= */}

            {/* ================= FULL SERVICES CONTENT ================= */}

            <h2 className="text-3xl font-bold text-yellow-400 mb-6">
              Painting Services Offered by New Bombay Painting
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              At <span className="text-yellow-400 font-semibold">New Bombay Painting</span>,
              we provide a complete range of professional house painting services in
              Mumbai and Navi Mumbai, designed to meet residential, commercial, and
              custom décor requirements. Our services focus on quality workmanship,
              durable finishes, and customer satisfaction.
            </p>

            {/* 1–12 SERVICES (UNCHANGED CONTENT) */}
            <h3 className="text-2xl font-semibold text-yellow-400 mt-8 mb-3">1. Interior Painting Services</h3>
            <p className="text-gray-300 leading-relaxed">
              Our interior painting services in Mumbai are crafted to give your home a
              refreshed, elegant look that lasts for years. Our experienced painters
              work closely with you to understand your vision, lifestyle, and
              preferences, and then execute the project with precision.
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">
              Every home is unique, which is why our interior painting solutions are
              fully customised — from colour selection to finish type — ensuring your
              walls reflect your personality and taste.
            </p>

            <h3 className="text-2xl font-semibold text-yellow-400 mt-10 mb-3">2. Residential Painting Services</h3>
            <p className="text-gray-300 leading-relaxed">
              We offer complete residential painting services for apartments,
              independent houses, villas, and housing societies. Our scope includes
              painting walls, ceilings, doors, windows, grills, and other surfaces
              using premium-quality paints and proven techniques.
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">
              Multiple paint brands, finishes, and coating options are available to
              suit different budgets and design preferences.
            </p>

            <h3 className="text-2xl font-semibold text-yellow-400 mt-10 mb-3">3. Commercial Painting Services</h3>
            <p className="text-gray-300 leading-relaxed">
              Our commercial painting services in Mumbai cater to offices, retail
              stores, showrooms, restaurants, warehouses, and other business spaces.
              We handle large-scale projects efficiently while minimizing disruption
              to business operations.
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">
              Our solutions enhance visual appeal while aligning with your brand
              identity.
            </p>

            <h3 className="text-2xl font-semibold text-yellow-400 mt-10 mb-3">4. Colour Consultation Services</h3>
            <p className="text-gray-300 leading-relaxed">
              Choosing the right colour can completely transform a space. Our
              professional colour consultation services help you select colours based
              on room usage, lighting, space size, and desired ambience.
            </p>

            <h3 className="text-2xl font-semibold text-yellow-400 mt-10 mb-3">5. Wall Texture Designs & Decorative Painting</h3>
            <p className="text-gray-300 leading-relaxed">
              Our texture painting and decorative wall services offer modern, minimal,
              and artistic texture finishes that add depth, character, and premium
              appeal to interiors and feature walls.
            </p>

            <h3 className="text-2xl font-semibold text-yellow-400 mt-10 mb-3">6. Wall Stencil Painting</h3>
            <p className="text-gray-300 leading-relaxed">
              Wall stencil painting allows you to add creativity and style without
              heavy renovation costs. From subtle patterns to bold artistic designs,
              stencil painting transforms plain walls into stunning focal points.
            </p>

            <h3 className="text-2xl font-semibold text-yellow-400 mt-10 mb-3">7. Wood Painting & Wood Finishes</h3>
            <p className="text-gray-300 leading-relaxed">
              We specialise in wood painting and polishing services for furniture,
              cabinets, doors, wardrobes, and wooden fixtures, restoring worn-out
              surfaces with a fresh and premium finish.
            </p>

            <h3 className="text-2xl font-semibold text-yellow-400 mt-10 mb-3">8. Wallpaper for Walls</h3>
            <p className="text-gray-300 leading-relaxed">
              Wallpaper installation is a great alternative décor solution that adds
              instant elegance and variety, especially for feature walls and bedrooms.
            </p>

            <h3 className="text-2xl font-semibold text-yellow-400 mt-10 mb-3">9. Surface Preparation</h3>
            <p className="text-gray-300 leading-relaxed">
              Proper surface preparation is the foundation of long-lasting paint. We
              ensure thorough cleaning, sanding, crack filling, putty application, and
              priming before painting begins.
            </p>

            <h3 className="text-2xl font-semibold text-yellow-400 mt-10 mb-3">10. Waterproofing Services</h3>
            <p className="text-gray-300 leading-relaxed">
              To protect your property from moisture damage, we provide waterproofing
              and weatherproofing solutions for terraces, exterior walls, and
              damp-prone areas — especially important in Mumbai’s monsoon climate.
            </p>

            <h3 className="text-2xl font-semibold text-yellow-400 mt-10 mb-3">11. Project Management</h3>
            <p className="text-gray-300 leading-relaxed">
              Every project is handled under dedicated supervision, ensuring smooth
              coordination, quality control, and timely completion.
            </p>

            <h3 className="text-2xl font-semibold text-yellow-400 mt-10 mb-3">12. Online Booking & Free Quotes</h3>
            <p className="text-gray-300 leading-relaxed mb-14">
              Request quotes, book site visits, and communicate requirements easily.
              Our experts guide you through the entire painting journey.
            </p>

            {/* CTA */}
            <div className="text-center mt-10">
              <h3 className="text-2xl font-bold text-yellow-400">
                Your Dream Home Awaits
              </h3>
              <p className="text-gray-400 mt-2">
                Get expert guidance, transparent pricing & flawless execution.
              </p>

              <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
                <a
                  href="tel:+919819584682"
                  className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full"
                >
                  📞 Call Now
                </a>

                <a
                  href="/services"
                  className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-full"
                >
                  🎨 View All Services
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default PaintingServices;
