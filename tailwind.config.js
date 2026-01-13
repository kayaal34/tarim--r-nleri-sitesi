/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          deep: '#2D4F1E',
          medium: '#4A6B3A',
          light: '#6B8E5A',
        },
        sage: {
          DEFAULT: '#DAD7CD',
          light: '#E8E6DF',
          dark: '#C5C2B8',
        },
        cream: {
          DEFAULT: '#FAFAF5',
          warm: '#F5F5ED',
        },
        gold: {
          DEFAULT: '#C4A574',
          light: '#D4B584',
          dark: '#B49564',
        },
        bronze: {
          DEFAULT: '#8B6F47',
          light: '#9B7F57',
          dark: '#7B5F37',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        display: ['Lato', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(196, 165, 116, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(196, 165, 116, 0.8)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(196, 165, 116, 0.5)',
        'glow-lg': '0 0 30px rgba(196, 165, 116, 0.6)',
      },
    },
  },
  plugins: [],
}
