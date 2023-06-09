/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      mobile: "200px",
      between: "580px",
      tablet: "720px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "950px",
      lg: "1024px",
      laptop: "960px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1900px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
