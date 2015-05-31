var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./src/scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./src/css'));
});

gulp.task('sass:watch', function () {
 gulp.watch('./src/scss/**/*.scss', ['sass']);
});

gulp.task('default', function(){
    var bundle = browserify({
      entries: './src/js/app.js',
      debug: true })
      .transform('reactify')
      .bundle()
      .pipe(source('deps.min.js'))
      .pipe(gulp.dest('dist'));
});
