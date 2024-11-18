import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
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
    </div>
  );
};

export default AboutPage;
