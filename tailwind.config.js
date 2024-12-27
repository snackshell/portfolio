/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'matrix-green': '#00ff41',
        'dim-matrix': '#0c4616',
        'terminal-black': '#0a0f0d',
        'dark-gray': '#1a1f1d',
      },
      animation: {
        'terminal-blink': 'blink 1s step-end infinite',
        'matrix-glow': 'matrixGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        matrixGlow: {
          '0%': { textShadow: '0 0 5px rgba(0, 255, 65, 0.3)' },
          '100%': { textShadow: '0 0 8px rgba(0, 255, 65, 0.5)' },
        },
      },
    },
  },
  plugins: [],
};
