var gulp = require('gulp');
var sass = require('gulp-sass');


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
	  	.pipe(gulp.dest('dist/css'));

});

