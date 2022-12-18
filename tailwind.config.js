/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        base: ['Ubuntu', 'Arial', 'sans-serif'],
        title: ['Comfortaa', 'Arial', 'sans-serif']
      },
      fontSize: {
        title: {
          fontSize: '1.25rem',
          lineHeight: '1.75rem'
        }
      }
    }
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-scrollbar')
  ]
}
