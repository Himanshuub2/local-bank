module.exports = {
  images: {
    unoptimized: true,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screen:{
      "sm":"600px",
      "md":"868",
      "lg":"1024"
    },
    extend: {},
  },
  plugins: [],
}