import React from "react";
import { motion } from "framer-motion";
import { Construction } from "lucide-react"; // 👈 icon from lucide-react

const ComingSoon = ({ pageName }) => {
    return (
        <div className="min-h-[80vh] bg-gray-900 text-white flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
            {/* Background animation */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-gray-800 to-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />

            {/* Glowing ring animation */}
            <motion.div
                className="absolute w-[300px] h-[300px] border-4 border-yellow-400 rounded-full blur-3xl opacity-20"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                }}
            />

            {/* Icon */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 mb-6"
            >
                <Construction size={80} className="text-yellow-400 mx-auto mb-4" />
                <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 drop-shadow-lg">
                    {pageName} Page
                </h1>
            </motion.div>

            {/* Subtext */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-gray-300 text-lg md:text-xl mb-8 relative z-10"
            >
                🚧 This section is currently <span className="text-yellow-400">under construction</span>.<br />
                We’re working hard to bring amazing content very soon!
            </motion.p>

            {/* Animated loading dots */}
            <motion.div
                className="flex gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                {[1, 2, 3].map((dot) => (
                    <motion.span
                        key={dot}
                        className="w-3 h-3 bg-yellow-400 rounded-full"
                        animate={{
                            y: [0, -10, 0],
                            opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                            duration: 1,
                            delay: dot * 0.3,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                    ></motion.span>
                ))}
            </motion.div>
        </div>
    );
};

export default ComingSoon;
