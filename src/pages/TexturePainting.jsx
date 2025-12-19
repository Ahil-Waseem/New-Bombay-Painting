import React from "react";
import { Helmet } from "react-helmet";
import bannerDesktop from "../assets/images/texture-banner-lg.png";
import bannerMobile from "../assets/images/texture-banner.png";

const TexturePainting = () => {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          Modern Texture Painting Services in Mumbai, Pune & Navi Mumbai | 3D Wall Designs
        </title>

        <meta
          name="description"
          content="Premium texture painting services in Mumbai, Andheri, Ghatkopar, Navi Mumbai, Panvel & Pune. Royal Play, Concrete, Metallic & 3D wall texture designs by expert painters."
        />

        <link
          rel="canonical"
          href="https://newbombaypainting.in/texture-painting"
        />

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Texture Painting Services",
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
              "Colaba",
              "CSMT",
              "Panvel",
              "Pune",
              "Lonavala"
            ],
            "description": "Luxury texture painting services including Royal Play, Metallic, Concrete & 3D wall textures for residential and commercial spaces."
          }
          `}
        </script>
      </Helmet>

      {/* ================= PAGE ================= */}
      <section className="bg-black text-white">

        {/* ---------- HERO BANNER ---------- */}
        <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
          <img
            src={bannerDesktop}
            alt="Texture Painting Services in Mumbai"
            className="hidden sm:block w-full h-full object-cover"
          />
          <img
            src={bannerMobile}
            alt="Wall Texture Designs"
            className="sm:hidden w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
            <h1 className="text-3xl md:text-6xl font-bold text-yellow-400 text-center">
              Texture Painting Services in Mumbai
            </h1>
          </div>
        </div>

        {/* ---------- CONTENT ---------- */}
        <div className="py-16 px-4 flex justify-center">
          <div className="max-w-4xl w-full">

            {/* INTRO */}
            <p className="text-xl leading-relaxed text-gray-300 mb-6">
              Elevate your interiors with{" "}
              <span className="text-yellow-400 font-bold">New Bombay Painting</span>,
              Mumbai’s trusted experts in modern and luxury{" "}
              <strong>texture painting services</strong>.
              From premium apartments in{" "}
              <strong>Andheri, Ghatkopar, Colaba & CSMT</strong> to luxury villas
              in <strong>Pune, Panvel & Lonavala</strong>, we create visually
              striking textured walls that add depth, style, and long-lasting durability.
            </p>

            {/* INTERNAL LINKS */}
            <p className="text-gray-400 mb-10">
              For complete wall finishing solutions, explore our{" "}
              <a
                href="https://newbombaypainting.in/interior-painting"
                className="text-yellow-400 underline"
              >
                interior painting services
              </a>{" "}
              for bedrooms and living areas, or our{" "}
              <a
                href="https://newbombaypainting.in/exterior-painting"
                className="text-yellow-400 underline"
              >
                exterior painting services
              </a>{" "}
              for building exteriors. You can also browse our{" "}
              <a href="/projects" className="text-yellow-400 underline">
                completed painting projects
              </a>{" "}
              to see real work samples.
            </p>

            {/* TRENDING STYLES */}
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">
              Trending Texture Painting Styles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300 mb-12">
              <div className="border border-yellow-500/30 p-4 rounded-lg">
                <h3 className="text-white font-bold text-xl mb-2">
                  Concrete & Industrial Finish
                </h3>
                <p>
                  Minimalist and modern texture popular in apartments across
                  Andheri, Navi Mumbai & Pune.
                </p>
              </div>

              <div className="border border-yellow-500/30 p-4 rounded-lg">
                <h3 className="text-white font-bold text-xl mb-2">
                  Royal Play Spatula Texture
                </h3>
                <p>
                  Premium luxury texture ideal for feature walls in Colaba,
                  Ghatkopar & South Mumbai homes.
                </p>
              </div>

              <div className="border border-yellow-500/30 p-4 rounded-lg">
                <h3 className="text-white font-bold text-xl mb-2">
                  Metallic & Shimmer Textures
                </h3>
                <p>
                  Adds a rich gold or silver effect, perfect for modern living
                  rooms in Navi Mumbai.
                </p>
              </div>

              <div className="border border-yellow-500/30 p-4 rounded-lg">
                <h3 className="text-white font-bold text-xl mb-2">
                  3D & Geometric Wall Textures
                </h3>
                <p>
                  Designer textures widely used in villas and premium homes
                  in Lonavala & Pune.
                </p>
              </div>
            </div>

            {/* PROCESS */}
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Our Texture Painting Process
            </h2>

            <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-12">
              <li>Free site visit & wall condition assessment</li>
              <li>Texture selection based on room lighting & design preference</li>
              <li>Surface levelling, crack repair & primer application</li>
              <li>Professional texture application using tools & spatula</li>
              <li>Final finishing, clean-up & quality inspection</li>
            </ol>

            {/* PRICING */}
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Texture Painting Cost in Mumbai – Estimated Range
            </h2>

            <p className="text-gray-300 mb-6">
              Texture painting cost in Mumbai does <strong>not have a fixed rate</strong>.
              Final pricing depends on the <strong>quality of material, texture design,
              wall condition, total area, and finishing technique</strong>.
              The prices below are <strong>approximate ranges</strong> to help
              understand the budget level.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-gray-700">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="p-3 border border-gray-700">Texture Type</th>
                    <th className="p-3 border border-gray-700">Estimated Range (sq. ft.)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr>
                    <td className="p-3 border border-gray-700">Basic Designer Texture</td>
                    <td className="p-3 border border-gray-700">₹75 – ₹110</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-700">Royal Play / Metallic Texture</td>
                    <td className="p-3 border border-gray-700">₹120 – ₹180</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-700">3D / Concrete Finish Texture</td>
                    <td className="p-3 border border-gray-700">₹200 – ₹350</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-400 mt-4">
              ⚠️ <strong>Important:</strong> Actual texture painting cost may vary based on:
            </p>

            <ul className="list-disc list-inside text-gray-400 space-y-2 mt-3 mb-8">
              <li>Brand & quality of texture material (Asian Paints, Royal Play, Dulux, etc.)</li>
              <li>Wall surface condition & repair work required</li>
              <li>Design pattern, number of layers & finishing style</li>
              <li>Total wall area (higher area helps optimize cost)</li>
              <li>Project location – Mumbai, Navi Mumbai, Pune, Panvel or Lonavala</li>
            </ul>

            <p className="text-gray-300 mb-12">
              For an <strong>accurate texture painting quotation</strong>, we recommend
              a free site inspection by our experts.
            </p>

            {/* FAQ */}
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">
              Texture Painting FAQs
            </h2>

            <div className="space-y-6 text-gray-300 mb-16">
              <div>
                <h3 className="text-white font-semibold">
                  Is texture painting suitable for Mumbai weather?
                </h3>
                <p>
                  Yes. We use moisture-resistant texture materials suitable for
                  Mumbai’s humidity and coastal conditions.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold">
                  How long does texture painting last?
                </h3>
                <p>
                  With proper surface preparation, texture painting lasts
                  <strong> 8–12 years</strong>.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold">
                  Do you provide texture painting outside Mumbai?
                </h3>
                <p>
                  Yes, we serve Navi Mumbai, Panvel, Pune, Lonavala and nearby areas.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-yellow-500 p-8 rounded-2xl text-black text-center">
              <h2 className="text-3xl font-bold mb-2">
                Ready to Transform Your Walls?
              </h2>
              <p className="text-lg mb-6 font-medium">
                Get a FREE site inspection in Mumbai, Pune or Navi Mumbai.
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
};

export default TexturePainting;
