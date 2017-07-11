module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/angular/angular.js', 
      'node_modules/angular-mocks/angular-mocks.js', 
      'node_modules/angular-animate/angular-animate.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js',
      'public/templates/**/*.html',
      'src/client/**/*.spec.js',
      'src/client/**/*.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'src/client/**/*.js': ['coverage'],
      'public/templates/**/*.html': ['ng-html2js']
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: 'public/templates/',
      moduleName: 'angularPro.templates'
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      type : 'html',
      dir : '__coverage__'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  });
};
