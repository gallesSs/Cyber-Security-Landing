export default {
	content: ['./index.html',"./src/**/*.{js,jsx,ts,tsx}",  // <== проверь этот путь!
	],
	theme: {
		screens: {
			md: "768px"
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
		},
	},
}
