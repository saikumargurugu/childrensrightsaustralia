import React, { useContext } from "react";
import bgImage from "../../assets/HomePage.jpg";
import { ThemeContext } from "../../Theme/ThemeContext";
import ourMission from "../../assets/children1.jpg";
import joinUs from "../../assets/Jointeam1.jpg";

const Home = () => {
  const { theme } = useContext(ThemeContext); // Access the current theme

  return (
    <div>
      <div
        className={`h-screen bg-cover bg-center bg-no-repeat ${
          theme === "light" ? "bg-gray-100" : "bg-gray-900"
        }`}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div
          className={`${
            theme === "light"
              ? "bg-white bg-opacity-70"
              : "bg-black bg-opacity-50"
          } h-full flex flex-col justify-center items-center text-center text-black dark:text-white px-4`}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            CHILDRES RIGHTS AUSTRALIA
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl">
          our kids deserve to live life knowing their dad
          <br/>
          <i>
          Fathers' Rights Australia is here for fathers, children and families.
          
            </i>
            </p>
          <div className="mt-8">
            <a
              href="#about"
              className={`px-6 py-3 ${
                theme === "light"
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-yellow-500 hover:bg-yellow-600"
              } text-white font-semibold rounded-md shadow-md transition`}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      {/* dsfsdf */}
      <div className="flex flex-col md:flex-col justify-between items-center h-full bg-gray-100 gap-4 p-4">
        {/* First Container */}
        <div className="animate-fadeIn flex flex-col md:flex-row lg:flex-row bg-white shadow-lg justify-center items-center rounded-lg m-4 p-4 overflow-hidden w-full transform transition duration-500 hover:scale-105 hover:shadow-xl">
          <img
            src={ourMission}
            alt="All bout children"
            className="lg:w-1/4 lg:h-1/2  object-cover"
          />
          <div className="p-6">
            <h2 className="md:text-6xl text-4xl font-bold text-gray-800 mb-4">
              IT'S ALL ABOUT THE CHILDREN!
            </h2>
            <p className="text-gray-600 text-2xl">
              We deeply appreciate your support for the important work being
              done by Clarrie Holden and the team at Fathers' Rights Australia.
              Their efforts are focused on driving meaningful change and
              supporting various projects aimed at raising awareness and
              fostering progress. To learn more about Clarrie's initiatives,
              please visit us at:
            </p>
          </div>
        </div>

        {/* Second Container */}
        <div className="animate-fadeIn flex flex-col md:flex-row lg:flex-row bg-white shadow-lg justify-center items-center rounded-lg m-4 p-4 overflow-hidden w-full transform transition duration-500 hover:scale-105 hover:shadow-xl">
          <img
            src={joinUs}
            alt="Join Team"
            className="lg:w-1/4 lg:h-1/2  object-cover"
          />
          <div className="p-6">
            <h2 className="md:text-6xl text-4xl font-bold text-gray-800 mb-4">
              JOIN OUR TEAM TODAY!
            </h2>
            <p className="text-gray-600 text-2xl">
              Join the team and be part of the movement for change with
              Children's Rights Australia. Membership is completely FREE and
              ensures you stay informed about the latest news, updates, and
              activities.We warmly invite you to get involved with our projects
              in any capacity that suits you. Together, we can make a meaningful
              difference. Thank you for your support!
            </p>
          </div>
        </div>
      </div>

      {/* dfdfdf */}
    </div>
  );
};

export default Home;
