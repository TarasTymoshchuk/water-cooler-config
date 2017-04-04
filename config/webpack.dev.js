var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.base.js');

var publicPath = '/';

module.exports = function (env) {
  return webpackMerge(commonConfig(env), {
    devtool: 'cheap-module-source-map',
    devServer: {
      port: 8080,
      host: 'localhost',
      historyApiFallback: true,
      noInfo: false,
      stats: 'minimal',
      publicPath: publicPath,
      proxy: {
        '/api':{
          target: 'http://localhost:4040'
        }
      }
    }
  });
};