import React from "react";
import bgImage from "../../assets/HomePage.jpg"; 

const Home = () => {
    return (
      <div
        className="h-screen bg-[url('https://via.placeholder.com/1920x1080')] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Welcome to Our Website
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl">
            Discover amazing content and experiences crafted just for you. Let us help you achieve your goals with our expertise and dedication.
          </p>
          <div className="mt-8">
            <a
              href="#about"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  