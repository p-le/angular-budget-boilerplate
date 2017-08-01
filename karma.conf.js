module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/angular/angular.js', 
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-animate/angular-animate.js',
      'node_modules/angular-route/angular-route.js',
      // 'node_modules/angular-ui-router/release/angular-ui-router.js',
      'src/client/**/*.html',
      'src/client/**/*.js',
      'src/client/**/*.spec.js'
    ],
    exclude: [
      'src/client/**/*.e2e.spec.js'
    ],
    preprocessors: {
      'src/client/**/!(*.spec).js': ['coverage']
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      
      dir : '__coverage__',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'text' },
      ]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: (process.env.NODE_ENV == "production") ? true : false,
    concurrency: Infinity
  });
};
