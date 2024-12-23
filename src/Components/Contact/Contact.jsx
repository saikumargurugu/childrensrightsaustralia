import React, { useContext } from "react";
import { ThemeContext } from "../../Theme/ThemeContext";

const ContactUs = () => {
  const { theme } = useContext(ThemeContext); // Access current theme

  return (
    <section
      id="contact"
      className={`min-h-screen ${
        theme === "light" ? "bg-gray-100 text-gray-900" : "bg-gray-800 text-white"
      } flex justify-center items-center p-4`}
    >
      <div
        className={`w-full max-w-lg ${
          theme === "light" ? "bg-white" : "bg-gray-900"
        } p-6 rounded-lg shadow-lg`}
      >
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <form action="#" method="POST" className="space-y-4">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className={`block text-sm font-medium mb-1 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full p-2 rounded ${
                theme === "light" ? "bg-gray-200 text-gray-900" : "bg-gray-700 text-white"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className={`block text-sm font-medium mb-1 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full p-2 rounded ${
                theme === "light" ? "bg-gray-200 text-gray-900" : "bg-gray-700 text-white"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Your Email"
              required
            />
          </div>

          {/* Message Input */}
          <div>
            <label
              htmlFor="message"
              className={`block text-sm font-medium mb-1 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className={`w-full p-2 rounded ${
                theme === "light" ? "bg-gray-200 text-gray-900" : "bg-gray-700 text-white"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className={`w-full p-2 ${
                theme === "light" ? "bg-blue-500 hover:bg-blue-600" : "bg-yellow-500 hover:bg-yellow-600"
              } text-white font-semibold rounded transition`}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
