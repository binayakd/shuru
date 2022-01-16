module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto']
    },
    extend: {
      colors: {
        'background': '#1a1a1a',
        'primary': '#FFFDEA',
        'secondary': '#5c5c5c'
      }
    },
  },
  plugins: [],
}
