/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'salmaeyes': "url('/src/assets/cd.jpg')",
        'cerere': "url('/src/assets/cerere-back.png')",
        'pequi': "url('/src/assets/pequifundo.jpg')",
        'tonus': "url('/src/assets/tonus3.png')",
        'princesa': "url('/src/assets/princesafundo.png')"
      },
  },
  plugins: [],
}
}
