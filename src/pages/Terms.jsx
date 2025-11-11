import React from "react";

const Terms = () => {
    return (
        <section className="bg-black text-white py-16 px-6 sm:px-12 lg:px-24 leading-relaxed">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-500 mb-8 text-center">
                    Terms & Conditions
                </h1>

                <p className="text-gray-300 text-sm sm:text-base text-center mb-12">
                    <strong>Last Updated:</strong> November 2025
                </p>

                {/* Content */}
                <div className="space-y-8 text-gray-200 text-sm sm:text-base">
                    <p>
                        Welcome to <strong>New Bombay Painting</strong>. By accessing or
                        using our website and services, you agree to the following Terms and
                        Conditions. Please read them carefully before engaging with our
                        services.
                    </p>

                    <div>
                        <h2 className="text-2xl text-yellow-400 font-bold mb-3">
                            1. Services
                        </h2>
                        <p>
                            We provide professional painting and home improvement services.
                            The scope of work, pricing, and timelines are discussed and agreed
                            upon before project commencement. Any additional work or changes
                            requested after agreement may result in revised charges.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl text-yellow-400 font-bold mb-3">
                            2. Estimates & Payments
                        </h2>
                        <p>
                            All estimates provided are based on initial assessment and may
                            vary depending on actual site conditions. Payments must be made as
                            per the agreed schedule. Late or incomplete payments may delay
                            project delivery.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl text-yellow-400 font-bold mb-3">
                            3. Client Responsibilities
                        </h2>
                        <p>
                            Clients are expected to provide access to the property, ensure
                            safety of materials, and remove or secure valuable items before
                            painting work begins. We are not liable for accidental damage to
                            items not moved prior to work.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl text-yellow-400 font-bold mb-3">
                            4. Project Timelines
                        </h2>
                        <p>
                            We strive to complete all projects on time. However, delays may
                            occur due to weather, material shortages, or other unforeseen
                            circumstances. We will notify you promptly if such situations
                            arise.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl text-yellow-400 font-bold mb-3">
                            5. Warranty & Liability
                        </h2>
                        <p>
                            Our painting services come with a workmanship warranty, valid for
                            a limited time as specified in the project agreement. The warranty
                            does not cover damage caused by misuse, neglect, or external
                            factors like water leakage or structural issues.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl text-yellow-400 font-bold mb-3">
                            6. Cancellations & Refunds
                        </h2>
                        <p>
                            Clients may cancel booked services before project commencement.
                            However, any materials already purchased or work initiated will be
                            billed accordingly. Refunds are processed as per company policy.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl text-yellow-400 font-bold mb-3">
                            7. Use of Website
                        </h2>
                        <p>
                            You agree not to misuse our website, attempt unauthorized access,
                            or use content for commercial purposes without permission. All
                            images, logos, and text on this website are the property of New
                            Bombay Painting.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl text-yellow-400 font-bold mb-3">
                            8. Limitation of Liability
                        </h2>
                        <p>
                            New Bombay Painting shall not be held responsible for any indirect
                            or consequential damages resulting from the use or inability to
                            use our website or services, including delays or interruptions.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl text-yellow-400 font-bold mb-3">
                            9. Changes to Terms
                        </h2>
                        <p>
                            We reserve the right to update these Terms and Conditions at any
                            time. Continued use of our services or website signifies your
                            acceptance of the revised terms.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl text-yellow-400 font-bold mb-3">
                            10. Contact Us
                        </h2>
                        <p>
                            If you have questions about these Terms & Conditions, please
                            contact us:
                        </p>
                        <ul className="list-none mt-3 space-y-1">
                            <li>
                                📧 <strong>Email:</strong> newbombaypainting302@gmail.com
                            </li>
                            <li>
                                📞 <strong>Phone:</strong> +91 9819584682
                            </li>
                            <li>
                                🏠 <strong>Address:</strong> New Bombay Painting, Mankhurd,
                                Maharashtra, India
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Terms;
