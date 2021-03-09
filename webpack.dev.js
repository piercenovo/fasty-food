const path = require('path');
const common = require('./webpack.common');
const { merge } = require("webpack-merge");

/** @type {import('webpack').Configuration} */
module.exports = merge(common, {
    mode: 'development',
    target: "web",
    devtool: 'eval-source-map',

    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js",
    },

    module: {
        rules: [
            {
                test: /.(s[ac]|c)ss$/i,
                use: [
                    "style-loader", 
                    "css-loader",
                    "postcss-loader", 
                    "sass-loader",
                ],
            },
        ],
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9090,
        open: "chrome",
        hot: true,
    },

});