import React from "react";
import { Helmet } from "react-helmet";   // ⭐ Helmet Added
import bannerDesktop from "../assets/images/exterior-banner-lg.png";
import bannerMobile from "../assets/images/exterior-banner.png";

const ExteriorPainting = () => {
  return (
    <>
      {/* ------------------ SEO SCHEMA + META WITH HELMET ------------------ */}
      <Helmet>
        <title>Exterior Painting Services in Mumbai | Weatherproof & Waterproof Coating</title>
        <meta
          name="description"
          content="Professional exterior painting services in Mumbai, Navi Mumbai & Thane. Weatherproof coating, waterproof primer, crack repair & Asian Paints certified painters. Long-lasting protection with expert supervision."
        />
        <script type="application/ld+json">
          {`
                    {
                      "@context": "https://schema.org",
                      "@type": "HomeAndConstructionBusiness",
                      "name": "New Bombay Painting",
                      "url": "https://newbombaypainting.in/exterior-painting",
                      "logo": "https://newbombaypainting.in/assets/logo.png",
                      "image": "https://newbombaypainting.in/assets/exterior-banner-lg.png",
                      "description": "Professional exterior painting services offering waterproofing, crack repair, weatherproof coating, and premium paint application in Mumbai, Navi Mumbai, Pune & surrounding areas.",
                      "telephone": "+919819584682",
                      "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Mumbai",
                        "addressRegion": "Maharashtra",
                        "addressCountry": "IN"
                      },
                      "areaServed": [
                        "Mumbai",
                        "Navi Mumbai",
                        "Thane",
                        "Pune",
                        "Lonavala"
                      ],
                      "serviceType": "Exterior Painting",
                      "services": [
                        {
                          "@type": "Service",
                          "name": "Exterior Wall Painting",
                          "description": "Weatherproof & waterproof exterior wall painting for homes, buildings & bungalows."
                        },
                        {
                          "@type": "Service",
                          "name": "Exterior Crack Repair",
                          "description": "Professional crack-filling and wall preparation for long-lasting paint results."
                        },
                        {
                          "@type": "Service",
                          "name": "Waterproof Coating",
                          "description": "Protective waterproof coatings to extend the life of exterior walls."
                        }
                      ]
                    }
                `}
        </script>
      </Helmet>

      {/* ------------------ MAIN SECTION ------------------ */}
      <section className="bg-black text-white">

        {/* ---------- HERO TOP BANNER ---------- */}
        <div className="relative w-full h-full sm:h-[260px] md:h-[360px] lg:h-[600px] overflow-hidden">

          {/* Responsive Images */}
          <img
            src={bannerDesktop}
            alt="Exterior Painting Services in Mumbai"
            className="hidden sm:block w-full h-full object-cover object-[50%_38%]"
          />

          <img
            src={bannerMobile}
            alt="Exterior Painting Services"
            className="sm:hidden w-full h-full object-cover object-[50%_50%]"
          />

          {/* Light overlay */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-yellow-400 drop-shadow-lg text-center">
              Exterior Painting Services
            </h1>
          </div>
        </div>

        {/* ---------- BLOG STYLE CENTER CONTENT ---------- */}
        <div className="py-12 px-4 flex justify-center">
          <div className="max-w-3xl w-full">

            {/* Intro */}
            <p className="text-lg leading-relaxed mb-8 text-gray-300">
              At{" "}
              <span className="text-yellow-400 font-semibold">New Bombay Painting</span>,
              we protect and beautify your building exteriors with high-performance{" "}
              <span className="font-bold text-yellow-400">weatherproof painting solutions</span>.
              Whether it's a home, bungalow, society, or commercial building, our team ensures
              long-lasting durability, crack-free walls, and premium waterproof coating across{" "}
              <strong>Mumbai, Navi Mumbai, Pune, Lonavala & nearby cities</strong>. For complete
              indoor upgrades, you can also explore our{" "}
              <a
                href="/interior-painting"
                className="text-yellow-400 underline hover:text-yellow-300 font-medium"
              >
                interior painting services
              </a>.
            </p>


            {/* What We Offer */}
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">What We Offer</h2>
            <ul className="space-y-3 text-gray-300">
              <li>• Exterior wall cleaning, sanding & crack-filling</li>
              <li>• Waterproof primer + high-quality weatherproof paints</li>
              <li>• Modern exterior colour combinations & design ideas</li>
              <li>• Exterior wall textures & protective coatings</li>
              <li>• Asian Paints, Apex, Dulux, Nerolac certified solutions</li>
              <li>• Professional scaffolding, masking & site safety</li>
              <li>• Final inspection with guaranteed long-term finish</li>
            </ul>

            {/* Why Choose Us */}
            <h2 className="text-3xl font-bold text-yellow-400 mt-10 mb-4">Why Choose Us?</h2>
            <p className="text-gray-300 leading-relaxed">
              Exterior walls face harsh sun, rain, dust and moisture. Our expert team uses
              industry-leading materials and modern application techniques to ensure long-lasting
              protection and premium aesthetics. With{" "}
              <strong className="text-yellow-400">30+ years of experience</strong>,
              we guarantee crack resistance, waterproofing and smooth finishes that stand strong for years.
            </p>

            {/* ---------- PRICE RANGE SECTION ---------- */}
            <h2 className="text-3xl font-bold text-yellow-400 mt-10 mb-4">
              Exterior Painting Cost in Mumbai
            </h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Exterior painting cost depends on wall condition, waterproofing requirements,
              scaffolding needs, and **paint brand selection**. Prices also vary according to
              material quality—Asian Paints, Nerolac, Dulux, Apex, Ultima Protek, etc.
            </p>

            <ul className="space-y-2 text-gray-300">
              <li>• ₹18 – ₹28 per sq. ft. (Standard Exterior Painting)</li>
              <li>• ₹30 – ₹45 per sq. ft. (Weatherproof + Waterproof Primer)</li>
              <li>• ₹45 – ₹75 per sq. ft. (Premium Asian Paints Ultima Protek)</li>
            </ul>

            <p className="text-gray-300 mt-4">
              ⭐ <strong>Note:</strong> Final price varies according to the brand of paint, coating type, and wall repair depth.
              Contact us for a free site inspection & accurate estimate.
            </p>
            <p className="text-gray-300 mt-6">
              To understand the finish quality and durability, explore our{" "}
              <a
                href="/projects"
                className="text-yellow-400 underline hover:text-yellow-300 font-medium"
              >
                completed exterior painting projects
              </a>.
            </p>


            {/* Our Process */}
            <h2 className="text-3xl font-bold text-yellow-400 mt-10 mb-4">Our Process</h2>
            <ol className="space-y-3 text-gray-300 list-decimal list-inside">
              <li>On-site inspection & exterior wall assessment</li>
              <li>Budget-friendly, detailed estimate with material options</li>
              <li>Cleaning, crack filling, waterproof primer application</li>
              <li>High-quality exterior paint application using modern tools</li>
              <li>Final protection coat + inspection + clean-up</li>
            </ol>

            <h2 className="text-3xl font-bold text-yellow-400 mt-10 mb-4">Exterior Painting for All Types of Buildings</h2>
            <p className="text-gray-300 leading-relaxed">
              Our exterior painting services are suitable for residential buildings, housing societies, villas, bungalows, commercial complexes, schools, hotels, and office buildings. We understand that each structure faces different exposure to weather, moisture, and pollution, and we customize our materials and techniques accordingly to ensure maximum protection and visual appeal.
            </p> 
            <h2 className="text-3xl font-bold text-yellow-400 mt-10 mb-4">Exterior Painting Designed for Indian Weather Conditions</h2>
            <p className="text-gray-300 leading-relaxed">
              Mumbai and surrounding regions experience heavy rainfall, humidity, and strong sunlight. Our exterior painting systems are designed to withstand these conditions by using weather-resistant coatings, waterproof primers, and UV-protective paints that help prevent peeling, fading, and surface damage over time.
            </p>
            <h2 className="text-3xl font-bold text-yellow-400 mt-10 mb-4">Experienced Exterior Painting Contractors</h2>
            <p className="text-gray-300 leading-relaxed">
              With over 30 years of hands-on experience, New Bombay Painting has successfully completed exterior painting projects of varying sizes and complexities. Our trained painters follow safety guidelines, quality checks, and systematic execution to deliver consistent and reliable results on every project.
            </p>

            {/* FAQs */}
            <h2 className="text-3xl font-bold text-yellow-400 mt-10 mb-4">FAQs</h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-white">Which exterior paints do you use?</h3>
                <p className="text-gray-300">
                  Asian Paints Apex, Ultima Protek, Nerolac Excel, Dulux Weathershield,
                  and other premium weatherproof brands.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">How long does exterior paint last?</h3>
                <p className="text-gray-300">
                  With proper waterproofing & premium paints, exterior walls stay protected for{" "}
                  <strong>7–12 years</strong>.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">Do you provide waterproof coating?</h3>
                <p className="text-gray-300">
                  Yes, we apply waterproof primers and protective coatings for long-lasting durability.
                </p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="max-w-5xl mx-auto px-5 mt-16 text-center">
              <h3 className="text-2xl font-bold text-yellow-400">Need Exterior Painting Experts?</h3>
              <p className="text-gray-400 mt-2">
                Call our team for weatherproof, durable & long-lasting exterior wall painting.
              </p>

              <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 mt-6">
                <a
                  href="tel:+919819584682"
                  className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition"
                >
                  📞 Call Now: 9819584682
                </a>

                <a
                  href="https://wa.me/+918736963061?text=Hi,%20I%20need%20Exterior%20Painting%20Services"
                  target="_blank"
                  className="px-8 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-400 transition"
                >
                  💬 WhatsApp Now
                </a>

                <a
                  href="/services"
                  className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition"
                >
                  🎨 View All Services
                </a>

                <a
                  href="/projects"
                  className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-400 transition"
                >
                  📂 View Projects
                </a>

                <a
                  href="/"
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 transition"
                >
                  🏠 Go to Home Page
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ExteriorPainting;
