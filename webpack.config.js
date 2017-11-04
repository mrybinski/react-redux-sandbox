const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/app/index.html'),
  filename: 'index.html',
  inject: 'body'
});

const webpack = require('webpack');

module.exports = {
    context:  path.join(__dirname, '/app'),
    entry: {
        javascript: "./app.js",
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
                query: {
                    plugins: ['transform-class-properties']
                }
            }
        ],
        rules: [
            {
              test: /\.jsx?$/,
              enforce: 'pre',
    
              loaders: ['babel-loader?plugins[]=transform-class-properties', 'eslint-loader?emitWarning=true'],
            },
          ],
    },
    output: {
        filename: "app.js",
        path: __dirname + "/dist",
    },

    plugins: [
        htmlWebpackPluginConfig
    ]
};