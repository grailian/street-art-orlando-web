var gulp = require('gulp');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var opn = require('opn');
var sass = require("gulp-sass");

var config = {
  rootDir: '.',
  servingPort: 8080,
  servingDir: './dist',
  paths: {
    src: {
      scripts: './src/**/*.js',
      styles: './src/**/*.css',
      images: '',
      index: './src/index.html',
      partials: ['./src/**/*.html', '!./index.html'],

    },
    distDev: './dist.dev',
    distProd: './dist.prod'
  }
}

gulp.task('build', function() {

});

gulp.task('serve', ['connect'], function() {
  return opn('http://localhost:' + config.servingPort);
});

gulp.task('livereload', function() {
  console.log('reloading')
  gulp.src(config.filesToWatch)
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: config.servingDir,
    port: config.servingPort,
    livereload: false,
    fallback: config.servingDir + '/index.html'
  });
});

gulp.task('watch', function() {
  gulp.watch([config.sourcePaths.css, config.sourcePaths.html, config.sourcePaths.js], ['livereload']);
});

gulp.task('default', ['serve']);

gulp.task("styles", function() {
  return gulp.src("src/index.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/sass-out/"));
});

//default: clean-build-prod
//serve dev
