/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        offwhiteBg: "#F9F9F9",
        offBlack: "#151515",
        pink: "#D4177D",
      },
      animation: {
        "rotate-custom": "rotate 2s infinite",
        "slide-up-down": "slideUpDown 2s infinite",
        "bounce-once": "slideUpDownLong 2s",
      },
      keyframes: {
        rotate: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(20deg)" },
        },
        slideUpDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
        slideUpDownLong: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-50px)" },
        },
      },
      boxShadow: {
        "custom-shadow-md": "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
        "custom-shadow-lg": "rgba(0, 0, 0, 0.4) 0px 10px 40px 10px",
      },
    },
  },
  plugins: [],
};
