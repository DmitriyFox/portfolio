var gulp = require('gulp');
var tinypng = require('gulp-tinypng-compress');
 
gulp.task('tinypng', function (done) {
    gulp.src('img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'C8bgTNPjspCJXSBT70152YQByB6J63LM',
        }))
        .pipe(gulp.dest('images'));
        done();
});