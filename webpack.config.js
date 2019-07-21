const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.resolve(__dirname, './dist')
    },
    devServer: {
        port: '3000',
        progress: true,
        compress: true,
        contentBase: path.resolve(__dirname, './dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            compress: true,
            template: 'src/index.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader',
                    options: {
                        insertAt: 'top'
                    }
                }, 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader',
                    options: {
                        insertAt: 'top'
                    }
                }, 'css-loader', 'less-loader']
            }
        ]
    }
}