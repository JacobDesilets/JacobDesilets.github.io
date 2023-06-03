/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html, js}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Lexend', 'system-ui'],
      'title': ['Bebas Neue'],
    },
    extend: {},
  },
  plugins: [],
  screens: {
    'z0': { min: '0px', max: '299px' },
    '2xs': { min: '300px' },
    'xs': { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
    'sm': { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
    'md': { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
    'lg': { min: '1024px' }, // Desktop smallest.
    'xl': { min: '1280px' }, // Desktop wide.
    '2xl': { min: '1536px' } // Desktop widescreen.
  },
}

