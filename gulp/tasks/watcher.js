'use strict';

var gulp = require('gulp');

var paths = require('../paths.js'),
    build = require('./build.js'),
    inject = require('./inject.js');

module.exports = {

  watchFiles: function () {
    // New/deleted file detection only works for relative paths.
    gulp.watch(paths.src.jadeWatch, build.buildHTML());
    gulp.watch(paths.src.stylusWatch, build.buildCSS());
    gulp.watch(paths.src.js, build.buildJS());
    gulp.watch(paths.src.jadeWatch, inject.injectIndex);
    gulp.watch(paths.src.index, inject.injectIndex);
  },

};

