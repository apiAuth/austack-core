'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var wrench = require('wrench');

var options = {
  src: 'client',
  dist: 'dist',
  gulp: 'gulp',
  server: 'server',
  tmp: '.tmp',
  e2e: 'e2e',
  errorHandler: function (title) {
    return function (err) {
      gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
      this.emit('end');
    };
  },
  wiredep: {
    directory: 'bower_components',
    dependencies: {
      'ace-builds': '1.2.0',
      'geopattern': '1.2.3'
    },
    overrides: {
      'ace-builds': {
        main: ['src-noconflict/ace.js', 'src-noconflict/mode-html.js']
      },
      'geopattern': {
        main: ['js/geopattern.min.js']
      }
    }
  }
};

wrench.readdirSyncRecursive('./gulp').filter(function (file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function (file) {
  require('./gulp/' + file)(options);
});

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
