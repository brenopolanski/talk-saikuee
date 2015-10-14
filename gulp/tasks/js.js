'use strict';

// Necessary Plugins
var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var paths   = require('../paths');
var uglify  = require('gulp-uglify');
var concat  = require('gulp-concat');

// Call Uglify and Concat JS
module.exports = gulp.task('js', function() {
	return gulp.src(paths.source.js)
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest(paths.build.js))
});
