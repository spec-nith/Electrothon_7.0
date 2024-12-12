/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bd': '#D9D9D9',
      },
      fontFamily: {
        pirata: ['Pirata One', 'sans-serif'],
      },
      screens: {
        xs: '360px', 
      },

    },
  },
  plugins: [],
};
