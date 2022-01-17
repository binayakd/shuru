module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // sans: ['Roboto']
      sans:['"Share Tech Mono"'],
      display:['"Major Mono Display"'],
      condensed:['"Saira Extra Condensed"']
    },
    extend: {
      colors: {
        // 'background': '#1a1a1a',
        // 'primary': '#FFFDEA',
        // 'secondary': '#5c5c5c'
        'background': '#191a19',
        'title': '#0adb86',
        'primary': '#fffbff',
        'secondary': '#686765'
      }
    },
  },
  plugins: [],
}
