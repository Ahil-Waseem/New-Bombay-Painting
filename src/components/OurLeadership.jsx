import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Ahil from "../assets/icons/Ahil.jpeg";
import Waseem from "../assets/icons/Waseem.png";
import { UserRound } from "lucide-react";


const leadershipData = [
    {
        name: "Mr. Waseem Ahamad Khan",
        title: "Founder & Chief Artisan",
        role: "The original visionary and master craftsman, with 40+ years of experience and a legacy of serving high-profile clientele.",
        image: Waseem,
        color: "bg-yellow-500",
        order: 1,
    },
    {
        name: "Mr. Waquar Khan",
        title: "Co-Founder & Operations Head",
        role: "Manages day-to-day operations, ensuring projects are delivered on time while maintaining the highest quality standards.",
        image: null,
        color: "bg-white",
        order: 2,
    },
    {
        name: "Mr. Moazzam Khan",
        title: "Co-Founder & Strategy Lead",
        role: "Drives modern strategy, client engagement, and digital transformation, building upon our family's proud tradition.",
        image: Ahil,
        color: "bg-yellow-500",
        order: 3,
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 50, duration: 0.5, delay: 0.2 }
    },
};

const OurLeadership = () => {

    // ✅ FIXED: Hook must be inside component
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="p-4 md:p-10 bg-black">
            <div className="max-w-7xl mx-auto">

                <h2
                    className="text-5xl font-extrabold text-center text-yellow-400 mb-4 tracking-tight"
                    style={{ textShadow: '0 0 10px rgba(252, 211, 77, 0.7)' }}
                >
                    Meet Our Leadership
                </h2>

                <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
                    Three generations of expertise driving New Bombay Painting forward with passion, trust, and exceptional craftsmanship.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {leadershipData.map((member, index) => (
                        <motion.div
                            key={index}
                            className="p-8 rounded-xl bg-gray-900 text-white flex flex-col items-center text-center 
                                shadow-lg transition duration-300 ease-in-out cursor-pointer 
                                hover:shadow-yellow-500/30 hover:scale-[1.03] border-t-4 border-yellow-500"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            style={{ order: member.order }}
                        >
                            {/* ✅ FIXED: Single clean clickable image circle */}
                            <div
                                className={`w-24 h-24 ${member.color} rounded-full flex items-center justify-center mb-6 
                                    border-4 border-white/10 overflow-hidden cursor-pointer`}
                                style={{ boxShadow: '0 4px 20px rgba(252, 211, 77, 0.4)' }}
                                onClick={() => setSelectedImage(member.image)}
                            >
                               {member.image ? ( <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                                ) : (
                                <UserRound size={48} className="text-gray-700" /> )}
                            </div>

                            <h3 className="text-3xl font-extrabold text-yellow-400 mt-2 tracking-wide">
                                {member.name}
                            </h3>

                            <p className="text-base font-medium text-white mb-4 uppercase">
                                {member.title}
                            </p>

                            <p className="text-gray-400 leading-relaxed">
                                {member.role}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ✅ FIXED: Modal Image Popup */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="p-4 bg-gray-900 rounded-xl shadow-xl max-w-lg">
                        <img
                            src={selectedImage}
                            alt="Enlarged"
                            className="rounded-lg w-full object-cover"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default OurLeadership;
