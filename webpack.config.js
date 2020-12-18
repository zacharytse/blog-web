var path = require('path');
var webpack = require('webpack');
var VueLoaderPlugin = require("vue-loader/lib/plugin.js");

module.exports = {
    devServer: {
        proxy: { 'api': 'http://localhost:10000' }
    },
    entry: "./src/main.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            //从右到左加载
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|png|jpeg|bmp|gif)$/,
                use: [{
                    loader: "url-loader",
                }]
            }, {
                test: /\.(ttf|ttf2|woff|woff2|eot|svg)$/,
                use: ['url-loader']
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                // exclude参数: node_modules目录下的js文件不需要做转es5语法,也就是排除一些目录
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            "@": path.join(__dirname, 'src'),
            'jquery': path.resolve(__dirname, 'node_modules/jquery/src/jquery')
        }
    },
}