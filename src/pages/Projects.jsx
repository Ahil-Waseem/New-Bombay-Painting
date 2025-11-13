import React, { useRef } from "react";
// import { motion } from "framer-motion";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
// import img7 from "../assets/images/img7.jpg";
// import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/paint1.png";
import img10 from "../assets/images/paint2.jpg";
import img11 from "../assets/images/paint3.jpg";
import img12 from "../assets/images/polish1.jpg";
import img13 from "../assets/images/polish2.jpg";
import img14 from "../assets/images/polish3.jpg";
import img15 from "../assets/images/texture1.jpg";
import img16 from "../assets/images/texture2.jpg";
import img17 from "../assets/images/texture3.jpg";



// ✅ Import videos
import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";
import video4 from "../assets/videos/video4.mp4";
import video5 from "../assets/videos/video5.mp4";
import video6 from "../assets/videos/video6.mp4";
import video7 from "../assets/videos/video7.mp4";

// ✅ Import cover images
import cover1 from "../assets/images/cover1.png";
import cover2 from "../assets/images/cover2.png";
import cover3 from "../assets/images/cover3.png";
import cover4 from "../assets/images/cover4.png";
import cover5 from "../assets/images/cover5.png";
import cover6 from "../assets/images/cover6.png";
import cover7 from "../assets/images/cover7.png";

const Projects = () => {
  // 🎥 Videos with cover images
  const videoGallery = [
    { src: video1, cover: cover1 },
    { src: video2, cover: cover2 },
    { src: video3, cover: cover3 },
    { src: video4, cover: cover4 },
    { src: video5, cover: cover5 },
    { src: video6, cover: cover6 },
    { src: video7, cover: cover7 },
  ];

  // 🖼️ Image gallery
  const imageGallery = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    // img7,
    // img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    
  ];

  // 🧠 Refs to control all video elements
  const videoRefs = useRef([]);

  // 🧩 Pause all other videos when one plays
  const handlePlay = (currentIndex) => {
    videoRefs.current.forEach((video, index) => {
      if (index !== currentIndex && video && !video.paused) {
        video.pause();
      }
    });
  };

  return (
    <section className="bg-black text-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-500 mb-10">
          Our Project Gallery
        </h1>

        <p className="text-gray-300 text-base sm:text-lg mb-14 max-w-3xl mx-auto">
          Explore our painting projects — each one reflects our craftsmanship,
          dedication, and attention to detail.
        </p>

        {/* 🎥 Video Gallery Section */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-400 mb-6">
            On-Site Reels & Work Videos
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {videoGallery.map((video, index) => (
              <div
                key={index}
                className="relative aspect-[9/16] bg-gray-900 rounded-lg overflow-hidden shadow-lg group hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Cover Image */}
                <img
                  src={video.cover}
                  alt={`Video Cover ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />

                {/* Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/40 rounded-full p-4 opacity-80 group-hover:opacity-0 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      className="w-10 h-10"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Video Player */}
                <video
                  ref={(el) => (videoRefs.current[index] = el)} // Store reference
                  controls
                  muted
                  preload="metadata"
                  poster={video.cover}
                  onPlay={() => handlePlay(index)}
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>

        {/* 🖼️ Image Gallery Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-400 mb-6">
            Project Image Gallery
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {imageGallery.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md hover:scale-[1.03] transition-transform duration-300"
              >
                <img
                  src={img}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 🎯 CTA Banner Section */}
        <div className="relative mt-20 bg-yellow-500 text-black py-16 px-6 sm:px-12 rounded-2xl shadow-2xl overflow-hidden">
          {/* Background Video Overlay */}
          <video
            autoPlay
            loop
            muted
            playsInline
            src={video1} // ✅ imported file instead of relative path
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          ></video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* CTA Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              Transform Your Space Into a Masterpiece 🎨
            </h2>

            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Our expert painters bring precision, passion, and perfection to
              every wall. Let’s make your home as beautiful as your imagination!
            </p>

            <button
              onClick={() => (window.location.href = "tel:+919819584682")}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 sm:px-10 sm:py-5 rounded-full text-lg sm:text-xl transition-all duration-300 shadow-lg hover:shadow-yellow-400/60"
            >
              📞 Get a Free Painting Quote Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
