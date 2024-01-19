const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.base');

const serverConfig = {
  entry: './src/server/index.js',
  output: {
    filename: 'server.js',
    clean: true,
    publicPath: '/',
  },
  watch: true,
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:5][ext]',
          emit: false,
        },
      },
    ],
  },
};

module.exports = merge(baseConfig, serverConfig);
