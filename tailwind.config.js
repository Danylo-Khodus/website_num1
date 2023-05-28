/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      'clr-white': 'rgb(255, 255, 255)',
      'clr-black': 'rgb(0, 0, 0)',
      'clr-dark': 'rgb(35, 39, 42)',
      'clr-hero-blue': '#404eed',
      'clr-btn-blue': 'rgb(88, 101, 242)',
      'clr-darker-white': 'rgb(246, 246, 246)',
    }
  },
  plugins: [],
}

