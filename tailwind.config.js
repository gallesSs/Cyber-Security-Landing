
export default {
	content: ['./index.html',"./src/**/*.{js,jsx,ts,tsx}",  // <== проверь этот путь!
	],
	theme: {
		screens: {
			md: "768px",
			lg: "1024px",
			xl: '1280px',
			xxl: '1600px'
		},
	},
plugins: [
  require('tailwindcss-grid-areas'),
	],
}
