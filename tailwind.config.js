/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'darknavy': '#0b0537',
      // "#020C35", 
      'white' : "#FFFFFF",
      'offwhite' : '#F2F2F2',

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
  ],
  mode: "jit",
}
