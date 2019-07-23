const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCss = require("optimize-css-assets-webpack-plugin");
const UglifyJs = require("uglifyjs-webpack-plugin");
module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "./dist")
	},
	devServer: {
		port: "3000",
		progress: true,
		compress: true,
		contentBase: path.resolve(__dirname, "./dist")
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			compress: true,
			template: "src/index.html",
			filename: "index.html",
			minify: {
				collapseWhitespace: true,
				removeAttributeQuotes: true
			}
		}),
		new MiniCssExtractPlugin({
			filename: "main.css"
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader"
				]
			},
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"less-loader",
					"postcss-loader"
				]
			},
			{
				test: /\.js$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
						plugins: [
							[
								"@babel/plugin-proposal-decorators",
								{ legacy: true }
							],
							[
								"@babel/plugin-proposal-class-properties",
								{ loose: true }
							]
						]
					}
				}
			}
		]
	},
	optimization: {
		minimizer: [
			new UglifyJs({
				cache: true,
				parallel: true,
				sourceMap: true
			}),
			new OptimizeCss({})
		]
	}
};
