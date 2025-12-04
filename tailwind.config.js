/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#230fd3',
        'vibrant-orange': '#ff6a00',
        'warm-brown': '#876343',
      },
      fontFamily: {
        'mono': ['"Courier Prime"', 'Courier New', 'monospace'],
        'serif': ['Wittgenstein', 'Georgia', 'serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
