module.exports = {
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Custom breakpoints
        xsm: "425px",      // Small mobile devices
        sm: "480px",       // Small tablets or larger phones
        md: "640px",       // Medium tablets
        tablet: "768px",   // Tablets and larger devices
        lg: "1024px",      // Desktops
        xl: "1280px",      // Larger desktops
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      fontFamily: {
        "Merriweather": "serif",
        "Open Sans": "sans-serif",
      },    
    },
  },
  plugins: [],
  variants: {
    extend: {
      scrollBehavior: ['responsive', 'motion-safe', 'motion-reduce'],
    },
  },
}
