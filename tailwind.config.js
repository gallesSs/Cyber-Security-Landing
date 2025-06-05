
export default {
	content: ['./index.html',"./src/**/*.{js,jsx,ts,tsx}",  // <== проверь этот путь!
	],
	theme: {
		screens: {
			md: "768px"
		},
	},
plugins: [
  require('tailwindcss-grid-areas'),
	],
}
