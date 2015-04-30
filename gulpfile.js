var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

gulp.task('default', function(){
    var bundle = browserify({
      entries: './src/js/app.js',
      debug: true })
      .transform('reactify')
      .bundle()
      .pipe(source('deps.min.js'))
      .pipe(gulp.dest('dist'));
});
