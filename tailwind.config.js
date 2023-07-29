/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        c_dark: '#040b13',
        c_yellow: {
          gold: '#f5b50a',
          lima: '#dcf836'
        },
        c_white: {
          normal: '#ffffff',
          semidark: '#f1ebf4',
          blue: '#abb7c4'
        },
        c_red: {
          normal: '#dd003f',
          semidark: '#aa0030'
        },
        c_blue: {
          light: '#2081ff',
          gray: '#405266',
          semidark: '#233a50',
          dark: '#0b1a2a'
        }
      },
      fontFamily: {
        nunito: ['"Nunito"', 'sans-serif'],
        dosis: ['"Dosis"', 'sans-serif']
      }
    }
  },
  plugins: []
}
