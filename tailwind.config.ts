import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#061A45',
          dark: '#061A45',
          medium: '#082B6F',
        },
        gold: {
          DEFAULT: '#D99A22',
          light: '#F0B93A',
        },
        cream: {
          DEFAULT: '#F7EFE2',
          light: '#FDF8F2',
          medium: '#EFE1C8',
        },
        coffee: '#6B3F1D',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #061A45 0%, #082B6F 50%, #0A3580 100%)',
      },
    },
  },
  plugins: [],
}
export default config
