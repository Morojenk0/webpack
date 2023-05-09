const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		bundle: path.resolve(__dirname, "src/index.js"),
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name][contenthash].js",
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
			{
				test: /\.html$/i,
				use: "html-loader",
			},
			{
				test: /\.(png|jpg|webp|gif)$/i,
				type: "asset/resource",
				generator: {
					filename: "images/[hash][ext]",
				},
			},
			{
				test: /\.svg/,
				type: "asset/inline",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
				generator: {
					filename: "fonts/[hash][ext]",
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "src/index.html",
		}),
	],
};
