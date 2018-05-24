'use strict';

module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch($.config.pug + '**/*.pug', $.gulp.series('pug'));
    $.gulp.watch($.config.sass + '**/*.sass', $.gulp.series('sass'));
    $.gulp.watch($.config.src + '**/*.js', $.gulp.series('scripts'));
    $.gulp.watch($.config.statics + '**', $.gulp.series(
      'cleanStatics',
      $.gulp.parallel(
        'copyFonts',
        'copyImages',
        'svgSprite'
      )
    ));
  });
};
