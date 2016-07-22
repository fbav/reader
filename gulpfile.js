'use strict';
let jshint = require('gulp-jshint'),
	gulp = require('gulp'),
	inject = require('gulp-inject'),
	mocha = require('gulp-mocha'),
	babel = require('gulp-babel');

require('babel-register');

let jsSrc = 'src/**/*.js',
	cssSrc = 'src/**/*.css',
	testSrc = 'test/**/*.js';

gulp.task('lint', function () {
	return gulp.src(jsSrc)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('test', () => {
	return gulp.src(testSrc, {
			read: false
		})
		.pipe(mocha({
			reporter: 'nyan',
			compilers: [
            'js:babel-core/register',
        ]
		}));
});

gulp.task('inject', function () {
	let target = gulp.src('./src/index.html'),
		css = gulp.src(cssSrc);

	return target.pipe(inject(gulp.src(['./src/**/*.js', './src/**/*.css'], {
			read: false
		}), {
			relative: true
		}))
		.pipe(gulp.dest('./build')),
		css.pipe(gulp.dest('./build/'));
});

gulp.task('build', function () {

	return gulp.src(jsSrc)
		.pipe(babel())
		.pipe(gulp.dest('./build/'));
});

gulp.task('default', ['lint', 'test', 'build', 'inject']);