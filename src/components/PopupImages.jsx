import React from 'react';
import texture1 from "../assets/images/latest-work-texture1.jpeg";
import texture2 from "../assets/images/latest-work-texture2.jpeg";
import texture3 from "../assets/images/latest-work-texture3.jpeg";
import texture4 from "../assets/images/latest-work-texture4.jpeg";

function PopupImages({ show, onClose }) {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-[#111] text-white rounded-xl p-6 max-w-xl w-full shadow-xl relative">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-300 text-2xl hover:text-white"
                >
                    ✖
                </button>

                {/* Title */}
                <h2 className="text-3xl font-bold text-yellow-400 mb-3 text-center">
                    Our Recent Works of Texture
                </h2>

                {/* Images — Better Quality, No Cropping */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                    {[texture1, texture2, texture3, texture4].map((img, i) => (
                        <div
                            key={i}
                            className="w-full h-36 bg-black rounded-lg flex items-center justify-center overflow-hidden"
                        >
                            <img
                                src={img}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Call Now Button */}
                <a
                    href="tel:+919819584682"
                    className="block text-center mt-2 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition"
                >
                    📞 Call Now
                </a>

                {/* View More Button — Go to Projects Page */}
                <a
                    href="/projects"
                    className="block text-center mt-3 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 transition"
                >
                    🔍 View More Works
                </a>

            </div>
        </div>
    );
}

export default PopupImages;
