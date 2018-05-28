const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === "production";
const port = process.env.PORT || 3000;

const plugins = [
  new ExtractTextPlugin({
    filename: 'css/[name].[contenthash.base64:5].css',
    allChunks: true
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: function(module, count) {
      // any required modules inside of node_modules are extracted to vendor
      return module.resource && /\.js$/.test(module.resource) && module.resource.indexOf('node_modules') >= 0;
    }
  }),
  // extract webpack runtime and module manifest to it's own file in order to
  // prevent vendor hash from being updated whenever app bundle is updated
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    chunks: ['vendor]']
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './index.ejs',
    inject: 'body'
  })
];

module.exports = {
  context: `${__dirname}/src`,
  entry: {
    // vendor: ['React', 'ReactDOM'],
    app: './index.jsx'
  },
  output: {
		path: `${__dirname}/dist`,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js'
	},
  resolve: {
		modules: ['node_modules', './src'],
		extensions: ['.js', '.jsx', 'ejs'],
	},
  module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader!sass-loader'
				}),
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader'
				}),
			},
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
  plugins,
  devServer: {
		port,
		historyApiFallback: true,
		publicPath: '/dist/',
	}
}
