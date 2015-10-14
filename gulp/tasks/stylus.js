'use strict';

// Necessary Plugins
var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var paths   = require('../paths');
var stylus  = require('gulp-stylus');

// Call Stylus
module.exports = gulp.task('stylus', function() {
	return gulp.src(paths.source.files.styl)
		.pipe(plumber())
		.pipe(stylus({
			compress: true
		}))
		.pipe(gulp.dest(paths.build.css))
});
