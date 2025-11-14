import React from "react";

import { motion } from "framer-motion";
import lamination from "../assets/images/lamination1.png";
import polish from "../assets/images/our-work2.png";
import paint from "../assets/images/our-work1.png";
import interior from "../assets/images/interior.jpg"; // 👈 add your image
import texture from "../assets/images/texture.jpeg";   // 👈 add your image
import HeroSection from "../components/HeroSection";
import pop1 from "../assets/images/pop1.png"
import { Helmet } from "react-helmet";
// import wallpaper from "../assets/images/wallpaper.png"; // 👈 add your image

const Services = () => {
  return (
    <>
    <HeroSection/>
    <div className="bg-gray-900 text-white py-16 px-6 md:px-20 overflow-hidden">
      <Helmet>
          <title>Professional House Painting & Interior Services in Mumbai | New Bombay Painting</title>
          <meta
            name="description"
            content="Looking for painting, lamination, and texture polish services in Mumbai? We offer expert house painting, interior design, and luxury wall finishes with high-quality materials."
          />
          <meta
            name="keywords"
            content="painting contractors Mumbai, lamination services Mumbai, interior designing Mumbai, texture polish Mumbai, home painters Mumbai"
          />
      </Helmet>

      {/* 1️⃣ Painting Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-4 text-yellow-400"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Painting Services in Mumbai
          </motion.h2>
          <p className="text-gray-300 leading-relaxed">
            Transform your home or office with our{" "}
            <span className="text-yellow-400">professional painting services in Mumbai</span>.
            We use premium-quality paints and modern tools for a durable, smooth, and vibrant finish.
            From interior walls to exterior surfaces, we deliver perfection with Asian Paints,
            Nerolac, and Berger products.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={paint} alt="Painting Service" className="rounded-2xl shadow-xl w-full max-w-lg h-[400px] object-cover" />
        </motion.div>
      </div>

      {/* 2️⃣ Polish Work Section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-20">
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={polish} alt="Polish Work" className="rounded-2xl shadow-xl w-full max-w-lg h-[400px] object-cover" />
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2 className="text-4xl font-bold mb-4 text-yellow-400">
            Polish Work
          </motion.h2>
          <p className="text-gray-300 leading-relaxed">
            Restore the natural beauty of your wood furniture with our{" "}
            <span className="text-yellow-400">premium polish services</span>.
            We use eco-friendly materials for glossy, matte, or semi-matte finishes
            that enhance the durability and elegance of your interiors.
          </p>
        </motion.div>
      </div>

      {/* 3️⃣ Lamination Work Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2 className="text-4xl font-bold mb-4 text-yellow-400">
            Lamination Work
          </motion.h2>
          <p className="text-gray-300 leading-relaxed">
            Enhance your furniture and décor with{" "}
            <span className="text-yellow-400">modern lamination finishes</span>.
            We offer glossy, matte, and textured laminations that protect against moisture
            and scratches while giving your interiors a stylish and lasting look.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={lamination} alt="Lamination Work" className="rounded-2xl shadow-xl w-full max-w-lg h-[400px] object-cover" />
        </motion.div>
      </div>

      {/* 4️⃣ Interior Designing Section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-20">
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={interior} alt="Interior Designing" className="rounded-2xl shadow-xl w-full max-w-lg h-[400px] object-cover" />
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">Interior Designing</h2>
          <p className="text-gray-300 leading-relaxed">
            Redefine your space with our{" "}
            <span className="text-yellow-400">creative interior design services</span>.
            From modern living rooms to luxurious modular kitchens,
            we bring functionality, comfort, and style to every corner of your home or office.
          </p>
        </motion.div>
      </div>

      {/* 5️⃣ Texture Polish Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">Texture & Wall Polish</h2>
          <p className="text-gray-300 leading-relaxed">
            Add character to your walls with our{" "}
            <span className="text-yellow-400">texture polish and designer wall finishes</span>.
            Choose from metallic, marble, stone, and rustic textures
            to give your home an artistic and premium feel.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={texture} alt="Texture Polish" className="rounded-2xl shadow-xl w-full max-w-lg h-[400px] object-cover" />
        </motion.div>
      </div>

        {/* 6️⃣ POP Work Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-20">
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={pop1}
              alt="POP Work"
              className="rounded-2xl shadow-xl w-full max-w-lg h-[400px] object-cover"
            />
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-yellow-400">
              POP (Plaster of Paris) Work
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Upgrade your home interiors with our{" "}
              <span className="text-yellow-400">professional POP work</span>.
              We create smooth false ceilings, wall designs, cornices, and elegant
              mouldings using high-quality materials. Our POP craftsmanship gives
              your space a premium, durable, and luxurious look with perfect finishing.
            </p>
          </motion.div>
        </div>


    
    </div>
    </>
  );
};

export default Services;
