/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');



module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-biz)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'accent-1': '#060606',
        'accent-2': '#161616',
        'accent-7': '#ccc',
        success: '#FF9F0c',
        cyan: '#97001E',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-0.25 em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
