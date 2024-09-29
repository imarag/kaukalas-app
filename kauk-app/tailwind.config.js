/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
        '2xl': '8rem',
      },
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('images/sea-view-951852_1920-80.jpg')",
      },
      colors: {
        primary: '#001A4C',
        secondary: '#C5D7F9',
        light: '#fafafa',
        danger: '#f28b82',
        tertiary: '#001D56'
      }
    },
  },
  plugins: [],
}