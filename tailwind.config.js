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
        black: 'hsla(0, 0%, 0%, 1)',
        white: 'hsla(0, 0%, 100%, 1)',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      fontSize: {
        h1: [
          //h1h1
          '96px',
          {
            lineHeight: '1.21',
            fontWeight: '700',
          },
        ],
        h2: [
          //h2
          '64px',
          {
            lineHeight: '1.44',
            fontWeight: '700',
          },
        ],
        h3: [
          //h3
          '48px',
          {
            lineHeight: '1.50',
            fontWeight: '700',
          },
        ],
        h4: [
          //h4
          '40px',
          {
            lineHeight: '1.50',
            fontWeight: '700',
          },
        ],
        h5: [
          //h5
          '32px',
          {
            lineHeight: '1.50',
            fontWeight: '700',
          },
        ],
        h6: [
          //h6
          '24px',
          {
            lineHeight: '1.33',
            fontWeight: '700',
          },
        ],
        subHeading: [
          //sub headling
          '18px',
          {
            lineHeight: '1.33',
            fontWeight: '600',
          },
        ],
        body: [
          //body
          '16px',
          {
            lineHeight: '1.25',
            fontWeight: '400',
          },
        ],
        subtitle: [
          //subtitle
          '14px',
          {
            lineHeight: '1.43',
            fontWeight: '400',
          },
        ],
        caption: [
          //caption
          '12px',
          {
            lineHeight: '1.33',
            fontWeight: '400',
          },
        ],
      },
    },
  },
  plugins: [],
};
