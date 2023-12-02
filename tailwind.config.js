/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow:{
        "get-started" : "drop-shadow(0 1px 2px rgba(0,0,0,.1)) drop-shadow(0 1px 1px rgba(0,0,0,.06))",
      }
      
    },
  },
  plugins: [],
}
