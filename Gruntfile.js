
/* Load NPM Tasks - Grunt Plugins */
const plugins = [
  'grunt-contrib-watch',
  'grunt-contrib-concat',
  'grunt-contrib-uglify',
  'grunt-ng-annotate',
  'grunt-angular-templates',
  'grunt-sass',
  'grunt-express'
];

/* Annotate Angular JS file */
const ngAnnotate = {
  options: {
    singleQuotes: true
  },
  app: {
    files: [
      {
        expand: true,
        src: [ 'src/client/**/*.js', '!src/client/**/*.spec.js' ],
        dest: '__build__'
      }
    ]
  }
};

/* Bundling Annotated files in __build__ folder into public folder */
const concat = {
  js: {
    src: [ '__build__/**/*.js' ],
    dest: 'public/app.js'
  },
  css: {
    src: [ '__build__/**/*.scss' ],
    dest: 'public/style.css'
  },
  vendor: {
    src: [ 
      'node_modules/angular/angular.js', 
      'node_modules/angular-animate/angular-animate.js',
      'node_modules/angular-resource/angular-resource.js',
      'node_modules/angular-route/angular-route.js',
      // 'node_modules/angular-ui-router/release/angular-ui-router.js'
    ],
    dest: 'public/vendor.js'
  }
};

/* Watch files change */
const watch = {
  js: {
    files: [ 'src/client/**/*.js', '!src/client/**/*.spec.js' ],
    tasks: [ 'build:dev' ]
  },
  css: {
    files: 'src/client/**/*.scss',
    tasks: [ 'build:dev' ]
  },
  html: {
    files: 'src/client/**/*.html',
    tasks: [ 'build:dev' ]
  },
  server: {
    files: [ 'src/server/**/*.js' ],
    tasks: ''
  }
};

/* Uglify Bundle file */
const uglify = {
  js: {
    src: 'public/app.js',
    dest: 'public/app.js'
  },
  jsvendor: {
    src: 'public/vendor.js',
    dest: 'public/vendor.js'
  }
};

/* Build SCSS files */
const sass = {
  dist: {
    options: {
      style: 'expanded'
    },
    files: [
      {
        expand: true,
        src: [ 'src/client/**/*.scss' ],
        dest: '__build__'
      }
    ]
  }
};

const ngtemplates = {
  app: {
    options: {
      base: "web",
      module: "angularPro"
    },
    cwd: 'src/client',
    src: "**/*.html",
    dest: "src/client/config/templates.js"
  }
};

/* Start Express Server */
const express = {
  livereload: {
    options: {
        port: 9000,
        bases: './public',
        monitor: {},
        debug: true,
        server: './src/server/server'
    }
  }
};

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch,
    ngAnnotate,
    concat,
    uglify,
    sass,
    ngtemplates,
    express
  });

  plugins.forEach(p => grunt.loadNpmTasks(p));

  grunt.registerTask('default', [ 'express', 'build:dev', 'watch' ]);
  grunt.registerTask('build:dev', [ 'ngAnnotate', 'ngtemplates', 'concat:js', 'concat:vendor', 'sass', 'concat:css' ]);
  grunt.registerTask('build:prod', [ 'ngAnnotate', 'ngtemplates', 'concat:js', 'concat:vendor', 'sass', 'concat:css', 'uglify' ]);
};