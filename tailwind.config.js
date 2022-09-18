module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('https://staticc.sportskeeda.com/editor/2022/07/ff92b-16579911314959-1920.jpg')",
        'footer': "url('https://i.imgur.com/ptBg4VV.png')",
      }
    },
  },
  plugins: [],
};
