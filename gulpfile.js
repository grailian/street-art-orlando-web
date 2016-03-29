var gulp = require('gulp'),
  connect = require('gulp-connect'),
  opn = require('opn');

var config = {
    rootDir: '.',
    servingPort: 8080,
    filesToWatch: ['./*.{html,css,js}', './src/**/*.{html,css,js}', '!node_modules/**/*.js', '!./gulpfile.js']
}

gulp.task('serve', ['connect'], function () {
  return opn('http://localhost:' + config.servingPort);
});

gulp.task('livereload', function() {
  console.log('reloading')
  gulp.src(config.filesToWatch)
    .pipe(connect.reload());
});
 
gulp.task('connect', function() {
  connect.server({
  	root: config.rootDir,
  	port: config.servingPort,
    livereload: false,
    fallback: 'index.html'
  });
});
 
gulp.task('watch', function () {
  gulp.watch(config.filesToWatch, ['livereload']);
});
 
gulp.task('default', ['serve']);