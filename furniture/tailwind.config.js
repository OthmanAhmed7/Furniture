/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "280px",
      sm: "320px",
      landscape: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        "primary-400": "#dc143c",
        "primary-100": "#ea748b",

        "neutral-100": "#fff",
        "neutral-200": "#f0f0f0",
        "neutral-300": "#f1f1f1",
        "neutral-350": "#333",
        "neutral-400": "#1c1c1c",
        "neutral-900": "#000",
      },
    },
  },
  plugins: [],
};
