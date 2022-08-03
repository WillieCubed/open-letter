/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Work Sans", "sans-serif"]
      },
      colors: {
        primary: {
          DEFAULT: '#3C84FC',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#64748b',
        },
        'on-surface': {
          DEFAULT: '#000000',
          dark: '#FAFAFA',
        },
        background: {
          DEFAULT: '#F5F5F5',
          dark: '#1e293b',
        },
      },
    },
    screens: {
      sm: '600px',
      md: '840px',
      lg: '960px',
      xl: '1240px',
      '2xl': '1440px',
    },
  },
  plugins: [],
};
