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
        outside: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;",
        inside: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;"
      },
    },
  },
  daisyui: {
    themes: ["black", "lofi"],
  },
  plugins: [daisyui, scrollBarHide],
}

