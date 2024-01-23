/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/index.html', './src/renderer/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#17181A',
      red: {
        100: '#F47690;',
        500: '#EA3A3D',
        700: '#b61f22',
        800: '#961e20',
        900: '#7d1f21',
        950: '#440b0c',
      },
      orange: '#F3654A',
      green: '#1AD598',
      gray: {
        100: '#F1F5F7',
        150: '#F1F4F9',
        200: '#E9ECF2',
        250: '#D9E1E7',
        300: '#ACB3C7',
        350: '#99B2C6',
        400: '#809FB8',
        450: '#6E6D86',
        500: '#384455',
        550: '#898989',
      },
      blue: {
        100: '#12AFF0',
        200: '#377DFF',
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      serif: ['Montserrat', 'serif'],
    },
    extend: {
      rotate: {
        4: '-4.254deg',
        44: '4.254deg',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
