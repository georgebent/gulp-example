var gulp = require('gulp'),
	jade = require('gulp-jade'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch'),
	prettify = require('gulp-html-prettify'),
  browserSync = require('browser-sync').create();

gulp.task('hello', function() {
  console.log('Hello Yura');
});

gulp.task('sass', function(){
   gulp.src('app/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/builds/css'));
});

gulp.task('jade', function() {
    return gulp.src('app/templates/*.jade')
    .pipe(jade()) 
    .pipe(prettify({
      unformatted: []
    }))
    .pipe(gulp.dest('app/builds/templates'))
    });

gulp.task('watch', ['jade', 'sass'], function () {
  browserSync.init({
        server: {
            baseDir: "app/builds/templates/"
        }
    });
  gulp.watch('app/templates/*.jade', ['jade']);
  gulp.watch('app/scss/*.scss', ['sass']);
});

// gulp.watch('app/templates/*.jade', function (event) {
//   console.log('Event type: ' + event.type); // добавлено, изменено или удалено
//   console.log('Event path: ' + event.path); // путь к файлу
// });
// gulp.watch('app/scss/*.scss', function (event) {
//   console.log('Event type: ' + event.type); // добавлено, изменено или удалено
//   console.log('Event path: ' + event.path); // путь к файлу
// });


