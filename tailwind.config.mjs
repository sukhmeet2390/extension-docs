import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        surface: {
          950: '#0a0a0f',
          900: '#0f1117',
          800: '#151820',
          700: '#1c2030',
          600: '#252a3a',
        },
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
};
