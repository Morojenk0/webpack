module.exports = {
	content: [
		'./src/index.html',
		'./src/index.tsx',
		'./src/App.tsx',
		'./src/components/**/*.{js,jsx,ts,tsx}',
	],
	// tablet 640px
	// laptop 1021px
	// desktop 1280px
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
