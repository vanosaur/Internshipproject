// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Add this line for the App Router
    './pages/**/*.{js,jsx}', // Keep this if you also have a 'pages' directory
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Make sure this covers your components
  ],
  theme: {
    extend: {
      // You might also want to define your custom container width here
      // if 'container-1470' is a custom utility and not part of a CSS import.
      // For example:
      container: {
        screens: {
          '1470': '1470px',
        },
        center: true, // Optional: To center your custom containers
      },
    },
  },
  plugins: [],
}
