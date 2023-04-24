/** @type {import('tailwindcss').Config} */
const theme2 = { bg: 'linear-gradient(45deg, #eb7373, #ff4545)', headerUl: 'white', main: '#121212cc' };
const theme1 = {
  bg: 'linear-gradient(45deg, #00000099,#00000099)',
  headerUl: 'white',
  main: 'linear-gradient(90deg, #121212cc, black)',
  gradient: 'linear-gradient(180deg, transparent,#121212cc)',
};

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: theme1.bg,
        headerUl: theme1.headerUl,
        mainText: theme1.headerUl,
      },
      backgroundImage: {
        headfooter: theme1.bg,
        gradient: theme1.gradient,
        main: theme1.main,
        imagen: 'url(/img/banner.jpg)',
      },
    },
  },
  plugins: [],
};
