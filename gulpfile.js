var gulp   = require('gulp'),
    uglify = require('gulp-uglify'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    concat = require('gulp-concat-css'),
    minify = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sass   = require('gulp-sass'),
    jshint = require('gulp-jshint');

gulp.task('default', function() {

});
  
gulp.task('html', function () {
    var assets = useref.assets();
 
    return gulp.src('index.html')
        .pipe(assets)
        .pipe(gulpif('*.js', uglify()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('build'));
});


gulp.task('sass:watch', function () {
  gulp.watch('assets/sass/**/*.sass', ['sass']);
});

gulp.task('concat', function () {
  return gulp.src('assets/css/**/*.css')
    .pipe(concat("bundle.css"))
    .pipe(gulp.dest('build/css/'));
});

gulp.task('minify', function() {
  return gulp.src('styles/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/css/'));
});

gulp.task('sass', function () {
    gulp.src('assets/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('build/temp/'))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('build/css/'))
        .pipe(minify())
        .pipe(gulp.dest('build/css'));
});