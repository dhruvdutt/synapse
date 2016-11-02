var gulp = require('gulp');

// This will load all the plugins with prefix 'gulp-'
// so need to include those plugins here
var plugins = require('gulp-load-plugins')();

// This will load all the tasks defined in tasks folder
require('load-gulp-tasks')(gulp, plugins);

gulp.task('default', [
	'scripts:vendor', 'styles:vendor'
]);
