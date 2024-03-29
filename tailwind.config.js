/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      "2xl": { max: "1535px" },
      // => @media(max-width: 1535px) { ... }
      xl: { max: "1279px" },
      // => @media(max-width: 1279px) { ... }
      lg: { max: "1025px" },
      // => @media(max-width: 1025px) { ... }
      ia: { max: "821px" },
      // => @media(max-width: 821px) { ... }
      md: { max: "767px" },
      // => @media(max-width: 767px) { ... }
      sm: { max: "640px" },
      // => @media(max-width: 640px) { ... }
      xs: { max: "479px" },
      // => @media(max-width: 479px) { ... }
    },
  },

  plugins: [],
};
