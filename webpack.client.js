const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base');
const clientConfig = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/bundle.[chunkhash:5].js',
    clean: {
      keep: /favicon.ico/,
    },
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:5][ext]'
        }
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/bundle.[chunkhash:5].css'
    })
  ]
};

module.exports = merge(baseConfig, clientConfig);
