var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-minify-css'),
    concat = require('gulp-concat-css'),
    useref = require('gulp-useref'),
    jshint = require('gulp-jshint');

var path = {
      build: { //Тут мы укажем куда складывать готовые после сборки файлы
          html: 'build/',
          js: 'build/js/',
          css: 'build/css/'
      },
      src: { //Пути откуда брать исходники
          html: 'src/index.html', 
          js: 'src/app/**/*.js',
          style: 'src/assets/scss/**/*.scss'
      },
      watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
          html: 'src/index.html',
          js: 'src/app/**/*.js',
          style: 'src/assets/scss/**/*.scss'
      },
      clean: './build'
};

gulp.task("build:styles", function () {
    gulp.src(path.src.style)
        .pipe(sass())
        .pipe(concat("all.min.css"))
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.css)) 
        .pipe(connect.reload());
});

gulp.task("build:app", function () {
    var assets = useref.assets();

    return gulp.src(path.src.html)
               .pipe(assets)
               .pipe(gulpif('*.js', uglify()))
               .pipe(assets.restore())
               .pipe(useref())
               .pipe(gulp.dest(path.build.html))
               .pipe(connect.reload());
});

gulp.task('jshint', function() {
  return gulp.src(path.src.js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task("server:run", ["build:styles","build:app","watch", "jshint"], function () {

    connect.server({
        root: "build",
        livereload : true
    });
})

gulp.task("watch", function () {
    gulp.watch(path.src.html, ["build:app"]);
    gulp.watch([path.watch.style],["build:styles","build:app"]);
    gulp.watch(path.watch.js,["jshint", "build:app"]);
});

gulp.task("default", ["server:run"]);

