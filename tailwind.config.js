/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slide_top: "slide_top 0.5s linear forwards",
        slide_left: "slide_left 0.5s linear forwards",
        slide_right: "slide_right 0.5s linear forwards",
        fade_in: "fade_in 0.5s linear forwards",
      },
      keyframes: {
        slide_top: {
          "0%": { transform: "translateY(100Px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slide_left: {
          "0%": {
            transform: "translateX(-100px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        slide_right: {
          "0%": {
            transform: "translateX(100px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        fade_in: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
    colors: {
      transparent: "transparent",
      white: "rgb(var(--white))",
      black: "rgb(var(--black))",
      primary: "rgb(var(--primary))",
      secondary: "rgb(var(--secondary))",
      background: "rgb(var(--background))",
    },
  },
  safelist: [
    {
      pattern: /^animation-delay-/,
    },
  ],
  plugins: [
    function ({ addUtilities }) {
      const delays = {};
      for (let i = 100; i <= 3000; i += 100) {
        delays[`.animation-delay-${i}`] = {
          "animation-delay": `${i}ms !important`,
        };
      }
      addUtilities(delays, ["responsive", "hover"]);
    },
  ],
};
