/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        default: 'var(--color-bg-default)',
        'primary-100': 'var(--color-primary-100)',
        'primary-200': 'var(--color-primary-200)',
        'primary-300': 'var(--color-primary-300)',
        'primary-400': 'var(--color-primary-400)',
        'primary-500': 'var(--color-primary-500)',
        page: 'var(--color-bg-page)',
        paper: 'var(--color-white)',
        'paper-hover': 'var(--color-gray-100)',
      },

      textColor: {
        default: 'var(--color-gray-900)',
        'primary-500': 'var(--color-primary-500)',
        'primary-default': 'var(--color-text-primary-default)',
      },

      borderColor: {
        'paper-hover': 'var(--color-gray-200)',
      },

      fontFamily: {
        sans: ['var(--font-family-sans)'],
      },
    },
  },
  plugins: [],
};
