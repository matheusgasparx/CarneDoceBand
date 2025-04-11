/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        salmaeyes: "url('/assets/cd.jpg')",
        cerere: "url('/assets/cerere-back.png')",
        pequi: "url('/assets/pequifundo.jpg')",
        tonus: "url('/assets/tonus3.png')",
        princesa: "url('/assets/princesafundo.png')",
        carnedocecover: "url('/assets/carnedocealbumcover.jpg')",
        carnedocealbum: "url('/assets/carnedocealbum.jpg')",
      }
    },
  },
  plugins: [],
};