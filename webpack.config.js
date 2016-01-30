var path = require('path');

var config = {
	entry: path.resolve(__dirname, './src/index.js'),
	output: {
		path: path.resolve(__dirname, 'static'),
		filename: 'main.bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/, // accepts either js or jsx
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}]
	}
};

module.exports = config;
