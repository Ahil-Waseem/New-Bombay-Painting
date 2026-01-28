import React from "react";
import { Helmet } from "react-helmet";
import bannerDesktop from "../assets/images/interior-banner-lg.png";
import bannerMobile from "../assets/images/interior-banner.png";
import interiorVideo from "../assets/videos/homevideo.mp4";

const InteriorPainting = () => {
    return (
        <>
           <Helmet>
                <title>Interior Painting Services in Mumbai | Home & Apartment Painting Experts</title>
                <meta
                    name="description"
                    content="Professional interior painting services in Mumbai, Navi Mumbai, Pune & Lonavala. Premium wall painting, texture finishes, eco-friendly paints & 30+ years of expertise by New Bombay Painting."
                />

                {/* Business Schema */}
                <script type="application/ld+json">
                    {`
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "New Bombay Painting",
  "url": "https://newbombaypainting.in/interior-painting",
  "logo": "https://newbombaypainting.in/assets/logo.png",
  "image": "https://newbombaypainting.in/assets/interior-banner-lg.png",
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
    "Pune",
    "Lonavala"
  ],
  "serviceType": "Interior Painting"
}
`}
                </script>

                {/* Interior Painting Service Schema */}
                <script type="application/ld+json">
                    {`
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Interior Painting Services",
  "description": "Professional interior wall painting, texture finishes, designer walls and premium paint application for homes and apartments.",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "name": "New Bombay Painting"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Mumbai, Navi Mumbai, Pune, Lonavala"
  }
}
`}
                </script>

                {/* Video Schema */}
                <script type="application/ld+json">
                    {`
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Interior Painting Projects by New Bombay Painting",
  "description": "Watch real interior painting, texture work and premium wall finishes completed by New Bombay Painting across Mumbai and nearby regions.",
  "thumbnailUrl": "https://newbombaypainting.in/assets/interior-banner-lg.png",
  "uploadDate": "2024-12-20",
  "contentUrl": "https://newbombaypainting.in/assets/videos/homevideo.mp4",
  "embedUrl": "https://newbombaypainting.in/interior-painting"
}
`}
                </script>
            </Helmet>

        
        <section className="bg-black text-white">

            {/* ---------- HERO TOP BANNER ---------- */}
            {/* HERO TOP BANNER */}
            <div className="relative w-full h-[220px] sm:h-[260px] md:h-[360px] lg:h-[550px] overflow-hidden">

                {/* Responsive Images */}
                <img
                    src={bannerDesktop}
                    alt="Interior Painting Services"
                    className="
            hidden sm:block 
            w-full h-full 
            object-cover 
            object-[50%_38%]   /* adjust focus for laptop screen */
        "
                />

                <img
                    src={bannerMobile}
                    alt="Interior Painting Services"
                    className="
            sm:hidden 
            w-full h-full 
            object-cover 
            object-[50%_50%]   /* mobile ka centre focus */
        "
                />

                {/* Light overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-yellow-400 drop-shadow-lg text-center">
                        Interior Painting Services
                    </h1>
                </div>
            </div>
            {/* ---------- SEO VIDEO SECTION (INDEXABLE) ---------- */}
<section className="bg-black py-14 px-4 flex justify-center">
  <div className="max-w-5xl w-full text-center">

    <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
      Interior Painting Projects by New Bombay Painting
    </h2>

    <video
      src={interiorVideo}
      controls
      preload="metadata"
      className="
        w-full 
        max-w-4xl 
        mx-auto 
        rounded-xl 
        shadow-lg
        bg-black
      "
    />

    <p className="text-gray-400 mt-5 leading-relaxed">
      Watch real interior painting, texture work and premium wall finishes
      completed by our expert painters for homes and apartments across
      Mumbai, Navi Mumbai, Pune and nearby regions.
    </p>

  </div>
</section>


            {/* ---------- BLOG STYLE CENTER CONTENT ---------- */}
            <div className="py-12 px-4 flex justify-center">
                <div className="max-w-3xl w-full">

                    {/* Intro */}
                    <p className="text-lg leading-relaxed mb-8 text-gray-300">
                        At{" "}
                        <span className="text-yellow-400 font-semibold">
                            New Bombay Painting
                        </span>
                        , we transform your home interiors with premium-quality painting
                        solutions. With{" "}
                        <span className="font-bold text-yellow-400">30+ years of expertise</span>
                        , we ensure flawless finishes, smooth walls, perfect color
                        selection and long-lasting durability for homes across{" "}
                        <strong>Mumbai, Lonavala, Pune & all over India</strong>. For complete
                        property enhancement, you can also explore our{" "}
                        <a
                            href="/exterior-painting"
                            className="text-yellow-400 underline hover:text-yellow-300 font-medium"
                        >
                            exterior painting services
                        </a>.
                    </p>


                    {/* What We Offer */}
                    <h2 className="text-3xl font-bold text-yellow-400 mb-4">
                        What We Offer
                    </h2>
                    <ul className="space-y-3 text-gray-300">
                        <li>• Wall preparation – sanding, cleaning, patching & priming</li>
                        <li>• Use of premium eco-friendly paints</li>
                        <li>• Accent walls, textures & designer finishes</li>
                        <li>• Professional masking and floor protection</li>
                        <li>• Precision painting with latest tools</li>
                        <li>• Final inspection & clean-up</li>
                    </ul>

                    {/* Why Choose Us */}
                    <h2 className="text-3xl font-bold text-yellow-400 mt-10 mb-4">
                        Why Choose Us?
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        With decades of experience, our painting team brings unmatched skill
                        and clean workmanship. Whether it’s a single room or a full home
                        makeover, we ensure a stress-free, high-quality result that lasts.
                    </p>

                    {/* Our Process */}
                    <h2 className="text-3xl font-bold text-yellow-400 mt-10 mb-4">
                        Our Process
                    </h2>
                    <ol className="space-y-3 text-gray-300 list-decimal list-inside">
                        <li>Free site visit & modern colour consultation</li>
                        <li>Detailed cost estimate with material guidance</li>
                        <li>Surface preparation & safety covering</li>
                        <li>High-quality paint application with precision</li>
                        <li>Final finish inspection & handover</li>
                    </ol>

                    <h2 className="text-3xl font-bold text-yellow-400 mt-10 mb-4">Interior Painting for Homes & Apartments in Mumbai</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We specialize in interior painting for flats, apartments, bungalows, villas, and commercial interiors across Mumbai and nearby regions. Our team understands local climate conditions, wall types, and paint durability needs, ensuring long-lasting results in every project.
                    </p>
                    <h2 className="text-3xl font-bold text-yellow-400 mt-10 mb-4">Our Interior Painting Experience</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Over the years, New Bombay Painting has completed interior painting projects for 1BHK, 2BHK, 3BHK flats, luxury bungalows, and commercial properties. From modern apartments to traditional homes, we adapt our techniques to suit every space and surface type.
                    </p>
                    <p className="text-gray-300 mt-4">
                        You can view some of our completed residential and commercial work in our{" "}
                        <a
                            href="/projects"
                            className="text-yellow-400 underline hover:text-yellow-300 font-medium"
                        >
                            interior painting projects gallery
                        </a>.
                    </p>

                    <h2 className="text-3xl font-bold text-yellow-400 mt-10 mb-4">Trusted Interior Painters in Mumbai</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Being a Mumbai-based painting contractor, we follow strict safety standards, clean-site practices, and timely completion. Our experienced painters ensure minimal disruption to your daily routine while delivering superior finish quality.
                    </p>

                    {/* FAQs */}
                    <h2 className="text-3xl font-bold text-yellow-400 mt-10 mb-4">FAQs</h2>
                    <div className="space-y-5">
                        <div>
                            <h3 className="font-semibold text-white">What paint brands do you use?</h3>
                            <p className="text-gray-300">
                                Only premium low-VOC paints from trusted Indian and global brands.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-white">How long does the paint last?</h3>
                            <p className="text-gray-300">More than 10 years depending on usage and surface condition.</p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-white">Do you move furniture?</h3>
                            <p className="text-gray-300">
                                Yes, our team assists with shifting and full site masking.
                            </p>
                        </div>
                    </div>
                    <p className="text-gray-300 mt-10">
                        Looking for a complete range of painting solutions? Visit our{" "}
                        <a
                            href="/services"
                            className="text-yellow-400 underline hover:text-yellow-300 font-medium"
                        >
                            services page
                        </a>{" "}
                        to explore all residential and commercial painting options.
                    </p>


{/* Bottom CTA */}
                    <div className="max-w-5xl mx-auto px-5 mt-16 text-center">
                        <h3 className="text-2xl font-bold text-yellow-400">Need Professional Painting Services?</h3>
                        <p className="text-gray-400 mt-2">
                            Contact us today for premium-quality home & commercial painting at affordable pricing.
                        </p>

                        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 mt-6">

                            <a
                                href="tel:+919819584682"
                                className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition"
                            >
                                📞 Call Now: 9819584682
                            </a>

                            <a
                                href="https://wa.me/+918736963061?text=Hi,%20I%20need%20professional%20painting%20services"
                                target="_blank"
                                className="px-8 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-400 transition"
                            >
                                💬 WhatsApp Now
                            </a>

                            <a
                                href="/services"
                                className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition"
                            >
                                🎨 View Services
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

export default InteriorPainting;
