// shared config (dev and prod)
const {resolve} = require('path');
const {CheckerPlugin} = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	context: resolve(__dirname, '../../src'),
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader', 'source-map-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.tsx?$/,
				use: ['babel-loader', 'awesome-typescript-loader'],
			},
			{
				test: /\.css$/,
				use: ['style-loader', {loader: 'css-loader', options: {importLoaders: 1}}, 'postcss-loader',],
			},
			{
				test: /\.scss$/,
				loaders: [
					'style-loader',
					{
						loader: 'typings-for-css-modules-loader',
						query: {
							modules: true,
							importLoaders: 1,
							camelCase: true,
							namedExport: true,
							localIdentName: '[name]_[local]_[hash:base64:5]'
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							// sourceMap: true,
							plugins() {
								return [
									autoprefixer({
										browsers: ['last 4 version', 'Firefox < 20', 'Opera < 20', 'dead']
									})
								];
							}
						}
					},
					'sass-loader',
					// {
					// 	loader: 'sass-resources-loader',
					// 	options: {
					// 		// Provide path to the file with resources
					// 		// resources: '../../node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_mixins.scss'
					//
					// 		// Or array of paths
					// 		resources: [
					// 			// resolve(__dirname, '../../src/assets/scss/_bootstrap-variables-overrides.scss'),
					// 			// resolve(__dirname, '../../src/assets/scss/_variables.scss'),
					// 			// resolve(__dirname, '../../src/assets/scss/_mixins.scss'),
					// 			// resolve(__dirname, '../../node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_clearfix.scss')
					// 		]
					// 	},
					// },
				],
			},
			{
				test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
				loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
			},
		],
	},
	plugins: [
		new CheckerPlugin(),
		new HtmlWebpackPlugin(
			{
				template: 'index.html.ejs',
				favicon: '',
			}
		),
	],
	performance: {
		hints: false,
	},
};
