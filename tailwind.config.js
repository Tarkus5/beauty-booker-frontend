import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            default: {
              50: '#E1E1EB',
              100: '#D2D2E1',
              200: '#B3B3CD',
              300: '#9494B9',
              400: '#7676A4',
              500: '#5C5C8B',
              600: '#48486C',
              700: '#33334E',
              800: '#1F1F2F',
              900: '#0B0B10',
              foreground: '#FFF',
              DEFAULT: '#1F1F2F',
            },
            primary: {
              50: '#F7FCE5',
              100: '#F1F9CE',
              200: '#E4F3A1',
              300: '#D7ED74',
              400: '#CAE747',
              500: '#BBDE1D',
              600: '#95B117',
              700: '#6F8411',
              800: '#49570B',
              900: '#232A05',
              foreground: '#fff',
              DEFAULT: '#D7ED74',
            },
            success: {
              200: '#E5FAE6',
              800: '#297B32',
              foreground: '#FFF',
              DEFAULT: '#297B32',
            },
            warning: {
              200: '#FEF4E1',
              500: '#F9970C',
              foreground: '#FFF',
              DEFAULT: '#F9970C',
            },
            danger: {
              200: '#FFEBEB',
              500: '#E83838',
              foreground: '#FFF',
              DEFAULT: '#E83838',
            },
            background: '#F7F7F5',
            foreground: '#1F1F2F',
            content1: {
              DEFAULT: '#FFF',
              foreground: '#000',
            },
            focus: '#BBDE1D',
            overlay: '#000000',
            divider: 'FFF',
          },
        },
        dark: {
          colors: {
            default: {
              50:  '#1F1F2F',
              100: '#2A2A3E',
              200: '#3F3F57',
              300: '#55556F',
              400: '#6A6A88',
              500: '#8080A0',
              600: '#9696B8',
              700: '#ACACD0',
              800: '#C2C2E8',
              900: '#D8D8FF',
              foreground: '#E1E1EB',
              DEFAULT:    '#2A2A3E',
            },
            primary: {
              50:  '#F7FCE5',
              100: '#F1F9CE',
              200: '#E4F3A1',
              300: '#D7ED74',
              400: '#CAE747',
              500: '#BBDE1D',
              600: '#95B117',
              700: '#6F8411',
              800: '#49570B',
              900: '#232A05',
              foreground: '#fff',
              DEFAULT:    '#D7ED74',
            },
            success: {
              200:       '#E5FAE6',
              800:       '#297B32',
              foreground:'#FFF',
              DEFAULT:   '#297B32',
            },
            warning: {
              200:       '#FEF4E1',
              500:       '#F9970C',
              foreground:'#FFF',
              DEFAULT:   '#F9970C',
            },
            danger: {
              200:       '#FFEBEB',
              500:       '#E83838',
              foreground:'#FFF',
              DEFAULT:   '#E83838',
            },
            background: '#1E1E29',
            foreground: '#E1E1EB',
            content1: {
              DEFAULT:    '#2A2A3E',
              foreground: '#E1E1EB',
            },
            focus:    '#BBDE1D',
            overlay:  '#00000080',
            divider:  '#3F3F57',
          },
        },
      },
      layout: {
        disabledOpacity: '0.5',
      },
    }),
  ],
};
