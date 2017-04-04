'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isDebug = process.env.DEBUG || false;
const isTravis = process.env.TRAVIS || false;
const KARMA_SINGLE_RUN_FLAG = process.argv.filter(s => s.includes('single-run'));
const RUN_ONCE = process.env.BDD || isDebug ? false : KARMA_SINGLE_RUN_FLAG ?
  true : false;
const browsers = isTravis ? ['PhantomJS'] : [isDebug ? 'Chrome' : 'PhantomJS'];

const options = {
  basePath: '',
  browsers: browsers,
  frameworks: ['jasmine'],
  autoWatch: true,
  singleRun: RUN_ONCE,
  files: [
    // es6-shim is currently needed for phantomjs
    './node_modules/es6-shim/es6-shim.js',
    'specs.bundle.js',
    './src/core/**/*.spec.js',
    './src/components/**/*.spec.js'
  ],
  preprocessors: {
    'specs.bundle.js': ['webpack', 'sourcemap'],
    './src/core/**/*.spec.js': ['webpack', 'sourcemap', 'coverage'],
    './src/components/**/*.spec.js': ['webpack', 'sourcemap', 'coverage']
  },
  webpack: {
    devtool: 'inline-source-map',
    resolve: {
      modulesDirectories: [
        'node_modules', 'node_modules/semantic-ui-less', 'src/component', 'src/core', 'src/css', 'libs'
      ],
      extensions: ['', '.js', '.less', '.html', '.json'],
      alias: {
        'schemaForm': 'angular-schema-form/dist/schema-form'
      }
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loaders: ['babel']
        }, {
          test: /\.html$/,
          loader: 'ngtemplate!html',
          exclude: /(index)/
        }, {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass')
        }, {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract('css?sourceMap!semantic-ui-less-module!' +
            'less?sourceMap!semantic-ui-less-module')
        },
        // FONTS
        {
          test: /\.woff$/,
          loader: 'url?limit=100000&name=./fonts/[name]/[hash].[ext]'
        }, {
          test: /\.eot$/,
          loader: 'file'
        }, {
          test: /\.svg$/,
          loader: 'url?limit=100000&name=./fonts/[name]/[hash].[ext]'
        },
        // the url-loader uses DataUrls.
        // the file-loader emits files.
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url?limit=10000&minetype=application/font-woff'
        }, {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file'
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/,
          loader: 'file'
        },
        { test: /\.json$/, loader: 'json-loader' }
      ]
    },
    semanticUiLessModuleLoader: {
      siteFolder: path.join(__dirname, 'src/assets/semantic/site'),
      themeConfigPath: path.join(__dirname, 'src/assets/semantic/theme.config')
    },
    plugins: [
      new ExtractTextPlugin('[name].[chunkhash].style.css')
    ]
  },
  webpackMiddleware: {
    noInfo: true
  },
  plugins: [
    require('karma-webpack'),
    require('karma-sourcemap-loader'),
    'karma-phantomjs-launcher',
    'karma-chrome-launcher',
    'karma-jasmine',
    'karma-coverage',
    'karma-htmlfile-reporter',
    // 'karma-spec-reporter',
    'karma-mocha-reporter',
    'karma-clear-screen-reporter'
    // 'karma-browserstack-launcher'
  ],
  reporters: [
    // 'progress',
    // 'spec',
    'coverage',
    'html',
    'mocha',
    'clear-screen'
  ],
  mochaReporter: {
    // output: 'autowatch'
  },
  coverageReporter: {
    type: 'html',
    dir: 'tests/coverage/'
  },
  htmlReporter: {
    outputFile: 'tests/units.html',

    // Optional
    pageTitle: 'Unit Tests',
    subPageTitle: '',
    groupSuites: true,
    useCompactStyle: true,
    useLegacyStyle: true
  }
  // the default configuration
  // htmlReporter: {
  //   outputDir: 'karma_html',
  //   templatePath: './node_modules/karma-html-reporter/jasmine_template.html'
  // }
};

// var browserStackOptions = {
//     // global config of your BrowserStack account
//     browserStack: {
//       username: process.env.bs_user,
//       accessKey: process.env.bs_key
//     },

//     // define browsers
//     customLaunchers: {
//       bs_chrome_mac: {
//         base: 'BrowserStack',
//         browser: 'chrome',
//         browser_version: '39.0',
//         os: 'OS X',
//         os_version: 'Mountain Lion'
//       },
//       bs_chrome_windows: {
//          base: 'BrowserStack',
//         browser : 'chrome',
//      browser_version : '39.0',
//      os : 'Windows',
//      os_version : '8'
//       }
//     },

//     browsers: ['bs_chrome_mac', 'bs_chrome_windows']
// };

module.exports = function (config) {
  // if (isTravis) {
  //  Object.keys(browserStackOptions).forEach(function (key) {
  //      options[key] = browserStackOptions[key];
  //  });
  // }
  config.set(options);
};
