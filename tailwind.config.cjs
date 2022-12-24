/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "body": "#1E213F",
        "primary": "#161932",
        "secondary": "#D7E0FF",
        "custom-gray": "#EFF1FA",
      }
    }
  },
  plugins: []
};
