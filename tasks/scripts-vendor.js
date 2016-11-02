/**
 * Created by dhruvdutt on 11/02/16.
 */

module.exports = function (gulp, plugins) {

	var vendorFiles = [
		'assets/web/assets/jquery/jquery.min.js',
		'assets/tether/tether.min.js',
		'assets/bootstrap/js/bootstrap.min.js',
		'assets/smooth-scroll/SmoothScroll.js',
		'assets/viewportChecker/jquery.viewportchecker.js',
		'assets/dropdown/js/script.min.js',
		'assets/touchSwipe/jquery.touchSwipe.min.js',
		'assets/bootstrap-carousel-swipe/bootstrap-carousel-swipe.js',
		'assets/masonry/masonry.pkgd.min.js',
		'assets/imagesloaded/imagesloaded.pkgd.min.js',
		'assets/theme/js/script.js',
		'assets/mobirise-gallery/script.js'
	];

	gulp.task('scripts:vendor', function() {
		gulp.src(vendorFiles)
			.pipe(plugins.concat('vendor.js'))
			.pipe(plugins.uglify())
			.pipe(gulp.dest('./dist/'));
	});

};
