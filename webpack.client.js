const path = require('path');
const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base');
const clientConfig = {
  devtool: 'source-map',
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/client.js',
  },
};

module.exports = merge(baseConfig, clientConfig);
