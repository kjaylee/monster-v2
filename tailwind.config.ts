import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      colors: {
        // Dark Mode (Primary)
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // Accent Colors
        cyan: {
          500: '#06b6d4',
          600: '#0891b2',
        },
        purple: {
          500: '#a855f7',
          600: '#9333ea',
        },
        emerald: {
          500: '#10b981',
          600: '#059669',
        },
        amber: {
          500: '#f59e0b',
          600: '#d97706',
        },
        rose: {
          500: '#f43f5e',
          600: '#e11d48',
        },
      },
      backgroundColor: {
        primary: '#0f172a',
        secondary: '#1e293b',
        tertiary: '#334155',
      },
      textColor: {
        primary: '#f1f5f9',
        secondary: '#cbd5e1',
        muted: '#94a3b8',
      },
      borderColor: {
        primary: '#334155',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.200'),
            a: {
              color: theme('colors.amber.200'),
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            },
            'a:hover': {
              color: theme('colors.amber.100'),
            },
            strong: {
              color: theme('colors.white'),
            },
            code: {
              color: theme('colors.amber.100'),
            },
            'code::before': {
              display: 'none',
            },
            'code::after': {
              display: 'none',
            },
            blockquote: {
              color: theme('colors.slate.200'),
              borderColor: theme('colors.amber.400'),
              backgroundColor: 'rgba(17, 24, 39, 0.6)',
            },
            h1: {
              color: theme('colors.amber.100'),
            },
            h2: {
              color: theme('colors.amber.200'),
            },
            h3: {
              color: theme('colors.white'),
            },
            table: {
              borderColor: theme('colors.slate.700'),
            },
            'tr:nth-child(odd)': {
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.slate.100'),
            a: {
              color: theme('colors.amber.200'),
            },
            blockquote: {
              borderColor: theme('colors.amber.400'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
