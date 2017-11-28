var gulp = require('gulp');
var tsb = require('gulp-tsb')
// TypeScript build for /src folder 
var tsConfigSrc = tsb.create('./tsconfig.json');
gulp.task('build', function () {
    return gulp.src('./src/**/*.ts')
        .pipe(tsConfigSrc())
        .pipe(gulp.dest('./out'));
});

// watch for any TypeScript or LESS file changes
// if a file change is detected, run the TypeScript or LESS compile gulp tasks
gulp.task('watch', function () {
    gulp.watch('src/**/*.ts', ['build']);
});

gulp.task('default', ['build','watch']);
