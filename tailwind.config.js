/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins","sans-serif"],
<<<<<<< HEAD
        logo: ["Mukta","sans-serif"],
      },
      colors: {
        primary: "#ef9351",
        secondary: "#d57a34",
        third: "#4ba37c",
        brandDark: "#9b5926",
          instagram: {
            purple: '#833AB4',
            pink: '#E1306C',
            orange: '#F77737',
          },
=======
      },
      colors: {
        primary: "#854d3d",
        secondary: "#4a1e1b",
        brandDark: "270c03",
>>>>>>> 1b9d1e5636ac91947150b3740d1eb42260fe0a8f
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  plugins: [],
}