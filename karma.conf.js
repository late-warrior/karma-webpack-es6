// Karma configuration
// Generated on Thu May 11 2017 23:12:08 GMT+0530 (IST)

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    // this will use the mocha framework to define the test suite and run tests, but
    // the test is actually run on the browsers specified
    frameworks: ['mocha'],

    // list of files / patterns to load in the browser
    files: ['https://code.jquery.com/jquery-3.2.1.min.js', 'test_context.js'],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // This means that the test_context.js file is first passed through webpack
      // which takes charge of loading all dependencies from there on
      // These files are then passed through the sourcemap loader (karma-sourcemap-loader)
      'test_context.js': ['webpack', 'sourcemap']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'coverage', 'html'],
    htmlReporter: {
      outputFile: 'reports/units.html',
      pageTitle: 'Tests',
      subPageTitle: 'Unit and integration tests'
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    // enable / disable watching file and executing test whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the test and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    plugins: [
      require('karma-webpack'),
      require('karma-firefox-launcher'),
      require('karma-mocha'),
      require('karma-sourcemap-loader'),
      require('karma-coverage'),
      require('karma-htmlfile-reporter'),
      require('karma-phantomjs-launcher')
    ],

    webpack: require('./webpack.config'),

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    }
  });
};
