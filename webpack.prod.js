const path = require('path');
const common = require('./webpack.common');
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = merge(common, {
    mode: 'production',
    target: "browserslist",
    devtool: "source-map",

    output: {
        filename: "[name].[contenthash:8].bundle.js",
        chunkFilename: "[name].[contenthash:8].chunk.js",
    },

    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
    },

    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "" },
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin(
        {
            filename: "[name].[contenthash:8].css",
        }),
    ],

});