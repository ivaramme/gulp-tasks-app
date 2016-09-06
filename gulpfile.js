var gulp    = require('gulp'),
    concat  = require('gulp-concat'),
    connect = require('gulp-connect');

gulp.task('js', function() {
	gulp.src(['./js/*.js', '!./js/all.js'])
			.pipe(concat('all.js'))
			.pipe(gulp.dest('./js'));
});

gulp.task('watch', function() {
   gulp.watch('./js/*', function () {
       gulp.run('js');
   });
});

gulp.task('webserver', function() {
  connect.server( { port: 3000 } );
});

gulp.task('default', ['js','webserver','watch']);
