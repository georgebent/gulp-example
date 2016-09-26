var gulp = require('gulp'),
	jade = require('gulp-jade'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch'),
	prettify = require('gulp-html-prettify'),
  browserSync = require('browser-sync').create();

gulp.task('hello', function() {
  console.log('Hello George');
});

gulp.task('sass', function(){
   return gulp.src('app/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/builds'))
    .pipe(browserSync.stream());
});

gulp.task('jade', function() {
    return gulp.src('app/templates/*.jade')
    .pipe(jade()) 
    .pipe(prettify({
      unformatted: []
    }))
    .pipe(gulp.dest('app/builds/'))
    .pipe(browserSync.stream());
  });

gulp.task('watch', ['jade', 'sass'], function () {
  browserSync.init({
        server: {
            baseDir: "app/builds/"
        }
    });
  gulp.watch('app/templates/*.jade', ['jade']);
  gulp.watch('app/scss/*.scss', ['sass']);
});

gulp.watch('app/templates/*.jade', function (event) {
  console.log('Event type: ' + event.type); 
  console.log('Event path: ' + event.path); 
});
gulp.watch('app/scss/*.scss', function (event) {
  console.log('Event type: ' + event.type); 
  console.log('Event path: ' + event.path); 
});

