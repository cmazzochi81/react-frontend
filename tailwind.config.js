module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
     
    },
    fontFamily:{
      'le-havre': ['Le-Havre',],
      'raleway' : ['Raleway']
    }
  },
  variants: {
    extend: {
       textColor:['active'],
    }
  },
  plugins: [require('@tailwindcss/forms')]
}