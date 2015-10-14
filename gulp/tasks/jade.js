'use strict';

// Necessary Plugins
var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var paths   = require('../paths');
var fs      = require('fs');
var jade    = require('gulp-jade');

// Call Jade to compile Templates
module.exports = gulp.task('jade', function() {
	return gulp.src(paths.source.files.jade)
		.pipe(plumber())
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest(paths.build.html))
});
