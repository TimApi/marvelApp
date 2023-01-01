/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans': ['Noto Sans', 'sans-serif']
      },
      colors: {
        'DarkPurpleC':'#7E3ABF',
        'YellowC':'#FFD443',
        'BlackC':'#0E091B',
        'GrayC':'#F5F1FF',
        'LightPurpleC':'#F2A4FF',
      },
    },
    backgroundImage: {
      'hero-img': "url('/src/assets/images/hero.jpg')",
      'knight-img': "url('/src/assets/images/knight.jpg')",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
