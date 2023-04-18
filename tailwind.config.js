/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      'menu' : '35px',
    },
    colors:{
      'darknavy': '#0b0537',
      // "#020C35", 
      'white' : "#FFFFFF",
      'offwhite' : '#F2F2F2',
      'darkgrey' : '#37363A',
      'grey' : '#878787',
      'lightgrey':'#C7C7C7',
      'cpurple':'#5B4B89',

    },
    fontFamily: {
      'kor' : ['IBM Plex Sans KR'], //IBM Plex Sans KR
      'kor2' : ['Noto Sans KR'],    //Noto Sans Korean 
      'eng-nav' : ['Syncopate'],
      'eng-title': ['Gruppo'],
    },
  },
  plugins: [
    // require('@tailwindcss/custom-forms'),
    require("tailwindcss-animation-delay"),
  ],
  mode: "jit",
}

