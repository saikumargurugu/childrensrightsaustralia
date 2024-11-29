import React, { useContext } from "react";
import { ThemeContext } from "../../Theme/ThemeContext";
const AboutPage = () => {
  const { theme } = useContext(ThemeContext); // Access current theme

  return (
    <div
      className={`min-h-screen ${
        theme === "light" ? "bg-gray-100 text-gray-800" : "bg-gray-900 text-gray-100"
      }`}
    >
      {/* Hero Section */}
      <div
        className={`${
          theme === "light" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-100"
        } text-center py-16`}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
         ABOUT CHILDREN'S RIGHTS AUSTRALIA
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Learn more about who we are and how we make a difference.
        </p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-16 px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
              Our mission is to create exceptional experiences for our clients
              through innovative technology and outstanding service. We are
              committed to making a positive impact in the lives of those we
              serve.
            </p>
            <p className="text-lg">
              Join us on this journey as we continue to innovate, inspire, and
              lead in our field.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src="https://via.placeholder.com/600x400"
              alt="About us"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Membership Banner */}
      <section
        className={`relative ${
          theme === "light" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-100"
        } py-16 px-8 flex justify-center items-center`}
      >
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/src/assets/member-banner-bg.jpg')", // Replace with your image path
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Become a Member Today!</h2>
          <p className="text-lg mb-8">
            Join our community to access exclusive benefits, resources, and much
            more. Take the next step toward achieving your goals with us.
          </p>
          <button
            className={`px-8 py-3 ${
              theme === "light"
                ? "bg-white text-blue-600 hover:bg-gray-100"
                : "bg-gray-700 text-gray-100 hover:bg-gray-600"
            } font-semibold rounded-lg shadow-md transition`}
          >
            Join Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
