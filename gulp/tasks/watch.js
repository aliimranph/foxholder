var gulp = require("gulp"),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

gulp.task('watch', function() {

	browserSync.init({
		open: 'external',
	    host: 'localhost',
	    proxy: 'localhost',
	    port: 80,
	    files: '/foxholder-new'
	});

	watch('index.html', function() {
		browserSync.reload();
	});

	watch('./src/*.js', function() {
        gulp.start('scriptsRefresh');
	});

	watch('./static/scss/**/*.scss', function() {
		gulp.start('cssInject');
	});
});

gulp.task('cssInject', ['scss'], function() {
	return gulp.src('./src/foxholder.min.css')
		.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', function() {
    browserSync.reload();
});