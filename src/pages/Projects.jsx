import React, { useRef } from "react";
import { Helmet } from "react-helmet";

// Old gallery images
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img9 from "../assets/images/paint1.png";
import img10 from "../assets/images/paint2.jpg";
import img11 from "../assets/images/paint3.jpg";
import img12 from "../assets/images/polish1.jpg";
import img13 from "../assets/images/polish2.jpg";
import img14 from "../assets/images/polish3.jpg";
import img15 from "../assets/images/texture1.jpg";
import img16 from "../assets/images/texture2.jpg";
import img17 from "../assets/images/texture3.jpg";
import img18 from "../assets/images/img18.jpeg"
import img19 from "../assets/images/img19.jpeg"

// New Painting
import paint1 from "../assets/images/paint4.png";
import paint2 from "../assets/images/paint5.png";
import paint3 from "../assets/images/paint6.png";

// New Polish
import polish1 from "../assets/images/polish4.png";
import polish2 from "../assets/images/polish5.png";
import polish3 from "../assets/images/polish6.png";

// New Texture
import texture1 from "../assets/images/texture4.png";
import texture2 from "../assets/images/texture5.png";
import texture3 from "../assets/images/texture6.png";

// Lamination Images
import lamination1 from "../assets/images/lamination1.png";
import lamination2 from "../assets/images/lamination2.png";
import lamination3 from "../assets/images/lamination3.png";

// POP Images
import pop1 from "../assets/images/pop1.png";
import pop2 from "../assets/images/pop2.png";
import pop3 from "../assets/images/pop3.png";

// Videos
import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";
import video4 from "../assets/videos/video4.mp4";
import video5 from "../assets/videos/video5.mp4";
import video6 from "../assets/videos/video6.mp4";
import video7 from "../assets/videos/video7.mp4";
import video8 from "../assets/videos/video8.mp4";

// Video covers
import cover1 from "../assets/images/cover1.png";
import cover2 from "../assets/images/cover2.png";
import cover3 from "../assets/images/cover3.png";
import cover4 from "../assets/images/cover4.png";
import cover5 from "../assets/images/cover5.png";
import cover6 from "../assets/images/cover6.png";
import cover7 from "../assets/images/cover7.png";

const Projects = () => {
  const videoGallery = [
    { src: video1, cover: cover1 },
    { src: video2, cover: cover2 },
    { src: video3, cover: cover3 },
    { src: video4, cover: cover4 },
    { src: video5, cover: cover5 },
    { src: video6, cover: cover6 },
    { src: video7, cover: cover7 },
    {src: video8, cover: cover2},
  ];

  const imageGallery = [
    img19, img1, img2, img3, img4, img5, img6,
    img9, img10, img11,
    img12, img13, img14,
    img15, img16, img17, img18,
  ];

  const paintingGallery = [paint1, paint2, paint3];
  const polishGallery = [polish1, polish2, polish3];
  const textureGallery = [texture1, texture2, texture3];
  const laminationGallery = [lamination1, lamination2, lamination3];
  const popGallery = [pop1, pop2, pop3];

  const videoRefs = useRef([]);

  const handlePlay = (currentIndex) => {
    videoRefs.current.forEach((video, index) => {
      if (index !== currentIndex && video && !video.paused) {
        video.pause();
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Projects Gallery – Painting, Texture & Polish Work | New Bombay Painting</title>
        <meta name="description" content="Explore our gallery showcasing painting, texture, polish, POP and lamination work." />
      </Helmet>

      <section className="bg-black text-white py-16 px-6 sm:px-12 lg:px-24">

        {/* 🎨 Painting Gallery */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-yellow-400 mb-3">Painting Work Gallery</h2>
          <p className="text-gray-300 mb-6">
            Explore premium interior and exterior painting work completed across high-end homes.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {paintingGallery.map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition">
                <img src={img} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* ✨ Polish Gallery */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-yellow-400 mb-3">Polish Work Gallery</h2>
          <p className="text-gray-300 mb-6">
            Glossy, matte and PU polish work for premium wood interiors.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {polishGallery.map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition">
                <img src={img} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* 🎭 Texture Gallery */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-yellow-400 mb-3">Texture Work Gallery</h2>
          <p className="text-gray-300 mb-6">
            Modern texture finishes including metallic, stone, moroccan and more.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {textureGallery.map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition">
                <img src={img} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* 🪵 Lamination Gallery */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-yellow-400 mb-3">Lamination Work Gallery</h2>
          <p className="text-gray-300 mb-6">
            Modern laminate finishes for wardrobes, wall panels and modular furniture.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {laminationGallery.map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition">
                <img src={img} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* 🏛 POP Gallery */}
        <div className="mt-20 mb-20">
          <h2 className="text-3xl font-bold text-yellow-400 mb-3">POP Work Gallery</h2>
          <p className="text-gray-300 mb-6">
            POP false ceilings, wall mouldings and premium interior designs.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {popGallery.map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition">
                <img src={img} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* 🎥 Videos */}
        <div className="mb-14">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-6">On-Site Work Videos</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {videoGallery.map((video, index) => (
              <div key={index}
                className="relative aspect-[9/16] bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition">

                <img src={video.cover} className="absolute inset-0 w-full h-full object-cover" />

                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  controls
                  muted
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

        {/* Old Project Images */}
        {/* <div className="mb-10">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-6">Project Image Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {imageGallery.map((img, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition">
                <img src={img} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {imageGallery.map((img, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition h-40 sm:h-48 lg:h-56"
            >
              <img src={img} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>


      </section>
    </>
  );
};

export default Projects;
