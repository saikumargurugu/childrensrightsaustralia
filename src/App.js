import React, { useEffect, useRef } from "react";
import "./App.css";
import AboutPage from "./Components/About/About";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar";
import ServicesPage from "./Components/Servics/Servics";
import ContactPage from "./Components/Contact/Contact";

const App = () => {
  const appRef = useRef(null);

  useEffect(() => {
    const handleScroll = (e) => {
      const target = e.target.closest("[data-scroll]");
      console.log(target);
      if (target) return; // Skip scrolling if triggered by react-scroll
      e.preventDefault(); // Prevent default scrolling behavior
      const container = appRef.current;
      if (container) {
        const scrollAmount = 100; // Adjust for incremental scrolling
        const direction = e.deltaY > 0 ? 10 : -10; // Determine scroll direction
        container.scrollBy({
          top: scrollAmount * direction,
          behavior: "smooth",
        });
      }
    };

    const container = appRef.current;
    container.addEventListener("wheel", handleScroll);

    return () => container.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div ref={appRef} className="h-screen scrollable-container ">
      <NavBar />
      <div id="home" className="h-screen">
        <Home />
      </div>
      <div id="about" className="h-screen">
        <AboutPage />
      </div>
      <div id="Services" className="h-screen">
        <ServicesPage />
      </div>{" "}
      <div id="Contact" className="h-screen">
        <ContactPage />
      </div>
    </div>
  );
};

export default App;
