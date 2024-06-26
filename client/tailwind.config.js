/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      
      bgColor: "rgb(var(--color-bg) / <alpha-value>)",
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      blue: "rgb(var(--color-blue) / <alpha-value>)",
      white: "rgb(var(--color-white) / <alpha-value>)",
      yellow: "rgb(var(--color-yellow) / <alpha-value>)",
      grell: "rgb(var(--color-grell) / <alpha-value>)",
      ascent: {
        1: "rgb(var(--color-ascent1) / <alpha-value>)",
        2: "rgb(var(--color-ascent2) / <alpha-value>)",
      },
    },
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      backgroundImage:{
        'hero':  "url('./assets/backfinal.jpeg')",
      },
      fontFamily:{
        'lobster':['Lobster','sans-serif'],
        'edu':["Edu NSW ACT Foundation"],
        'Rowdies':['Rowdies'],
        'sriracha':['Sriracha'],
        'poiret':['Poiret One'],
        'Forum':['Forum'],
        'montseratt':['Montserrat Alternates'],
        'oswald':['Oswald'],
        'poppins':['Poppins'],
        'carme':['Carme'],
        'enriqueta':['Enriqueta']
      }
    },
  },
  plugins: [],
};