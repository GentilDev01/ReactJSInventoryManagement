/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {
      colors: {
        dark: {
          primary: '#1a1a1a',
          secondary: '#242424',
          accent: '#2d2d2d',
          text: '#ffffff',
          muted: '#a3a3a3'
        },
        light: {
          primary: '#ffffff',
          secondary: '#f3f4f6',
          accent: '#e5e7eb',
          text: '#111827',
          muted: '#6b7280'
        },
      },
      keyframes: {
        enter: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        leave: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(0.9)', opacity: 0 },
        },
      },
      animation: {
        enter: 'enter 0.3s ease-out',
        leave: 'leave 0.3s ease-in forwards',
      },
    },
  },  plugins: [],
}
