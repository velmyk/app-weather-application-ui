/* Gulp commands:
 * - 'gulp jshint': runs jshint for .js files
 * - 'gulp styles-dev': builds .scss to .css, makes sourcemap for .css file
 * - 'gulp styles-releace': builds .scss to .css, minifyes css, makes sourcemap for .css file
 * - 'gulp build-app-dev': runs 'gulp styles' + 'gulp jshint'
 *                         + puts into index.html dependencies of external libraries
 *                           and frameforks
 *                         + collects all .js files into main.js
 *                           and puts it into index.html.
 * - 'gulp server': runs server with lieveReload on 'http://localhost:8080'.
 * - 'gulp watch': watches for changes in source files.
 * - 'gulp build-app-release': do the same as 'gulp build-app-dev'
 *                             and uglifyes .js file.
 * - 'gulp' : 'gulp build-app-dev'
 *             + 'gulp server'
 *             + 'gulp watch'.
 * - 'gulp-release' : 'gulp build-app-release'
 *                     + 'gulp server'
 *                     + 'gulp watch'.
*/



var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    useref = require('gulp-useref'),
    jshint = require('gulp-jshint'),
    cssmin = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require("gulp-rename"),
    svgSprite = require('gulp-svg-sprite'),
    prefix  = require('gulp-autoprefixer'),
    templateCache = require('gulp-angular-templatecache'),
    ngAnnotate = require('gulp-ng-annotate');

var path = {
      build: { //Build files
          html: 'build/',
          js: 'build/js/',
          css: 'build/css/',
          svg: 'build/svg/'
      },
      src: { //Source files
          html: 'src/index.html',
          js: 'src/app/**/*.js',
          style: 'src/assets/scss/main.scss',
          svg: 'src/assets/svg/*.svg',
          views: 'src/app/**/*.html'
      },
      watch: { // Which files we want to watch
          html: ['src/app/**/*.html','src/index.html'],
          js: 'src/app/**/*.js',
          style: ['src/assets/scss/main.scss', 'src/app/**/*.scss'],
          svg: 'src/assets/svg/*.svg'
      }
};


gulp.task('jshint', function() {
  return gulp.src(path.src.js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('styles-dev', function () {
    gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefix("last 2 version", "> 1%", "ie 8"))//added autoprefixer
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(connect.reload());
});

gulp.task('styles-release', function () {
    gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefix("> 1%"))
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(connect.reload());
});

gulp.task('build-app-dev', ['views','styles-dev', 'svg', 'jshint'],  function () {
    var assets = useref.assets();

    return gulp.src(path.src.html)
               .pipe(assets)
               .pipe(gulpif('*.js', ngAnnotate()))
               .pipe(assets.restore())
               .pipe(useref())
               .pipe(gulp.dest(path.build.html))
               .pipe(connect.reload());
});

gulp.task('build-app-release', ['views','styles-release', 'svg', 'jshint'],  function () {
    var assets = useref.assets();

    return gulp.src(path.src.html)
               .pipe(assets)
               .pipe(gulpif('*.js', ngAnnotate()))
               .pipe(gulpif('*.js', uglify()))
               .pipe(assets.restore())
               .pipe(useref())
               .pipe(gulp.dest(path.build.html))
               .pipe(connect.reload());
});

gulp.task('server', function () {

    connect.server({
        root: 'build',
        livereload : true
    });
});

gulp.task('watch', function () {
    gulp.watch(path.watch.html, ['build-app-dev']);
    gulp.watch(path.watch.style,['build-app-dev']);
    gulp.watch(path.watch.js,['build-app-dev']);
    gulp.watch(path.watch.svg,['build-app-dev']);
});

gulp.task('svg', function() {
    var config = {
        dest : '.',
        mode : {
             css : {
                 dest : '.',
                 sprite : 'svg/sprite.svg'
                             }
         }
     };
 gulp.src(path.src.svg)
     .pipe(svgSprite(config))
     .pipe(rename('sprite.svg'))
     .pipe(gulp.dest(path.build.svg));
});

gulp.task("views", function() {
  return gulp.src(path.src.views)
    .pipe(templateCache('templates.js', { module:'templates', standalone:true }))
    .pipe(gulp.dest(path.build.js));
});

gulp.task('default', ['build-app-dev', 'server', 'watch']);

gulp.task('release', ['build-app-release', 'server', 'watch']);
