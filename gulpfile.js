var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var sourcemaps = require("gulp-sourcemaps");
gulp.task('css', function () {
    var plugins = [
        autoprefixer({browsers: ['last 1 version']}),
        cssnano()
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(plugins))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write("maps/"))
        .pipe(gulp.dest('./dest'));
});

gulp.task('css2', function () {
    return gulp.src('./src/*.css')
        .pipe(postcss())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write("maps/"))
        .pipe(gulp.dest('./dest'));
});