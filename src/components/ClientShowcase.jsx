import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

// Glow generator
const getGlowStyle = (rgb, intensity = 0.9) => {
    return {
        boxShadow: `
      0 0 20px rgba(${rgb}, ${intensity}),
      0 0 40px rgba(${rgb}, ${intensity * 0.6}),
      0 0 60px rgba(${rgb}, ${intensity * 0.4})
    `,
    };
};

// Node Data
const hierarchyData = [
    { id: 1, name: "At Actors Home", name2: "Tiger Shroff, Jitender Kumar many more..", icon: Home, info: "All Interior Works", level: 1, bgColor: "bg-yellow-600", glowColor: "253, 230, 138", iconColor: "text-white" },
    { id: 2, name: "At Cricketor Home", name2: "Rohit Sharma", icon: Home, info: "All Interior Works", level: 2, bgColor: "bg-red-600", glowColor: "239, 68, 68", iconColor: "text-white" },
    { id: 3, name: "At TajMahal Hotel", name2: "Colaba Mumbai Hotel More Than 300 Rooms", icon: Home, info: "All Interior Works", level: 2, bgColor: "bg-green-600", glowColor: "52, 211, 153", iconColor: "text-white" },
    { id: 4, name: "At Hiranandani", name2: "Flats", icon: Home, info: "All Interior Works", level: 2, bgColor: "bg-blue-600", glowColor: "96, 165, 250", iconColor: "text-white" },
    { id: 5, name: "At Lodha Tower", name2: "Owner Banglows", icon: Home, info: "All Interior Works", level: 3, bgColor: "bg-purple-600", glowColor: "192, 132, 252", iconColor: "text-white" },
    { id: 6, name: "At Khandala Hills", name2: "Residential Banglows", icon: Home, info: "All Interior Works", level: 3, bgColor: "bg-orange-600", glowColor: "251, 146, 60", iconColor: "text-white" },
    { id: 7, name: "At Lokhandwala Hills", name2: "Residential Banglows", icon: Home, info: "All Interior Works", level: 3, bgColor: "bg-pink-600", glowColor: "244, 114, 182", iconColor: "text-white" },
    { id: 8, name: "At Machaan", name2: "Residential Machaan", icon: Home, info: "All Interior Works", level: 3, bgColor: "bg-cyan-600", glowColor: "103, 232, 249", iconColor: "text-white" },
    { id: 9, name: "At Hydrabad", name2: "Showrooms", icon: Home, info: "All Interior Works", level: 3, bgColor: "bg-fuchsia-600", glowColor: "232, 121, 249", iconColor: "text-white" },
    { id: 10, name: "At Jamsedpur", name2: "Showrooms", icon: Home, info: "All Interior Works", level: 3, bgColor: "bg-lime-600", glowColor: "190, 242, 100", iconColor: "text-white" },
];

// Animation
const nodeVariants = {
    initial: { opacity: 0, scale: 0.8, y: 50 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } },
    hover: { scale: 1.15, transition: { duration: 0.2 } },
};

// Node Component
const Node = ({ data, onHover, onHoverEnd }) => {
    const Icon = data.icon;

    return (
        <motion.div
            className="flex flex-col items-center cursor-pointer p-2 mb-4"
            variants={nodeVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            onMouseEnter={() => onHover(data)}
            onMouseLeave={onHoverEnd}
            onClick={() => { onHover(data); setTimeout(onHoverEnd, 3000); }}
        >
            <div
                style={getGlowStyle(data.glowColor)}
                className={`
                    rounded-full 
                    ${data.bgColor} 
                    ${data.iconColor} 
                    flex items-center justify-center 
                    w-24 h-24 text-4xl
                    transition-all duration-300
                    border-2 border-white/30
                `}
            >
                <Icon size={40} className="drop-shadow-lg" />
            </div>
            <div className="font-semibold text-white text-sm mt-2">{data.name}</div>
        </motion.div>
    );
};

// Main Component
const Hierarchy = () => {
    const [hoveredNode, setHoveredNode] = useState(null);

    return (
        <div className="pt-8 pb-12 px-4 md:px-10 bg-black">

            <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 text-yellow-400">
                Places Where We Already Worked
            </h1>

            {/* Perfect balanced grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 md:gap-y-12 gap-x-4 md:gap-x-8 max-w-7xl mx-auto">
                {hierarchyData.map((data) => (
                    <div key={data.id} className="flex justify-center">
                        <Node
                            data={data}
                            onHover={setHoveredNode}
                            onHoverEnd={() => setHoveredNode(null)}
                        />
                    </div>
                ))}
            </div>

            {/* Popup */}
            {hoveredNode && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-100 text-gray-800 p-4 rounded-lg shadow-2xl z-50 max-w-sm w-full text-center"
                >
                    <div className="font-bold text-lg mb-1">{hoveredNode.name2}</div>
                    <p className="text-sm">{hoveredNode.info}</p>
                </motion.div>
            )}
        </div>
    );
};

export default Hierarchy;
