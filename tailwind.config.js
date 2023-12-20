/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'forest': "url('/forest.jpg')",
      'serblue': "url('/serblue.jpg')",
      'sky': "url('/sky.png')",
    },
   
    extend: {
  },
  plugins: [],
}
};

