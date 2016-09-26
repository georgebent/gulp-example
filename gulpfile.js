var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('hello', function() {
  console.log('Hello Yura');
});

gulp.task('sass', function(){
   gulp.src('app/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'));
});