const {
    merge
} = require('webpack-merge')

const webpack = require('webpack')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const commomConfig = require('./webpack.config.js');
const prodConfig = {
    mode: 'production',
    plugins: [
         new CleanWebpackPlugin(),
         new HtmlWebpackPlugin({
             template: "./public/index.html"
         })
    ]
}

module.exports = merge(commomConfig, prodConfig)