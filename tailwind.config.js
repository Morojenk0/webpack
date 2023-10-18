module.exports = {
	content: [
		'./src/index.html',
		'./src/index.tsx',
		'./src/App.tsx',
		'./src/components/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '',
			},
		},
		extend: {
			colors: {},
			fontFamily: {},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [''],
}
