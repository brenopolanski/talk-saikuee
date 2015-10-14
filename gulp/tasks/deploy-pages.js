'use strict';

// Necessary Plugins
var gulp   = require('gulp');
var paths  = require('../paths');
var deploy = require('gulp-gh-pages');

// Deploy to GitHub
module.exports = gulp.task('deploy-pages', function() {
	return gulp.src(paths.deploy.pages)
		.pipe(deploy());
});
