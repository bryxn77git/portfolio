/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'text': 'var(--text)',
      'background': 'var(--background)',
      'background-complement': 'var(--background-complement)',
      'primary': 'var(--primary)',
      'secondary': 'var(--secondary)',
      'accent': 'var(--accent)',
     },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'poppins'],
      },
    },
  },
  plugins: [],
}

