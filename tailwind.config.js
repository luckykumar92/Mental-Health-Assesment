/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        //ui-sans-serif and system-ui acts as a fallback option
        sans: ["Roboto", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
