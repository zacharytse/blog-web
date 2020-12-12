const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')

var HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.config.js');

const devConfig = {
    mode: 'development',
    devServer: {
        // contentBase: path.join(__dirname, "dist"), // dist目录开启服务器
        // compress: true, // 是否使用gzip压缩
        port: 9000, // 端口号
        open: true, // 自动打开网页
        hot: true // 开启热更新
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        
    ],
    optimization: {
        usedExports: true
    }
}

module.exports = merge(commonConfig, devConfig)
