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
      filename: "bundle.js",
      clean: true,
  },
  watch: true,
  devServer: {
      port: 3000,
      contentBase: path.resolve(__dirname, 'dist'),
      hot: true
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
          title: 'URL Shortner',
          filename: 'index.html',
          template:'./src/template.html',
      }),
      new BrowserSyncPlugin({
          // browse to http://localhost:3000/ during development,
          // ./public directory is being served
          host: 'localhost',
          port: 3000,
          server: { baseDir: ['dist'] },
          files: ['./dist/*.html'],
          browser: 'chrome',
      }),
  ],
}