/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        '1100': '1100px'
      },
      colors: {
        'blue': '#5454D4',
        'orange': '#FF7143',
        'gray': '#696871',
        'black': '#19191B',
        'light-gray': '#F7F7FB',
        'light-card': '#F8F8F8'
      },
      fontFamily: {
        'dm-sans': ["DM Sans", 'sans-serif'],
        'mulish': ['Mulish', 'sans-serif'],
      }
    },
  },
  plugins: [],
}