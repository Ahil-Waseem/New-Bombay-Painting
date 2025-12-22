import React from 'react'
import { Helmet } from "react-helmet";
import bannerDesktop from "../assets/images/lamination-wood-polish-banner-lg.webp";
import bannerMobile from "../assets/images/lamination-wood-polish-banner.webp";

function Lamination() {
 return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          Lamination & Furniture Polish Services in Mumbai | PU & Melamine Polish
        </title>

        <meta
          name="description"
          content="Professional lamination and furniture polish services in Mumbai, Navi Mumbai & Pune. PU polish and Melamine polish for furniture, wardrobes, modular kitchens, doors & commercial interiors."
        />

        <link
          rel="canonical"
          href="https://newbombaypainting.in/wood-polish"
        />

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Lamination & Furniture Polish Services",
            "provider": {
              "@type": "HomeAndConstructionBusiness",
              "name": "New Bombay Painting",
              "url": "https://newbombaypainting.in"
            },
            "areaServed": [
              "Mumbai",
              "Navi Mumbai",
              "Panvel",
              "Andheri",
              "Ghatkopar",
              "Pune",
              "Lonavala"
            ],
            "description": "PU polish, Melamine polish and lamination services for furniture, wardrobes, modular kitchens and commercial interiors."
          }
          `}
        </script>
      </Helmet>

      {/* ================= PAGE ================= */}
      <section className="bg-black text-white">

        {/* ---------- HERO BANNER ---------- */}
        <div className="relative w-full h-[520px] sm:h-[340px] md:h-[680px] overflow-hidden">
          {/* Desktop Banner */}
          <img
            src={bannerDesktop}
            alt="Lamination & Furniture Polish Services in Mumbai"
            className="hidden sm:block w-full h-full object-contain"
          />

          {/* Mobile Banner */}
          <img
            src={bannerMobile}
            alt="PU and Melamine Furniture Polish Services"
            className="sm:hidden w-full h-full object-cover"
          />
        </div>

        {/* ---------- CONTENT ---------- */}
        <div className="py-16 px-4 flex justify-center">
          <div className="max-w-4xl w-full">

            {/* INTRO */}
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              <strong className="text-yellow-400">New Bombay Painting</strong> offers
              premium <strong>lamination and furniture polish services in Mumbai</strong>,
              delivering high-quality finishing solutions for residential and commercial
              spaces. We specialize in <strong>PU polish</strong>, <strong>Melamine polish</strong>,
              and modern lamination to enhance the appearance, durability, and lifespan of
              wooden furniture, wardrobes, doors, and modular kitchens.
            </p>

            {/* INTERNAL LINKS */}
            <p className="text-gray-400 mb-12">
              Our furniture polishing solutions perfectly complement our{" "}
              <a
                href="https://newbombaypainting.in/interior-painting"
                className="text-yellow-400 underline"
              >
                interior painting services
              </a>{" "}
              for complete home transformation, durable{" "}
              <a
                href="https://newbombaypainting.in/exterior-painting"
                className="text-yellow-400 underline"
              >
                exterior painting services
              </a>{" "}
              for long-term building protection, and elegant{" "}
              <a
                href="https://newbombaypainting.in/texture-painting"
                className="text-yellow-400 underline"
              >
                texture painting designs
              </a>{" "}
              for luxury feature walls. You can also explore our dedicated{" "}
              <a
                href="https://newbombaypainting.in/wood-polish"
                className="text-yellow-400 underline"
              >
                wood polish services
              </a>{" "}
              for advanced finishing options.
            </p>

            {/* PU POLISH */}
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              PU Polish for Furniture & Modular Kitchens
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              <strong>PU (Polyurethane) polish</strong> is a premium furniture finishing
              solution widely used in luxury homes, hotels, showrooms, and corporate
              interiors. PU polish provides a smooth, elegant finish with excellent
              resistance to moisture, heat, and daily wear, making it ideal for
              modern Mumbai interiors.
            </p>

            <ul className="list-disc list-inside text-gray-300 mb-10 space-y-2">
              <li>High-gloss & matte PU polish finishes</li>
              <li>Luxury appearance with long-lasting protection</li>
              <li>Ideal for modular kitchens & wardrobes</li>
              <li>Scratch, moisture & heat resistant</li>
            </ul>

            {/* MELAMINE POLISH */}
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Melamine Polish for Doors & Wooden Furniture
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              <strong>Melamine polish</strong> is a cost-effective and reliable option for
              doors, cupboards, wardrobes, and office furniture. It enhances the natural
              wood grain while providing a smooth and protective finish, making it suitable
              for residential and commercial projects across Navi Mumbai and Panvel.
            </p>

            <ul className="list-disc list-inside text-gray-300 mb-10 space-y-2">
              <li>Natural wood finish with soft shine</li>
              <li>Budget-friendly furniture polishing</li>
              <li>Quick application & easy maintenance</li>
              <li>Best for doors, cabinets & wardrobes</li>
            </ul>

            {/* LAMINATION */}
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Lamination Services for Furniture & Interiors
            </h2>

            <p className="text-gray-300 leading-relaxed mb-10">
              Our <strong>lamination services in Mumbai</strong> add an extra layer of
              protection and style to furniture and interior surfaces. Lamination improves
              scratch resistance, moisture protection, and overall durability, making it an
              excellent choice for modular kitchens, wardrobes, offices, and commercial spaces.
            </p>

            {/* PROCESS */}
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Our Furniture Polishing & Lamination Process
            </h2>

            <ol className="list-decimal list-inside text-gray-300 space-y-3 mb-12">
              <li>Surface inspection & consultation</li>
              <li>Sanding & surface preparation</li>
              <li>Base coat application</li>
              <li>PU / Melamine polish or lamination</li>
              <li>Multiple finishing coats</li>
              <li>Final quality check & clean-up</li>
            </ol>

            {/* CTA */}
            <div className="bg-yellow-500 p-8 rounded-2xl text-black text-center">
              <h2 className="text-3xl font-bold mb-2">
                Need Lamination or Furniture Polish Services?
              </h2>
              <p className="text-lg mb-6 font-medium">
                Get a FREE site inspection & expert guidance on PU or Melamine polish.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:+919819584682"
                  className="bg-black text-white px-8 py-3 rounded-full font-bold"
                >
                  📞 Call 9819584682
                </a>

                <a
                  href="/services"
                  className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold"
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
}


export default Lamination
