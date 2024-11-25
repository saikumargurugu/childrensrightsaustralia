import React, { useContext } from "react";
import { ThemeContext } from "../../Theme/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md hover:scale-110 transition transform duration-300"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m6.364 2.636l-.707.707M21 12h-1M18.364 17.364l-.707-.707M12 21v-1m-6.364-2.636l.707-.707M3 12h1M5.636 6.636l.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 118.646 3.646 9 9 0 0020.354 15.354z"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
