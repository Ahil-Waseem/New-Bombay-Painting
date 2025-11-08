import React from "react";
import { motion } from "framer-motion";

const ServiceHeader = () => {
    return (
        <div
            className="relative w-full h-[85vh] bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage:
                    "url('/src/assets/images/services-bg.jpg')", // 👈 Replace with your Gemini-generated image
            }}
        >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Content */}
            <motion.div
                className="relative z-10 text-center max-w-3xl px-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 mb-4 drop-shadow-lg">
                    Trusted Painting & Interior Experts in Mumbai
                </h1>

                <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8">
                    With years of experience in <span className="text-yellow-400">painting, lamination, interior designing, texture,</span> and <span className="text-yellow-400">polish services</span>,
                    we bring life to every wall. Our skilled team delivers elegant, durable, and affordable solutions across Mumbai and Navi Mumbai.
                </p>

                <motion.a
                    href="/contact"
                    className="inline-block bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-300 transition duration-300 shadow-md"
                    whileHover={{ scale: 1.05 }}
                >
                    Get Free Quote
                </motion.a>
            </motion.div>
        </div>
    );
};

export default ServiceHeader;
