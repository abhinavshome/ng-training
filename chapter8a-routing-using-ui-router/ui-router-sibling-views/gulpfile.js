var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
 
gulp.task('concat', function() {
  return gulp.src('./js/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', function() {
  
});

gulp.task('compress', function() {
  gulp.src('dist/all.js')
    .pipe(minify())
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', function() {
  gulp.watch('./js/**/*.js', ['compress', 'concat']);
});