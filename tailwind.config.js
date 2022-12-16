/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html", "./theme/**/*.html",  "./themes/"],
  theme: {
    extend: {
      fontFamily: {
        'Kaisei': ['Kaisei Opti', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif'],
        'Alegreya': ['Alegreya Sans', 'sans-serif'],
        'DM': ['DM Serif TEXT', 'sans-serif']
        

      },

      colors:{
        "donate_color" : ['#D78928', '#D78928'],
        "hadley_gold" : ['#E0CAA0', '#E0CAA0'],
        "second_color" : ['#251E15', '#251E15'],
        "join_color" : ['#8F4B4B', '#8F4B4B']
      }
    }
  },
  variants: {},
  plugins: [
      require('@tailwindcss/typography'),
  ],
};