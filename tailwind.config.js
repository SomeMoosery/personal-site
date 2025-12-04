/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#183f27',
        'red': '#f2170a',
        'cream': '#f4f3eb',
      },
      fontFamily: {
        'heading': ['"obviously-narrow"', 'Arial Narrow', 'Arial', 'sans-serif'],
        'body': ['"obviously"', 'Arial', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-wave': 'marquee-wave 25s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        'wave': 'wave 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-wave': {
          '0%': { transform: 'translateX(0%) translateY(0px)' },
          '100%': { transform: 'translateX(-100%) translateY(0px)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
