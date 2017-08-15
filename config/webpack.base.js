const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const sourcePath = path.join(__dirname, '/../src');
const distPath = path.join(__dirname, '/../dist');
const publicPath = '/';
const getPath = (pathToFile) => path.resolve(sourcePath, pathToFile);

module.exports = function (env) {
  const IS_DEV = env.env === 'dev';
  return {
    entry: {
      app: [
        getPath('./app.js'),
        getPath('./config/dev.config.js')
      ],
      vendors: [
        'angular',
        'angular-ui-router',
        'angular-animate',
        'angular-resource',
        'angular-ui-bootstrap'
      ]
    },
    output: {
      path: distPath,
      filename: '[name].bundle.js',
      publicPath: publicPath,
      sourceMapFilename: '[name].map'
    },
    resolve: {
      modules: [distPath, 'node_modules', 'libs'],
      alias: {
      }
    },
    module: {
      loaders: [{
        test: /\/libs\/.*\.js/,
      }, {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loaders: [{
          loader: 'ng-annotate-loader'
        },{
          loader: 'babel-loader',
          query: {
            presets: ['es2015'],
            sourceMap: IS_DEV
          }
        }]
      }, {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader'
      }, {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }, {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              //sourceMap: IS_DEV,
              localIdentName: IS_DEV ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:5]'
            }
          }, {
            loader: 'sass-loader',
            options: {
              includePaths: []
            }
          }]
        })
      }, {
        test: /src\/.*\.html$/,
        loader: 'ngtemplate-loader?!html-loader',
        exclude: /(index)/
      }, {
        test: /\.json$/,
        use: 'json-loader'
      }]
    },
    plugins: [
      new ExtractTextPlugin('styles.css'),
      new webpack.ProvidePlugin({
        //firebase: "firebase"
      }),
      new webpack.DefinePlugin({
        'JS_ENV': JSON.stringify(env.env)
      }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '/../src/index.html'),
        chunksSortMode: 'dependency'
      })
    ]
  };
};