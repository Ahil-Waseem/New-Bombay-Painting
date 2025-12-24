import React from "react";
import bannerDesktop from "../assets/images/wallpaper-banner-desktop.webp";
import bannerMobile from "../assets/images/wallpaper-banner-mobile.webp";

function Wallpaper() {
  return (
    <main className="bg-black text-gray-800">

      {/* ---------- HERO BANNER ---------- */}
      <section className="relative w-full h-[550px] sm:h-[300px] md:h-[420px] lg:h-[800px] overflow-hidden">
        <img
          src={bannerDesktop}
          alt="Wallpaper Installation Services in Mumbai"
          className="hidden sm:block w-full h-full object-fit-center"
        />
        <img
          src={bannerMobile}
          alt="Wallpaper Installation Services in Mumbai"
          className="sm:hidden w-full h-full object-fit-center"
        />

        <div className="absolute inset-0 bg-black/10 flex items-center">
          <div className="px-6 mt-20 md:px-26 max-w-4xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Wallpaper Installation Services in Mumbai
            </h1>
            <p className="text-gray-200 mt-3 text-sm sm:text-base">
              Professional wallpaper fixing, wall covering & designer wallpaper
              installation for homes, offices and commercial spaces across Mumbai.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- CONTENT ---------- */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-12 space-y-12">

        {/* INTRO */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
            Professional Wallpaper Contractors in Mumbai
          </h2>
          <p className="text-white leading-relaxed">
            At New Bombay Painting, we offer expert wallpaper installation services in Mumbai,
            Navi Mumbai and surrounding areas. From modern 3D wallpapers to premium vinyl
            wall coverings, our team ensures flawless results that perfectly complement
            your interior design. Many of our clients also combine wallpaper work with our{" "}
            <a href="/interior-painting" className="text-yellow-500 font-medium hover:underline">
              interior painting services
            </a>{" "}
            to achieve a complete home transformation.
          </p>
        </div>

        {/* WHY CHOOSE */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
            Why Choose Our Wallpaper Installation Services?
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li>Skilled and experienced wallpaper installers in Mumbai</li>
            <li>Residential and commercial wallpaper fixing solutions</li>
            <li>Affordable wallpaper installation cost with premium finishing</li>
            <li>Damage-free application on freshly painted or existing walls</li>
            <li>Option to combine with <a href="/texture-painting" className="text-yellow-500 hover:underline">texture painting</a> for accent walls</li>
          </ul>
        </div>

        {/* TYPES */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
            Types of Wallpaper We Install
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
            <li>✔ 3D Wallpaper Installation for feature walls</li>
            <li>✔ Vinyl Wallpaper Fixing for long-lasting durability</li>
            <li>✔ Bedroom & Living Room Wallpaper Designs</li>
            <li>✔ Office & Commercial Space Wallpapers</li>
            <li>✔ Designer Wallpaper with <a href="/wood-polish" className="text-yellow-500 hover:underline">wood polish</a> interiors</li>
            <li>✔ Custom Wallpaper for renovated homes</li>
          </ul>
        </div>

        {/* COMBINATION SERVICES */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
            Complete Wall & Home Makeover Solutions
          </h2>
          <p className="text-white leading-relaxed">
            Wallpaper installation works best when planned along with other finishing services.
            Our clients often opt for wallpaper along with{" "}
            <a href="/exterior-painting" className="text-yellow-500 hover:underline">
              exterior painting
            </a>{" "}
            for full property upgrades, or combine it with{" "}
            <a href="/lamination" className="text-yellow-500 hover:underline">
              lamination services
            </a>{" "}
            for furniture and wall panels. For complete upgrades, we also provide{" "}
            <a href="/home-renovation" className="text-yellow-500 hover:underline">
              home renovation services in Mumbai
            </a>.
          </p>
        </div>

        {/* AREAS */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
            Wallpaper Installation Services Across Mumbai
          </h2>
          <p className="text-white leading-relaxed">
            We serve Andheri, Bandra, Goregaon, Malad, Borivali, Kurla, Chembur,
            Ghatkopar, Powai, Navi Mumbai, Thane and nearby areas. Whether it’s
            a new flat, office space or a renovation project with{" "}
            <a href="/pop-false-ceiling" className="text-yellow-500 hover:underline">
              POP false ceiling
            </a>, our team delivers reliable and professional results.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-yellow-500 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <h3 className="text-lg md:text-xl font-semibold text-black">
            Looking for Wallpaper Installation Near You in Mumbai?
          </h3>
          <a
            href="tel:+919819584682"
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
          >
            Call Now
          </a>
        </div>
      </section>
    </main>
  );
}

export default Wallpaper;
