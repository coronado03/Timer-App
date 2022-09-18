module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        'primary': ''
      },

      fontFamily: {
        secondary: ["SECONDARY", 'sans-serif'],
        
      }, //end of fontFamily
    },
  },
  plugins: [],
}
