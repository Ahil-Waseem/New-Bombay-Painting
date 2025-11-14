import React, { useRef, useState, forwardRef } from "react";
import emailjs from "emailjs-com";

const Contact = forwardRef((props, contactRef) => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ltgnhei",   // 🟡 Your EmailJS Service ID
        "template_7tj8qsv",  // 🟡 Your EmailJS Template ID
        form.current,
        "-1G2GMaIkqDYJQUtm"  // 🟡 Your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setIsSent(true);
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          console.error("Email error:", error.text);
          setLoading(false);
          alert("Something went wrong, please try again.");
        }
      );
  };

  return (
    <section
      ref={contactRef}
      id="contact"
      className="relative w-full min-h-screen bg-black flex items-center justify-center p-6"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* LEFT — Info Section */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-6xl font-extrabold text-yellow-400 leading-tight">
            Let’s Build <br /> Something Great
          </h2>
          <p className="text-lg text-gray-300">
            Have a project in mind or want to discuss painting, lamination,
            polish, or full interior work? Fill out the form and our expert team
            will connect with you soon.
          </p>

          <div className="text-white/70 space-y-2 text-sm">
            {/* <p><strong>📍 Office:</strong> Mumbai, Maharashtra</p> */}
            <p><strong>📞 Phone:</strong> +91 9819584682</p>
            <p><strong>📞 Phone:</strong> +91 8736963061</p>
            <p><strong>📧 Email:</strong> newbombaypainting302@gmail.com</p>
          </div>
        </div>

        {/* RIGHT — Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-black border border-yellow-500/40 rounded-2xl shadow-2xl shadow-yellow-400/20 p-8 space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-yellow-400 mb-2 font-medium">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full bg-transparent border border-gray-600 text-white rounded-md p-3 focus:outline-none focus:border-yellow-400"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-yellow-400 mb-2 font-medium">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full bg-transparent border border-gray-600 text-white rounded-md p-3 focus:outline-none focus:border-yellow-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-yellow-400 mb-2 font-medium">Phone Number</label>
            <input
              type="tel"
              name="user_phone"
              required
              pattern="[0-9]{10}"
              maxLength="10"
              className="w-full bg-transparent border border-gray-600 text-white rounded-md p-3 focus:outline-none focus:border-yellow-400"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Work Type Dropdown */}
          <div>
            <label className="block text-yellow-400 mb-2 font-medium">Type of Work</label>
            <select
              name="work_type"
              required
              className="w-full bg-black border border-gray-600 text-white rounded-md p-3 focus:outline-none focus:border-yellow-400"
            >
              <option value="">Select Work Type</option>
              <option value="Painting Work">Painting Work</option>
              <option value="Lamination Work">Lamination Work</option>
              <option value="Polish Work">Polish Work</option>
              <option value="All Interior Work">All Interior Work</option>
              <option value="Banglow Interior Work">Banglow Interior Work</option>
              <option value="Flat Interior Work">Flat Interior Work</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold py-3 rounded-md hover:bg-yellow-300 transition-all duration-300 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {isSent && (
            <p className="text-green-400 mt-3 text-center font-medium">
              ✅ Message sent successfully! We’ll reply soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
});

export default Contact;
