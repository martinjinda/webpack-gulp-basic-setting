/**
 * Created by martinjinda on 25/05/16.
 */

var webpack = require('webpack');

var config = {
	cache: true,
	debug: true,
	watch: true,
	entry: [
		'./node_modules/bootstrap/dist/js/bootstrap.js',
		'./app/js/main.js'
	],
	output: {
		filename: './app/js/dist/bundle.js'
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	]
};

module.exports = config;