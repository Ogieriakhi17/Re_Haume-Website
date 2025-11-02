/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
      fontFamily: {
        religath: ["Religath", "serif"],
        josefin: ["var(--font-josefin)", "sans-serif"],
      },
      letterSpacing: {
        widehero: "0.2em", // for that spaced-out RE.HAUME look
      },
    },
},
  plugins: [],
};
