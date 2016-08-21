var HtmlWebpackPlugin = require("html-webpack-plugin")
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + "/views/index.ejs",
	filename: "index.ejs",
	inject: "body"
});

module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + "/views/index.ejs",
	output: {
				path: __dirname + "/public",
				filename: "bundle.js"
	},

	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					cacheDirectory: true,
					presets: ['react', 'es2015', 'stage-0', "react-hmre"],
					plugins: ['react-html-attrs', 'transform-runtime']
				}
			},
			{
				test: /\.json$/,
				loader: "json",		
			},
			{
				test: /\.css$/,	
				loader: "style-loader!css-loader!postcss-loader"
			}
		]
	},

	resolve: {
		modulesDirectories: ['node_modules', 'bower_components'],
		extensios: ['', '.js', '.jsx']
	},

	postcss: ['autoprefixer'],

	plugins: [HTMLWebpackPluginConfig],	


	devServer: { //config for webpack dev server
		contentBase: "./public",
		colors: true,
		historyApiFallback: true,
		inline: true,
		hot: true,
	}				
};	



