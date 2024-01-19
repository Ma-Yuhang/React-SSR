const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

const serverConfig = {
  entry: './src/server/index.js',
  output: {
    filename: 'server.js',
  },
  watch: true,
  target: 'node',
  externals: [nodeExternals()],
};

module.exports = merge(baseConfig, serverConfig);
