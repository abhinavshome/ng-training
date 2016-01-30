var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

gulp.task('concat', function() {
    return gulp
        .src(['./js/app.js', './js/routes.js', './js/*/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('annotate', function () {
	return gulp.src('./dist/all.js')
		.pipe(ngAnnotate())
		.pipe(gulp.dest('dist'));
});

gulp.task('compress', function() {
  gulp.src('./dist/all.js')
    .pipe(minify({
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', function() {
    gulp.watch(['./js/app.js', './js/routes.js', './js/*/*.js'], [ 'compress','annotate', 'concat']);
});
