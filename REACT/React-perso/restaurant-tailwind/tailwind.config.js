module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      spacing: {
        10: "2.5rem", // 40px (1rem = 16px par défaut)
        20: "5rem", // 80px
        30: "7.5rem", // 120px
      },
    },
  },
  plugins: [],
};
