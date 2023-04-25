require('dotenv').config();
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    target: 'web',
    mode: 'production',
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './public/favicon.ico'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'REACT_APP_SERVER_URL': `'${process.env.REACT_APP_SERVER_URL}'`
            }
        })
    ],
    output: {
        publicPath: '/build/',
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'build'),
        },
        port: process.env.PORT,
        historyApiFallback: true,
        open: true,
        hot: true
    },
}