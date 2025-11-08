import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-black text-white py-16 px-6 sm:px-12 lg:px-24 leading-relaxed">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-500 mb-8 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-300 text-sm sm:text-base text-center mb-12">
          <strong>Last Updated:</strong> November 2025
        </p>

        {/* Content */}
        <div className="space-y-8 text-gray-200 text-sm sm:text-base">
          <p>
            At <strong>New Bombay Painting</strong>, we value your trust and are
            committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, and safeguard your information when you visit
            our website or use our services.
          </p>

          <div>
            <h2 className="text-2xl text-yellow-400 font-bold mb-3">
              1. Information We Collect
            </h2>
            <p>
              We may collect both personal and non-personal information when you
              interact with our services:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Full Name, Email Address, and Phone Number</li>
              <li>Address or Project Location details</li>
              <li>
                Browser type, IP address, device information, and site
                interaction data
              </li>
              <li>Any information you voluntarily share via forms or messages</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-yellow-400 font-bold mb-3">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>To respond to inquiries and provide painting services</li>
              <li>To send quotations, invoices, and updates</li>
              <li>To improve website performance and user experience</li>
              <li>
                To send promotional messages or offers (only with your consent)
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-yellow-400 font-bold mb-3">
              3. Sharing of Information
            </h2>
            <p>
              We do <strong>not sell or rent</strong> your information. We may
              share data only with trusted service partners (like contractors or
              payment processors) or when required by law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-yellow-400 font-bold mb-3">
              4. Cookies and Tracking
            </h2>
            <p>
              We use cookies to enhance your browsing experience, analyze
              traffic, and remember preferences. You can disable cookies in your
              browser settings if you prefer.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-yellow-400 font-bold mb-3">
              5. Data Security
            </h2>
            <p>
              We implement modern security measures including HTTPS encryption,
              firewalls, and restricted access to protect your personal data.
              However, no online system can be guaranteed 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-yellow-400 font-bold mb-3">
              6. Your Rights
            </h2>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Access or request deletion of your personal data</li>
              <li>Withdraw consent from marketing emails</li>
              <li>Request corrections or updates to your information</li>
            </ul>
            <p className="mt-2">
              To exercise your rights, please contact us via email below.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-yellow-400 font-bold mb-3">
              7. Links to Other Websites
            </h2>
            <p>
              Our website may contain links to external sites. We are not
              responsible for the privacy policies or content of third-party
              websites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-yellow-400 font-bold mb-3">
              8. Updates to This Policy
            </h2>
            <p>
              We may update this policy periodically. Any changes will be
              posted on this page with a new “Last Updated” date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-yellow-400 font-bold mb-3">
              9. Contact Us
            </h2>
            <p>
              If you have questions about our Privacy Policy or how we handle
              your data, please contact us:
            </p>
            <ul className="list-none mt-3 space-y-1">
              <li>
                📧 <strong>Email:</strong> info@newbombaypainting.com
              </li>
              <li>
                📞 <strong>Phone:</strong> +91 9XXXXXXXXX
              </li>
              <li>
                🏠 <strong>Address:</strong> New Bombay Painting, Navi Mumbai,
                Maharashtra, India
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-yellow-400 font-bold mb-3">
              10. Consent
            </h2>
            <p>
              By using our website or services, you consent to our Privacy
              Policy and agree to its terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
