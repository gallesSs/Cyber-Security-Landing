
export default {
	content: ['./index.html',"./src/**/*.{js,jsx,ts,tsx}",  // <== проверь этот путь!
	],
  theme: {
    extend: {
      screens: {
      },
    },
  },
plugins: [
  require('tailwindcss-grid-areas'),
	],
}
