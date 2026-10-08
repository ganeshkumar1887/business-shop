/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: {
            50: '#FAF5FF',
            100: '#F3E8FF',
            200: '#E9D5FF',
            300: '#D8B4FE',
            400: '#C084FC',
            500: '#A855F7',
            600: '#9333EA',
            700: '#7E22CE',
            800: '#6B21A8',
            900: '#4C1D95',
            950: '#2E1065',
          },
          rose: {
            50: '#FFF1F2',
            100: '#FFE4E6',
            200: '#FECDD3',
            300: '#FDA4AF',
            400: '#FB7185',
            500: '#F43F5E',
            600: '#E11D48',
            700: '#BE185D',
            800: '#9F1239',
            900: '#881337',
          },
          gold: {
            50: '#FFFDF0',
            100: '#FEF9C3',
            200: '#FEF08A',
            300: '#FDE047',
            400: '#FACC15',
            500: '#EAB308',
            600: '#CA8A04',
            700: '#A16207',
            800: '#854D0E',
            900: '#713F12',
          },
          cream: {
            50: '#FFFEFA',
            100: '#FDFBF7',
            200: '#FAF5EC',
            300: '#F4EBD9',
            400: '#EADEBE',
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        outfit: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        cinzel: ['"Cinzel"', 'serif'],
        'cinzel-dec': ['"Cinzel Decorative"', '"Cinzel"', 'serif'],
        handwriting: ['"Great Vibes"', 'cursive'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -5px rgba(107, 33, 168, 0.15), 0 4px 6px -2px rgba(234, 179, 8, 0.1)',
        'luxury-hover': '0 20px 40px -10px rgba(107, 33, 168, 0.25), 0 8px 12px -3px rgba(234, 179, 8, 0.2)',
        'glow-gold': '0 0 25px rgba(234, 179, 8, 0.35)',
        'glow-purple': '0 0 25px rgba(147, 51, 234, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
