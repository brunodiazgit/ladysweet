/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'laptop': '1025px',
      'md': '800px',
      'xs': '460px'
      // => @media (min-width: 1025px) { ... }
    },
    extend: {
    },
  },
  variants: {
    filter: ['responsive', 'hover'],
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}

