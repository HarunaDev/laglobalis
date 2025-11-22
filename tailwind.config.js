/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'rotate-back-forth': 'rotateBackForth 10s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',

      },
      keyframes: {
        rotateBackForth: {
          '0%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
          '100%': { transform: 'rotate(-5deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },

      colors: {
        customGreen: {
          300: "#63E99B",
          200: '#EAF8F0',
          100: '#BDF7D5'
        },
        customOrange: {
          300: "#E99B63",
          200: "#F6E3D5"
        },
        customPurple: {
          300: "#9B63E9",
          200: "#E8DFF5"
        },
        customYellow: {
          100: "#8e983f",
          300: "#edff66",
        },
      },
    },
  },
  plugins: [],
}