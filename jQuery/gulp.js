var gulp = require('gulp');
var minifyCss = require("gulp-minify-css");
var sass = require("gulp-sass");

// minify & compile sass
gulp.task('compile-sass', function () {
    gulp.src('./public/sass/*.sass') // path to your file
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(gulp.dest('./public/css'));
});