import React, { useContext } from "react";
import { ThemeContext } from "../../Theme/ThemeContext";

const services = [
  {
    id: 1,
    title: "Consultation",
    description: "Get expert advice tailored to your unique needs and challenges.",
    icon: "💼",
  },
  {
    id: 2,
    title: "Implementation",
    description: "We ensure seamless integration of solutions into your workflow.",
    icon: "⚙️",
  },
  {
    id: 3,
    title: "Support",
    description: "Ongoing support to help you achieve sustained success.",
    icon: "🛠️",
  },
  {
    id: 4,
    title: "Training",
    description: "Empower your team with the knowledge and skills to excel.",
    icon: "📚",
  },
];

const ServicesPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen ${
        theme === "light" ? "bg-gray-100 text-gray-800" : "bg-gray-900 text-gray-100"
      }`}
    >
      {/* Header Section */}
      <div
        className={`${
          theme === "light" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-100"
        } text-center py-16`}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Discover the wide range of services we offer to help you achieve your goals.
        </p>
      </div>

      {/* Services Section */}
      <div className="container mx-auto py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`p-6 rounded-lg shadow-lg ${
                theme === "light"
                  ? "bg-white text-gray-800"
                  : "bg-gray-800 text-gray-100"
              } hover:shadow-xl transition`}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
              <p className="text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <section
        className={`relative ${
          theme === "light" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-100"
        } py-16 px-8 text-center`}
      >
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8">
          Let us help you turn your vision into reality. Contact us today to learn more.
        </p>
        <button
          className={`px-8 py-3 ${
            theme === "light"
              ? "bg-white text-blue-600 hover:bg-gray-100"
              : "bg-gray-700 text-gray-100 hover:bg-gray-600"
          } font-semibold rounded-lg shadow-md transition`}
        >
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default ServicesPage;
