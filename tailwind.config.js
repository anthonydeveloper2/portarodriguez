/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#080b09',
        secondary: '#111713',
        accent: '#c5f36b',
      }
    },
  },
  plugins: [],
}
