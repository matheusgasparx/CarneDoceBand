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
        'carnedocecover': "url('/src/assets/carnedocealbumcover.jpg')",
        'carnedocealbum': "url('/src/assets/carnedocealbum.jpg')",
        'carnedoce': 'linear-gradient(90deg, rgba(205,100,0,1) 5%, rgba(119,53,0,1) 50%, rgba(205,100,0,1) 95%)',
        'rodape': 'radial-gradient(circle, rgba(122,86,58,1) 43%, rgba(179,105,44,1) 54%, rgba(119,81,50,1) 77%)' 
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
