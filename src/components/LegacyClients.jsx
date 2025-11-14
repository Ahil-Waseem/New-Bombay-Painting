import React from 'react';

// --- DATA SOURCE ---
// Replace this placeholder data with your actual client details.
const legacyClients = [
    {
        name: "Celebrity A (Film Personality)",
        project: "Executed specialized painting and decor work for their primary Mumbai residence.",
        // year: "1985",
        // NOTE: If you don't have a picture, this placeholder is safe.
        image: null,
    },
    {
        name: "Celebrity B (Indian Cricketor)",
        project: "Comprehensive interior painting project for their corporate headquarters.",
        // year: "1992",
        image: null,
    },
    {
        name: "Businesses (Showrooms, Jwellery Shops & Malls)",
        project: "Comprehensive interior painting project for their corporate headquarters.",
        // year: "2000",
        image: null,
    },
    // Add more clients here...
];
// --------------------

const LegacyClients = () => {
    return (
        // Section background is set to black
        <section className="p-4 md:p-10 bg-black">
            <div className="max-w-7xl mx-auto">

                {/* Section Main Title: Yellow for prominence */}
                <h2 className="text-3xl font-extrabold text-left md:text-center text-yellow-400 mb-4">
                    Our Legacy: A History of Distinguished Clients
                </h2>

                {/* Subtitle / Introduction: White text */}
                <p className="text-lg text-left md:text-center text-white mb-12 max-w-3xl mx-auto">
                    Our founder began his journey in the 1995 and, through exceptional quality, had the honor of serving some of the most notable personalities in the Indian film and business industry.
                </p>

                {/* Client Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {legacyClients.map((client, index) => (
                        <div
                            key={index}
                            // Card styling: White background for contrast, black border top for accent
                            className="bg-gray-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-yellow-500"
                        >
                            <div className="flex items-center mb-4">
                                {/* Profile Placeholder (Yellow background accent) */}
                                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-2xl mr-4">
                                    {client.name.charAt(0)}
                                </div>

                                {/* Client Name: White text */}
                                <div>
                                    <h3 className="text-2xl font-semibold text-white">
                                        {client.name}
                                    </h3>
                                    {/* Project Year: Light Gray text */}
                                    {/* <p className="text-sm text-gray-400">
                                        Project Year: {client.year}
                                    </p> */}
                                </div>
                            </div>

                            {/* Project Description: Light Gray text */}
                            <p className="text-gray-300 italic">
                                "{client.project}"
                            </p>

                            <div className="mt-4 text-right">
                                {/* Footer Tagline with Yellow Accent */}
                                <span className="text-xs font-medium text-yellow-500">
                                    Executed by Our Founder
                                </span>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LegacyClients;