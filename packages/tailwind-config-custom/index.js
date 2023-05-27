/** @type {import('tailwindcss').Config} */
const defaultConfig = require("tailwindcss/defaultConfig");
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  extends: defaultConfig,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.tsx",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: defaultTheme,
  },
  plugins: [],
}
