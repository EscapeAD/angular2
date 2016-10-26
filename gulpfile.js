var gulp  = require('gulp'),
    babel = require('gulp-babel');

gulp.task('default', function() {
  // place code for your default task here
  return gulp.src("src/app.js")
             .pipe(babel())
             .pipe(gulp.dest("dist"));
});
