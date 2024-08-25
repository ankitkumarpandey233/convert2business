// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths according to your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        litia: ['"Litia One"', 'sans-serif'], // Add custom font here
      },
    },
  },
  plugins: [
    require('daisyui'), // Add Daisy UI as a plugin
  ],
  daisyui: {
    themes: ["light"], // Set Daisy UI theme to 'light'
  },
};
