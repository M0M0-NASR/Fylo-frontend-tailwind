// tailwind.config.js (or .cjs)
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue,svelte}"],
  theme: {
    // Bootstrap-like container widths
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1320px",
      },
    },

    // Optional: Bootstrap-like breakpoints
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
  },
  plugins: [],
};
