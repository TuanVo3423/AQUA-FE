/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        // primary: '#FD3D57'#2aa6e3
        // primary: '#1435c3',
        primary: '#2aa6e3',
      },
      fontFamily:{
        poppins:  "'Poppins', sans-serif",
        roboto:  "'Roboto', sans-serif",
      }
    },
  },
  variants: {
    extend: {
      visibility: ['group-hover'],
      display: ['group-hover']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}