const {merge} = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin =
	require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(common, {
	mode: "production",
	devtool: "source-map",
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
	plugins: [
		new BundleAnalyzerPlugin({
			analyzerMode: "static",
			openAnalyzer: false,
		}),
	],
});
