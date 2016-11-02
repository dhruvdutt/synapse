/**
 * Created by dhruvdutt on 11/02/16.
 */

module.exports = function(gulp, plugins) {

	var vendorFiles = [
		'assets/et-line-font-plugin/style.css',
		'assets/bootstrap-material-design-font/css/material.css',
		'assets/tether/tether.min.css',
		'assets/bootstrap/css/bootstrap.min.css',
		'assets/socicon/css/socicon.min.css',
		'assets/animate.css/animate.min.css',
		'assets/dropdown/css/style.css',
		'assets/theme/css/style.css',
		'assets/mobirise-gallery/style.css',
		'assets/mobirise/css/mbr-additional.css" type="text/css'
	];

	gulp.task('styles:vendor', function() {
		gulp.src(vendorFiles)
			.pipe(plugins.concatCss('vendor.css'))
			.pipe(gulp.dest('./dist/'));
	});

}
