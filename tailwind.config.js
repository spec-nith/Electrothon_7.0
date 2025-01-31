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
      fontFamily: {
        pirata: ['"Pirata One"', 'cursive'],
        inter: ['"Inter"', 'sans-serif'],
        humanistika: ['"Linotype Humanistika W01"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      screens: {
        'custom': { min: '504px', max: '639px' }, // Custom range
        'xs': {min:'360px', max:'503px'},
      },
      keyframes: {
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" }
        },
        scrollY: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" }
        }
      },
      animation: {
        scrollX: "scrollX var(--duration) linear infinite",
        scrollY: "scrollY var(--duration) linear infinite"
      }
            
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.mask-horizontal': {
          '@apply [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_5%,rgba(0,0,0,1)_95%,rgba(0,0,0,0)_100%)]': {},
          '@apply [mask-size:cover]': {},
          '@apply [mask-repeat:no-repeat]': {},
        },
        '.mask-vertical': {
          '@apply [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0)_100%)]': {},
          '@apply [mask-size:cover]': {},
          '@apply [mask-repeat:no-repeat]': {},
        },
        '.paused .animate-scrollX, .paused .animate-scrollY': {
          'animation-play-state': 'paused !important',
        },
        '.reverse-x': {
          'animation-direction': 'reverse',
          'animation-delay': '-3s',
        },
      });
    },
  ],
};


