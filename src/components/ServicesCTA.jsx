import React from "react";

const ServicesCTA = () => {
    const services = [
        { name: "Interior Painting", id: "painting" },
        { name: "Exterior Painting", id: "exterior" },
        { name: "Wall Texture", id: "texture" },
        { name: "Polish", id: "polish" },
        { name: "Interior Lamination", id: "lamination" },
        { name: "POP", id: "pop" },
    ];

    return (
        <div className="bg-black text-white py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-yellow-500">
                    Our Professional Services
                </h2>
                <p className="text-gray-400 mb-12">
                    Quality painting, polishing, and interior solutions for beautiful homes.
                </p>

                {/* Services Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <a
                            key={index}
                            href={`/services#${service.id}`}
                            className="
                group
                relative
                p-[2px]
                rounded-xl
                bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-600
                hover:from-yellow-400 hover:to-yellow-500
                transition-all duration-300
                shadow-lg shadow-yellow-900/30
                hover:shadow-yellow-500/50
              "
                        >
                            <div
                                className="
                  bg-gray-900 
                  rounded-xl 
                  px-6 py-4
                  flex justify-center items-center
                  group-hover:bg-gray-800
                  transition-all duration-300
                "
                            >
                                <p className="text-lg font-semibold group-hover:text-yellow-400 transition-all duration-300">
                                    {service.name}
                                </p>

                                {/* Shine effect */}
                                <span
                                    className="
                    absolute
                    inset-0
                    rounded-xl
                    bg-gradient-to-r from-transparent via-white/20 to-transparent
                    opacity-0 group-hover:opacity-100
                    translate-x-[-100%] group-hover:translate-x-[100%]
                    transition-all duration-700
                  "
                                ></span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12">
                    <a
                        href="tel:+919819584682"
                        className="
              bg-gradient-to-r from-yellow-500 to-yellow-600
              text-black font-bold
              px-10 py-4 rounded-xl
              text-lg
              shadow-lg shadow-yellow-900/40
              hover:shadow-yellow-500/70
              transition-all 
              hover:-translate-y-1 hover:scale-105
            "
                    >
                        Call For Free Estimate
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ServicesCTA;
