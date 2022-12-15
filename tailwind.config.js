/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html", "./theme/**/*.html",  "./themes/"],
  theme: {
    extend: {
      fontFamily: {
        'mainFont': ['Kaisei Opti', 'sans-serif'],
        'secondFont': ['Inter', 'sans-serif']
      },

      colors:{
        "donate_color" : ['#D78928', '#D78928'],
        "header_footer" : ['#E0CAA0', '#D78928'],
        "second_color" : ['#251E15', '#D78928'],
      }
    }
  },
  variants: {},
  plugins: [
      require('@tailwindcss/typography'),
  ],
};