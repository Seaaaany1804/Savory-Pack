/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ff5404",
        "secondary": "#80bc7c",
        "tertiary": "#C16E49",
        "white": "#EEF0E5",
        "gray": "#f8f4f4",
      },
      fontFamily: {
        "poppins": ['Poppins' , 'sans-serif'],
        "dm-serif": ['DM Serif Text' , 'serif'],
      },
    },
  },
  plugins: [],
}