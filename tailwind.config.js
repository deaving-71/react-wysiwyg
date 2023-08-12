/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        marshland: {
          50: "#f5f8f5",
          100: "#dee9de",
          200: "#bcd3bc",
          300: "#93b595",
          400: "#6d9471",
          500: "#537957",
          600: "#406144",
          700: "#364f3a",
          800: "#2e4130",
          900: "#2a372d",
          950: "#0a0f0b",
        },
      },
    },
  },
  plugins: [],
};
