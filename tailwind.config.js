/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'forest': "url('../../public/assets/forest.jpg')",
      'serblue': "url('../../public/assets/serblue.webp')",
      'sky': "url('../../public/assets/sky.webp')",
    },
   
    extend: {
  },
  plugins: [],
}
};

