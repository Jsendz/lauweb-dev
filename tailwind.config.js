/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'forest': "url('src/assets/forest.jpg')",
      'serblue': "url('src/assets/serblue.jpg')",
      'sky': "url('src/assets/sky.png')",
    },
   
    extend: {
  },
  plugins: [],
}
};

