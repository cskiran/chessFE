const path = require('path');
const common = require('./webpack.config');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    /** mode:"developement" , devtool: none (for code as it is in dev) */
    mode: "production",
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin(), new TerserPlugin()]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "[name].[contentHash].css"
    }), new CleanWebpackPlugin(),
    new htmlWebpackPlugin(
        {
            template: './src/index.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // inject to dom
                    "css-loader" // load css to js
                ]
            },
        ]
    }
});