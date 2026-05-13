/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#E07B20',
          'orange-light': '#F5A623',
          dark: '#1a1a1a',
          gray: '#666666',
          'light-gray': '#f5f5f5',
          border: '#e0e0e0',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
