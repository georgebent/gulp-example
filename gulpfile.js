var gulp = require('gulp'),
	jade = require('gulp-jade'),
	sass = require('gulp-sass');
	prettify = require('gulp-html-prettify');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('hello', function() {
  console.log('Hello Yura');
});

gulp.task('sass', function(){
   gulp.src('app/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/builds/css'));
});

gulp.task('jade', function() {
	var YOUR_LOCALS = {};
    gulp.src('app/templates/*.jade')
    .pipe(jade({
    	locals: YOUR_LOCALS
    })) 
    .pipe(prettify({
      unformatted: []
    }))
    .pipe(gulp.dest('app/builds/templates')); // указываем gulp куда положить скомпилированные HTML файлы
});