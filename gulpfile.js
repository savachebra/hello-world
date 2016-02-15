var gulp = require('gulp');
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');

gulp.task('default', function() {
  // Run ESLint
  gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
    .pipe(eslint())
    .pipe(eslint.format());
  // Node source
  gulp.src("es6/**/*.js")
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulp.dest("dist"));
  // browser source
  gulp.src("public/es6/**/*.js")
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulp.dest("public/dist"));
});
