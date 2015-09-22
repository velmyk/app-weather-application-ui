module.exports = function(config) {
  config.set({

    plugins: [
      'karma-jasmine',
      'karma-babel-preprocessor',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'phantomjs',
      'karma-phantomjs-launcher',
      'karma-ng-html2js-preprocessor',
      'morgan'
    ],

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/**/*.js',
      'unit-tests/**/*.js',
      'unit-tests/app/shared/**/*.js',
      'src/app/**/*.html'
    ],

    exclude: [
    ],

    preprocessors: {
      'src/**/*.js': ['babel'],
      'unit-tests/*.spec.js': ['babel'],
      'src/app/**/*.html' :['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      moduleName: 'templates'
    },

    reporters: ['progress'],

    ngHtml2JsPreprocessor: {
        moduleName: 'templates'
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false
  });
};