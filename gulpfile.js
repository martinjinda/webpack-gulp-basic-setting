var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
	return gulp.src('app/scss/main.scss')
		.pipe(sass())
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('browser-sync', function () {
	browserSync.init(['app/css/*.css'], {
		server: {
			baseDir: 'app'
		}
	});
});

gulp.task('watch', ['sass', 'browser-sync'], function () {
	gulp.watch(['app/scss/**/*.scss'], ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/dist/**/*.js', browserSync.reload);
});
