import React from "react";
import { Helmet } from "react-helmet";
import bannerDesktop from "../assets/images/wood-polish-banner-lg.png";
import bannerMobile from "../assets/images/wood-polish-banner.png";

function WoodPolish() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          Wood Polish Services in Mumbai | PU & Melamine Polish for Furniture
        </title>

        <meta
          name="description"
          content="Professional wood polish services in Mumbai, Navi Mumbai & Pune. PU polish and Melamine polish for furniture, doors, wardrobes & modular kitchens by expert polish contractors."
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
            "name": "Wood Polish Services",
            "provider": {
              "@type": "HomeAndConstructionBusiness",
              "name": "New Bombay Painting",
              "url": "https://newbombaypainting.in"
            },
            "areaServed": [
              "Mumbai",
              "Navi Mumbai",
              "Andheri",
              "Ghatkopar",
              "Panvel",
              "Pune",
              "Lonavala"
            ],
            "description": "PU and Melamine wood polish services for furniture, doors, wardrobes and modular kitchens."
          }
          `}
        </script>
      </Helmet>

      {/* ================= PAGE ================= */}
      <section className="bg-black text-white">

        {/* ---------- HERO BANNER ---------- */}
        <div className="relative w-full h-[500px] sm:h-[320px] md:h-[650px] overflow-hidden">
          <img
            src={bannerDesktop}
            alt="Wood Polish Services in Mumbai"
            className="hidden sm:block w-full h-full object-cover"
          />

          <img
            src={bannerMobile}
            alt="PU and Melamine Wood Polish Services"
            className="sm:hidden w-full h-full object-cover"
          />

          {/* <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
            <h1 className="text-3xl md:text-6xl font-bold text-yellow-400 text-center">
              Wood Polish Services in Mumbai
            </h1>
          </div> */}
        </div>

        {/* ---------- CONTENT ---------- */}
        <div className="py-16 px-4 flex justify-center">
          <div className="max-w-4xl w-full">

            {/* INTRO */}
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              <strong className="text-yellow-400">New Bombay Painting</strong> offers
              professional <strong>wood polish services</strong> for residential and
              commercial properties across <strong>Mumbai, Navi Mumbai, Panvel & Pune</strong>.
              We specialize in <strong>PU polish</strong> and <strong>Melamine polish</strong>
              to enhance the beauty, durability, and lifespan of wooden furniture,
              doors, wardrobes, beds, and modular kitchens.
            </p>

            {/* INTERNAL LINKS */}
            <p className="text-gray-400 mb-12">
              For complete finishing solutions, explore our{" "}
              <a
                href="https://newbombaypainting.in/interior-painting"
                className="text-yellow-400 underline"
              >
                interior painting services
              </a>{" "}
              for walls and ceilings, our{" "}
              <a
                href="https://newbombaypainting.in/exterior-painting"
                className="text-yellow-400 underline"
              >
                exterior painting services
              </a>{" "}
              for building protection, and premium{" "}
              <a
                href="https://newbombaypainting.in/texture-painting"
                className="text-yellow-400 underline"
              >
                texture painting designs
              </a>{" "}
              for feature walls.
            </p>

            {/* PU POLISH */}
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              PU Polish for Furniture & Modular Kitchens
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              <strong>PU (Polyurethane) polish</strong> is a premium wood finishing
              solution known for its glossy or matte finish and superior durability.
              PU polish is ideal for luxury furniture, modular kitchens, wardrobes,
              and master bedroom wooden interiors. It offers excellent resistance
              against moisture, heat, and daily wear — making it a top choice in
              modern Mumbai homes.
            </p>

            <ul className="list-disc list-inside text-gray-300 mb-10 space-y-2">
              <li>High-gloss and matte PU polish finishes</li>
              <li>Premium look with long-lasting protection</li>
              <li>Ideal for kitchens, wardrobes & luxury furniture</li>
              <li>Scratch and moisture resistant</li>
            </ul>

            {/* MELAMINE POLISH */}
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Melamine Polish for Doors & Wooden Furniture
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              <strong>Melamine polish</strong> is a cost-effective and reliable wood
              polishing option commonly used for doors, cupboards, wardrobes, and
              office furniture. It enhances the natural wood grain while providing
              a smooth protective finish, making it suitable for residential projects
              across Navi Mumbai and Panvel.
            </p>

            <ul className="list-disc list-inside text-gray-300 mb-10 space-y-2">
              <li>Natural wood finish with soft shine</li>
              <li>Budget-friendly polishing solution</li>
              <li>Quick application and easy maintenance</li>
              <li>Best for doors, cabinets & wardrobes</li>
            </ul>

            {/* PROCESS */}
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Our Wood Polishing Process
            </h2>

            <ol className="list-decimal list-inside text-gray-300 space-y-3 mb-12">
              <li>Inspection of wooden surface & existing polish</li>
              <li>Sanding and surface preparation</li>
              <li>Application of base coat & selected polish</li>
              <li>Multiple finishing coats for smooth results</li>
              <li>Final inspection & site clean-up</li>
            </ol>

            {/* CTA */}
            <div className="bg-yellow-500 p-8 rounded-2xl text-black text-center">
              <h2 className="text-3xl font-bold mb-2">
                Need Professional Wood Polishing?
              </h2>
              <p className="text-lg mb-6 font-medium">
                Get a FREE site inspection & expert advice on PU or Melamine polish.
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

export default WoodPolish;
