/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,js}'],
  theme: {
    extend: {
      colors: {
        background: '#0f0e0d',
        surface: '#141312',
        'surface-container': '#1c1a18',
        'surface-container-high': '#24221f',
        'surface-container-highest': '#2e2b27',
        primary: '#ffb59d',
        'primary-container': '#ff5e1e',
        'on-primary-container': '#ffffff',
        secondary: '#e0d9cd',
        'secondary-container': '#3d3830',
        'on-surface': '#f6f3ed',
        'on-surface-variant': '#c9c2b7',
        outline: '#4a443c',
        'outline-variant': '#2b2824',
        accent: '#ff7a3d',
        linen: '#f6f3ed',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        sans: ['Space Grotesk', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'blob-slow': 'blob 18s infinite alternate cubic-bezier(0.4, 0, 0.2, 1)',
        'blob-reverse': 'blob-rev 22s infinite alternate cubic-bezier(0.4, 0, 0.2, 1)',
        'float-subtle': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(40px, -30px) scale(1.15) rotate(10deg)' },
          '100%': { transform: 'translate(-20px, 25px) scale(0.95) rotate(-8deg)' },
        },
        'blob-rev': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(-50px, 35px) scale(1.12) rotate(-12deg)' },
          '100%': { transform: 'translate(30px, -20px) scale(0.92) rotate(6deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
      },
    },
  },
  plugins: [],
};