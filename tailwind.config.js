const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        main: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'main-black': 'rgb(38, 38, 38)',
      },
      keyframes: {
        scaleAndFade: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(2)' },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, theme }) {
      const newComponents = {
        '.btn-primary': {
          width: '100%',
          maxWidth: '250px',
          border: '0.0625rem solid rgb(240, 211, 121)',
          backgroundColor: theme('colors[main-black]'),
          position: 'relative',
          overflow: 'hidden',
          fontWeight: '600',
          fontSize: '20px',
          padding: '0 30px',
          borderRadius: '1rem',
          height: '3.75rem',
          display: 'block',
          '&:hover': {
            backgroundColor: theme('colors.zinc.700'),
          },
        },
        '.container-wrapper': {
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 20px',
        },
      };
      const newUtilities = {
        '.wrapper-shadow': {
          boxShadow:
            'rgb(38, 38, 38) 0px 0px 0px 10px inset, rgb(240, 211, 121) 0px 0px 0px 12px inset',
        },
      };

      addUtilities(newUtilities);
      addComponents(newComponents);
    }),
  ],
};
