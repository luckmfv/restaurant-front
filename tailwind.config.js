/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
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
  plugins: []
}
