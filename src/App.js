import React, { useEffect, useRef } from "react";
import "./App.css";
import AboutPage from "./Components/About/About";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar";
import ServicesPage from "./Components/Servics/Servics";
import ContactPage from "./Components/Contact/Contact";

const App = () => {
  const appRef = useRef(null);

  // Throttle function to limit the scroll event frequency
  const throttle = (func, delay) => {
    let lastTime = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastTime >= delay) {
        lastTime = now;
        return func(...args);
      }
    };
  };

  useEffect(() => {
    const handleScroll = (e) => {
      const target = e.target.closest("[data-scroll]");
      if (target) return; // Skip scrolling if triggered by react-scroll

      // Prevent the default scroll behavior (for custom scrolling)
      e.preventDefault();

      // Adjusting smooth scrolling
      const container = appRef.current;
      if (container) {
        const scrollAmount = 100; // Customize this value as needed
        const direction = e.deltaY > 0 ? 1 : -1; // Determine scroll direction

        container.scrollBy({
          top: direction * scrollAmount,
          behavior: "smooth",
        });
      }
    };

    const container = appRef.current;
    const throttledHandleScroll = throttle(handleScroll, 100); // 100ms delay for throttling

    container.addEventListener("wheel", throttledHandleScroll, { passive: false });

    return () => container.removeEventListener("wheel", throttledHandleScroll);
  }, []);

  return (
    <div ref={appRef} className=" scrollable-container">
      <NavBar />
      <div id="home" className=" pb-1">
        <Home />
      </div>
      <div id="about" className=" pb-1">
        <AboutPage />
      </div>
      <div id="Services" className=" pb-1">
        <ServicesPage />
      </div>
      <div id="Contact" className=" pb-1">
        <ContactPage />
      </div>
    </div>
  );
};

export default App;
