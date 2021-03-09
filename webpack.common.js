const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: "images/[name].[hash:8][ext]",
        publicPath: "",
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /.html$/,
                use: ["html-loader"],
            },

        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            title: 'Fasty food',
            filename: "index.html",
            inject: 'body',
        })
    ],

    resolve: {
        extensions: [".js", ".jsx"],
    },
}