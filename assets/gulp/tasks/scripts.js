'use strict';

module.exports = function () {
  $.gulp.task('scripts', function () {
    return $.gulp.src($.config.js + '*.js')
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(function (err) {
          return {
            title: 'JS',
            message: err.message
          };
        })
      }))
      .pipe($.gp.concat('main.min.js'))
      //.pipe($.gp.uglify())
      .pipe($.gulp.dest($.config.root + 'js/'));
  });
};
