var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.base.js');

var publicPath = '/';

module.exports = function (env) {
  return webpackMerge(commonConfig(env), {
    plugins: [
      // new webpack.LoaderOptionsPlugin({
      //   minimize: false,
      //   debug: false
      // }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: false,
        compress: {
          screw_ie8: true
        },
        comments: false
      })
    ]
  });
};