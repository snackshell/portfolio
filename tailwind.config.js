/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace']
      },
      colors: {
        'terminal-green': '#00ff41',
        'terminal-dim': '#0c4616',
        'cyber-black': '#0a0f0d',
        'cyber-blue': '#0ff4c6',
        'cyber-pink': '#ff2a6d',
        'cyber-yellow': '#d6f264',
        'grid-line': 'rgba(0, 255, 65, 0.05)'
      },
      animation: {
        'terminal-blink': 'blink 1s step-end infinite',
        'matrix-glow': 'matrixGlow 2s ease-in-out infinite alternate',
        'pulse-glow': 'pulseGlow 2s infinite'
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
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 255, 65, 0.3)' },
          '50%': { boxShadow: '0 0 15px rgba(0, 255, 65, 0.6)' },
        }
      },
    },
  },
  plugins: [],
};
