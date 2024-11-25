import React, { useContext } from "react";
import { ThemeContext } from "../../Theme/ThemeContext";

const Divider = () => {
  const { theme } = useContext(ThemeContext); // Access the current theme

  return (
    <div
      className={`w-full border-t ${theme === "light" ? "border-gray-300" : "border-gray-600"} my-8 md:my-16`}
      style={{ borderWidth: '1px', height:'0px' }} // Make sure the border is thin
    />
  );
};

export default Divider;
