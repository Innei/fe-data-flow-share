/** @type {import('tailwindcss').Config} */
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          'color-scheme': 'light',
          primary: '#33A6B8',
          secondary: '#A8D8B9',
          accent: '#33A6B8',
          'accent-content': '#fafafa',
          neutral: '#C7C7CC',
          'base-100': '#fff',
          'base-content': '#000',
          info: '#007AFF',
          success: '#34C759',
          warning: '#FF9500',
          error: '#FF3B30',
          '--rounded-btn': '1.9rem',
          '--tab-border': '2px',
          '--tab-radius': '.5rem',
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
    iconsPlugin({
      collections: {
        ...getIconCollections(['mingcute']),
      },
    }),
  ],
}
