module.exports = {
  mode: "jit",
  purge: ["./**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'primary':"#f04935",
      },
      fontFamily: {
        inter:["Inter","sans-serif"]
        },
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
