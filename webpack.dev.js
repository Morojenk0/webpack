const common = require('./webpack.common.js')
const path = require('path')
const {merge} = require('webpack-merge')

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		watchFiles: ['src/**/*'],
		port: 4000,
		open: true,
		hot: true,
	},
})
