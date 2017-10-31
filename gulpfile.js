var gulp = require('gulp'),
	jade = require('gulp-jade'),
  gutil          = require('gulp-util' ),
  sass           = require('gulp-sass'),
  browserSync    = require('browser-sync'),
  concat         = require('gulp-concat'),
  uglify         = require('gulp-uglify'),
  cleanCSS       = require('gulp-clean-css'),
  rename         = require('gulp-rename'),
  del            = require('del'),
  imagemin       = require('gulp-imagemin'),
  cache          = require('gulp-cache'),
  autoprefixer   = require('gulp-autoprefixer'),
  ftp            = require('vinyl-ftp'),
  notify         = require("gulp-notify"),
  rigger         = require('gulp-rigger'),
  rsync          = require('gulp-rsync'),
	watch          = require('gulp-watch'),
	prettify       = require('gulp-html-prettify');

gulp.task('hello', function() {
  console.log('Hello George');
});

gulp.task('sass', function(){
   return gulp.src('app/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({suffix: '.min', prefix : ''}))
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(cleanCSS())
    .pipe(gulp.dest('app/builds'))
    .pipe(browserSync.stream());
});

gulp.task('jade', function() {
    return gulp.src('app/templates/*.jade')
    .pipe(jade()) 
    .pipe(rigger())
    .pipe(prettify({
      unformatted: []
    }))
    .pipe(gulp.dest('app/builds/'))
    .pipe(browserSync.stream());
  });

gulp.task('js', function() {
  return gulp.src([
    'app/js/*.js',
    ])
  .pipe(concat('scripts.min.js'))
  .pipe(uglify()) 
  .pipe(gulp.dest('app/builds'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "app/builds/"
    },
    // tunnel: true,
    // tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
  });
});

gulp.task('watch', ['jade', 'sass', 'browser-sync'], function () {
  gulp.watch('app/templates/*.jade', ['jade']);
  gulp.watch('app/scss/*.scss', ['sass']);
  gulp.watch(['app/js/*.js'], ['js']);
  gulp.watch('app/builds/*.*', browserSync.reload);
});

gulp.watch('app/templates/*.jade', function (event) {
  console.log('Event type: ' + event.type); 
  console.log('Event path: ' + event.path); 
});
gulp.watch('app/scss/*.scss', function (event) {
  console.log('Event type: ' + event.type); 
  console.log('Event path: ' + event.path); 
});

