module.exports = {
	content: ["./src/index.html", "./src/components/*.{js, jsx}"],
	theme: {
		screens: {
			tablet: "640px",
			laptop: "1024px",
			desktop: "1280px",
		},
		extend: {
			colors: {},
		},
	},
	variants: {
		extend: {},
	},
	plugins: ["prettier-plugin-tailwindcss"],
};
