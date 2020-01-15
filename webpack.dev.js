const path = require('path');
const common = require('./webpack.config');
const merge = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "development", /** devtool: none (for code as it is in dev) */
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new htmlWebpackPlugin(
            {
                template: './src/index.html'
            })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader", // inject to dom
                    "css-loader" // load css to js
                ]
            },
        ]
    }
});