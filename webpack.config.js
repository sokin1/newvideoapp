var webpack = require('webpack')
const {resolve} = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackTemplate = require('html-webpack-template')

module.exports = env => {
    return {
        entry: './client.js',
        output: {
            filename: 'bundle.js',
            path: resolve(__dirname, 'dist'),
            pathinfo: !env.prod,
        },
        context: resolve(__dirname, 'src'),
        devtool: env.prod ? 'source-map' : 'eval',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ["@babel/preset-react", "@babel/preset-es2015"]
                    }
                },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract({
                        // fallback: 'style-loader',
                        use: 'css-loader?modules&localIdentName=[name]_[local]__[hash:base64:5]'
                    })
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin("styles.css"),
        ]
    }
}