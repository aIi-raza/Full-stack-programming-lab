module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./context/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        rust: "#E87722",
        ink: "#202020"
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-open-sans)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 2px 10px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};
