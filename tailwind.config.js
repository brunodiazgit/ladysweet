/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      filter: {
        'red-hover': 'brightness(0) saturate(100%) invert(22%) sepia(100%) saturate(7463%) hue-rotate(1deg) brightness(101%) contrast(102%);',
      }
    },
  },
  variants: {
    filter: ['responsive', 'hover'],
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}

