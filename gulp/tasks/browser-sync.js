'use strict';

// Necessary Plugins
var gulp        = require('gulp');
var paths       = require('../paths');
var browserSync = require('browser-sync');

// Serve files from /www/
module.exports = gulp.task('browser-sync', function() {
	var files = [
		paths.browserSync.html,
		paths.browserSync.js,
		paths.browserSync.css,
		paths.browserSync.img
	];

	browserSync.init(files, {
		server: {
			baseDir: paths.build.html
		}
	});
});
