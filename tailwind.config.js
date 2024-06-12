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
        'princesa': "url('/src/assets/princesafundo.png')",
        'carnedoce': 'linear-gradient(90deg, rgba(205,100,0,1) 5%, rgba(119,53,0,1) 50%, rgba(205,100,0,1) 95%)' 
      },
      width: {
        'custom-w': '700px' 
      },
      height: {
        'custom-h': '865px'
      }
  },
  plugins: [],
}
}
