/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mainDark: '#222222',
        mainGray: '#959395',
        mainBlue: '#007CED',
        mainWhite: '#F5F5F5',
        mainShadow: '#F1F1F1',
        secBlue: '#0476DE',
        secGray: '#4F4F4F',
        thiGray: '#252525',
      },
      // maybe will be used
      backgroundImage: {
        hero: "url('/ParhamMosadeqzadeh.jpg')",
      },
    },
  },
  plugins: [],
};
