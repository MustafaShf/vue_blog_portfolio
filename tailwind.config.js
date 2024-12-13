/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navText: '#32a5fd',
        insideBtnText:'#0d293e',
        box:'#0d0d0d',
        text:'#888',
      },
      fontFamily: {
        navLogo: ['Lacquer', 'cursive'],
        general: ['Poppins', 'cursive'],
      },
    },
  },
  plugins: [],
}
