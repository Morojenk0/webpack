const {merge} = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
		watchFiles: ["src/**/*"],
		port: 4000,
		open: true,
		hot: true,
	},
});
