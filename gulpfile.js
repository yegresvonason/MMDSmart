const gulp = require('gulp'),
			pug = require('gulp-pug'),
			watch = require('gulp-watch'),
			sass = require('gulp-sass');

/*	.pug to .html	*/
gulp.task ('pug', () => {
	const run = () => gulp.src('./pug/*.pug')
		.pipe(pug({pretty: true}))
		.pipe(gulp.dest('./')); 

		watch('./pug/*.pug', run);

		return run();
});
/*	sass to css	*/
gulp.task('sass', () => {
	const start = () => gulp.src('./sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'));

		watch('./sass/*.scss', start);

		return start();
});

gulp.task('default', ['pug', 'sass']);