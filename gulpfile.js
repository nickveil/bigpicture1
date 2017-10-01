var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
// var input=

//var sassSrc = 'app/scss/**/*.scss'
//var htmlSrc = 'app/**/*.html'


gulp.task('default', function() {
	console.log('Default task');
});

// grab all .scss files
// from /app/scss (input directory)
//run sass on them
//put css files in /dist/css (output directory)
//

gulp.task('sassify', function(){
	return gulp.src('app/scss/**/*.scss')
	  	.pipe(sass())
	  	.pipe(gulp.dest('dist/css'))
	  	.pipe(browserSync.reload({
	  		stream: true
	  	}));

});

gulp.task('htmlify', function(){
  	return gulp.src('app/**/*.html')
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.reload({
			stream: true
	}));
});


gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: 'dist'
		}
	});
});

gulp.task('watch', ['sassify','browserSync'] ,function(){
	gulp.watch('app/scss/**/*.scss',['sassify'])
	gulp.watch('app/**/*.html',['htmlify'])
	});


