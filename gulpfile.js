var gulp = require('gulp');
// Gulp dependencies go here
var babel = require('gulp-babel');

gulp.task('default', function() {
  // Gulp tasks go here
  // Node source
  gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
  // browser source
  gulp.src("public/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));
});