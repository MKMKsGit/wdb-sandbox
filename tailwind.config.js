/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'hsla(70, 100%, 95%, 1)',
          100: 'hsla(66, 90%, 88%, 1)',
          300: 'hsla(69, 92%, 70%, 1)',
          500: 'hsla(68, 90%, 62%, 1)',
          700: 'hsla(67, 94%, 54%, 1)',
          900: 'hsla(64, 100%, 40%, 1)',
        },
        secondary: {
          50: 'hsla(0, 0%, 98%, 1)',
          100: 'hsla(0, 0%, 96%, 1)',
          300: 'hsla(0, 0%, 88%, 1)',
          500: 'hsla(0, 0%, 62%, 1)',
          700: 'hsla(0, 0%, 38%, 1)',
          900: 'hsla(0, 0%, 13%, 1)',
        },
        danger: 'hsla(357, 100%, 50%, 1)',
        warning: 'hsla(39, 100%, 56%, 1)',
        info: 'hsla(225, 100%, 60%, 1)',
        success: 'hsla(147, 83%, 44%, 1)',
      },
      fontFamily: ['Poppins', 'Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
