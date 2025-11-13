// src/components/AboutUsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Home, Award, Users, CheckCircle, MapPin } from "lucide-react";

/* Keyframes for rotating flower (kept simple and embedded) */
const spinAnimation = `
@keyframes spin-flower {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.spin {
  animation: spin-flower 18s linear infinite;
  transform-origin: center;
}
`;

/* Re-usable Flower + Home icon (kept lightweight) */
const FlowerHomeIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg
      className="absolute inset-0 w-full h-full text-yellow-500 transform rotate-12 spin"
      viewBox="0 0 200 200"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M100 0 C130 0, 150 40, 150 100 S130 200, 100 200 C70 200, 50 160, 50 100 S70 0, 100 0 Z"
        transform="rotate(0, 100, 100)"
        className="opacity-90"
      />
      <path
        d="M100 0 C130 0, 150 40, 150 100 S130 200, 100 200 C70 200, 50 160, 50 100 S70 0, 100 0 Z"
        transform="rotate(60, 100, 100)"
        className="opacity-80"
      />
      <path
        d="M100 0 C130 0, 150 40, 150 100 S130 200, 100 200 C70 200, 50 160, 50 100 S70 0, 100 0 Z"
        transform="rotate(120, 100, 100)"
        className="opacity-70"
      />
      <circle cx="100" cy="100" r="40" fill="#000000" className="shadow-lg" />
    </svg>

    <Home className="relative text-white z-10 w-12 h-12" />
  </div>
);

const Stat = ({ Icon, number, label }) => (
  <div className="flex items-start gap-3">
    <div className="bg-yellow-500/10 p-3 rounded-lg">
      <Icon className="w-6 h-6 text-yellow-400" />
    </div>
    <div>
      <div className="text-2xl font-bold text-white">{number}</div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  </div>
);

export default function AboutUsSection() {
  return (
    <section className="bg-black text-white py-10 md:py-20 px-6 sm:px-10 lg:px-20">
      {/* injected keyframes */}
      <style>{spinAnimation}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT: Heading + story + CTA */}
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl md:text-5xl lg:text-4xl font-extrabold leading-tight"
          >
            <span className="block text-yellow-400">New Bombay Painting</span>
            Trusted Painting, Interiors & Finishes — <span className="text-gray-300">Serving Mumbai & Beyond for 30 Years</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl"
          >
            For three decades we’ve transformed homes, jewelry showrooms and luxury bungalows with precision, premium materials and unmatched attention to detail.
            Our teams have successfully completed projects not just across
            <span className="text-yellow-500 font-semibold"> Mumbai</span>, <span className="text-blue-500 font-semibold">Lonavala</span>, <span className="text-red-500 font-semibold">Pune</span> & <span className="text-green-500 font-semibold">Khandala</span> but also in major cities like 
            <span className="text-yellow-500 font-semibold"> Jamsedpur</span>,
            <span className="text-blue-500 font-semibold"> Pune</span>,
            <span className="text-yellow-500 font-semibold"> Nasik</span> and <span className="text-red-500 font-semibold">Hydrabad</span>. We  — delivering excellence and trust wherever we go.
            From well-known jewelry showrooms to private residences, we continue to serve high-profile clients nationwide with complete discretion and quality.
          </motion.p>

          {/* Notable clients (subtle) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="bg-white/5 border border-white/6 p-4 rounded-lg max-w-3xl"
          >
            <div className="text-sm text-gray-300 mb-2">Notable projects include:</div>
            <div className="flex flex-wrap gap-3 text-sm text-yellow-400 font-semibold">
              Bharti Jewellers (Thane) · Prabhadevi · Surbhi Jewellers · Chintamani Jewellers · Luxury bungalows in Lonavala & Khandala
            </div>
            <div className="mt-3 text-sm text-gray-400">
              We have also completed trusted private works for clients in the film & sports space.
            </div>
          </motion.div>

          {/* Quick bullet points + CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
              <Stat Icon={Award} number="30+" label="Years of Expertise" />
              <Stat Icon={CheckCircle} number="100%" label="Client Trust" />
               <Stat Icon={Users} number="300+" label="Workers" /> 
            </div>

            {/* <div className="flex-shrink-0">
              <a
                href="/contact"
                className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-300 transition"
              >
                Request Free Site Visit
              </a>
            </div> */}
          </div>

          <div className="text-sm text-gray-400 max-w-3xl">
            <strong>Privacy & Discretion:</strong> We always respect client privacy — especially for high-profile residential and celebrity projects. If you’d like references or case studies for select projects, contact us and we’ll share details during an on-site visit.
          </div>
        </div>

        {/* RIGHT: Graphic + Project Highlights */}
        <div className="flex flex-col items-center lg:items-end gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800/30 to-black/20"
          >
            {/* Flower + home icon */}
            <div className="absolute inset-0 p-6 flex items-center justify-center">
              <div className="w-full h-full max-w-[340px] max-h-[340px]">
                <FlowerHomeIcon />
              </div>
            </div>
          </motion.div>

          {/* Short structured list of famous clients and locations */}
          <div className="w-full max-w-md bg-white/4 border border-white/6 rounded-lg p-4 text-left">
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">Selected Work & Locations</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>• Jewelry showrooms: Bharti, Surbhi, Chintamani (Thane, Prabhadevi)</li>
              <li>• Luxury homes & bungalows: Lonavala, Khandala & Mumbai suburbs</li>
              <li>• High-profile private projects: Discreet residential works for film & sports personalities</li>
              <li>• Full-service: Painting, texture polish, lamination, interior finishing & site project management</li>
            </ul>
          </div>

          {/* <div className="text-xs text-gray-500 italic">
            Tip: Add a small photo gallery (before/after) of showrooms & bungalow projects — it builds immediate trust.
          </div> */}
        </div>
      </div>
    </section>
  );
}
