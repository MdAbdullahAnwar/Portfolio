// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blob: {
          "0%": { transform: "scale(1)" },
          "33%": { transform: "scale(1.2)" },
          "66%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        blob: "blob 10s infinite",
      },
      backgroundImage: {
        "left-fade-purple":
          "radial-gradient(ellipse at left, rgba(130,69,236,0.2) 0%, rgba(130,69,236,0.1) 25%, rgba(130,69,236,0) 50%)",
      },
      screens: {
        nav: "920px",
      },
    },
  },
  plugins: [],
};
