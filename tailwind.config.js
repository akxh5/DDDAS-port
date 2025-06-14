/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'charcoal': {
          900: '#0a0a0a',
          800: '#1a1a1a',
          700: '#2a2a2a',
          600: '#3a3a3a',
        },
        'space-grey': {
          900: '#0f0f23',
          800: '#1a1a2e',
          700: '#16213e',
          600: '#0f3460',
        },
        'solana': {
          purple: '#9945ff',
          green: '#14f195',
          blue: '#00d4ff',
          gradient: {
            start: '#9945ff',
            middle: '#14f195',
            end: '#00d4ff'
          }
        },
        'cyber-cyan': {
          500: '#00d4ff',
          400: '#33ddff',
          300: '#66e5ff',
        },
        'neon-green': {
          500: '#14f195',
          400: '#47f4a8',
          300: '#7af7bb',
        }
      },
      backgroundImage: {
        'solana-gradient': 'linear-gradient(135deg, #9945ff 0%, #14f195 50%, #00d4ff 100%)',
        'solana-gradient-reverse': 'linear-gradient(135deg, #00d4ff 0%, #14f195 50%, #9945ff 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px #9945ff40, 0 0 30px #14f19540' },
          '100%': { boxShadow: '0 0 30px #9945ff60, 0 0 50px #14f19560, 0 0 70px #00d4ff40' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};