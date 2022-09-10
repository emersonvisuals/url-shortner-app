const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, "./src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"), 
        filename: "[name][contenthash].js",
        clean: true,
        assetModuleFilename: '[name][ext]', 
    },
    watch: true,
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        hot: true, 
        compress: true, 
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test:/\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|pdf|gif)$/i,
                type: 'asset/resource', 
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Frontend Mentor | Shortly URL shortening API Challenge',
            filename: 'index.html',
            template:'./src/template.html',
        }),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['dist'] },
            browser: 'chrome',
        }),
    ],
}
