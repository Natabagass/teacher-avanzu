import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: '10px'
      },
      fontFamily: {
        inter: 'inter',
        jakartaSans: 'Plus Jakarta Sans'
      },
      padding: {
        25: '100px',
        17: '70px'
      },
      height: {
        border: '1px'
      },
      width: {
        medium: '550px',
        large: '850px',
        xlarge: '1150px'
      },
      margin: {
        content: '148px'
      },
      colors: {
        base: {
          dark: '#100D13',
          black: '#1D1D1D',
          layer: '#1D1A21',
          secondary: '#222426',
          background: '#101112'
        },
        neon: {
          green: {
            main: '#CBFC00',
            50: '#F9FEE6',
            100: '#EDFBB0',
            200: '#E4F98A',
            300: '#D8F754',
            400: '#D1F533',
            500: '#C5F300',
            600: '#B3DD00',
            700: '#8CAD00',
            800: '#6C8600',
            900: '#536600'
          },
        },
        green: {
          50: '#A3FFBC',
          200: '#58C776',
          300: '#43A15C',
          400: '#2E7C44',
          500: '#1B592D',
          600: '#083818',
          700: '#001A06'
        },
        other: {
          pink: '#FBC2EB',
          teal: '#45DBC1',
          peach: '#FFBA69',
          darkBlue: '#2D8EFF'
        },
        purple: {
          main: '#8C4DFF',
          secondary: '#B48BFF',
          blue: {
            50: '#F3EDFF',
            100: '#DBC8FF',
            200: '#CAADFF',
            300: '#B188FF',
            400: '#A271FF',
            500: '#8B4DFF',
            600: '#7E46E8',
            700: '#6337B5',
            800: '#4C2A8C',
            900: '#3A206B'
          },
          50: '#100D13',
          100: '#1F1826',
          200: '#2E223A',
          300: '#3D2B50',
          400: '#4C3267',
          500: '#5B3880',
          600: '#6A3D99',
          700: '#7941B4',
          800: '#894EC6',
          900: '#9861D1',
          1000: '#A775DB'
        },
        orange: {
          ratings: '#FEC501',
          50: '#FFD6AD',
          100: '#FFAC7D',
          200: '#FF824C',
          300: '#D06637',
          400: '#A24B24',
          500: '#773110',
          600: '#4E1900',
          700: '#290400'
        },
        red: {
          50: '#FFD8C6',
          100: '#FFAC9A',
          200: '#FF816F',
          300: '#F65244',
          400: '#C6362C',
          500: '#981914',
          600: '#6C0000',
          700: '#430000'
        },
        content: {
          primary: '#FFFFFF',
          secondary: '#ABABAB',
          tertiary: '#4F5356'
        },
        stroke: {
          primary: '#353535',
          tertiary: '#1E1E1E'
        }
      }
    },
  },
  plugins: [],
};
export default config;
