// development config
const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common');
const {resolve} = require('path');

module.exports = merge(commonConfig, {
	mode: 'development',
    entry: [
        'react-hot-loader/patch', // activate HMR for React
        'webpack-dev-server/client?http://localhost:8080',// bundle the client for webpack-dev-server and connect to the provided endpoint
        'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
        './dev-index.tsx' // the entry point of our app
    ],
    devServer: {
		hot: true, // enable HMR on the server
		contentBase: resolve(__dirname, '../../src/assets'),
		// publicPath: '/',
	},
	devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.WatchIgnorePlugin([/scss\.d\.ts$/]),
        new webpack.HotModuleReplacementPlugin(), // enable HMR globally
        new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
    ],
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM',
	},
});
