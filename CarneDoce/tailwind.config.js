/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'salmaeyes': "url('/CarneDoce/src/assets/cd.jpg')",
        'cerere': "url('/CarneDoce/src/assets/cerere-back.png')",
        'pequi': "url('/CarneDoce/src/assets/pequifundo.jpg')",
        'tonus': "url('/CarneDoce/src/assets/tonus3.png')",
        'princesa': "url('/CarneDoce/src/assets/princesafundo.png')"
      }
    },
  },
  plugins: [],
}

