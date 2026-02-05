import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      colors: {
        black: '#050505',
        gold: '#D4AF37',
        red: '#D32F2F',
        background: '#050505',
        foreground: '#ffffff',
      },
      backgroundColor: {
        primary: '#050505',
        accent: '#D4AF37',
        danger: '#D32F2F',
      },
      textColor: {
        primary: '#ffffff',
        accent: '#D4AF37',
        danger: '#D32F2F',
      },
      borderColor: {
        gold: '#D4AF37',
        red: '#D32F2F',
      },
    },
  },
  plugins: [],
};

export default config;
