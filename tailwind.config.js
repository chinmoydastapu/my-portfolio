/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
import scrollBarHide from 'tailwind-scrollbar-hide';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        custom: "rgba(180, 180, 220, 0.15) 0px -40px 80px -20px inset, rgba(20, 20, 20, 0.7) 0px 40px 80px -20px inset, rgba(0, 0, 0, 0.8) 0px 10px 20px -5px inset, rgb(0, 0, 0) 0px 20px 30px -10px;",
        inside: "rgb(0, 0, 0, 0.5) 0px 5px 5px 0px inset, rgba(255, 255, 255, 0.3) 0px -2px 2px 1px inset;"
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(45deg, #ff6600, #ff9900)',
      },
    },
  },
  daisyui: {
    themes: ["black", "lofi"],
  },
  plugins: [daisyui, scrollBarHide],
}

