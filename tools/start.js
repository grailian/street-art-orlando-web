console.log('start');

var spawn = require('child_process').spawn;

var child = require('./build');

child.stdout.on('data', function(chunk) {

  var child2 = spawn('gulp', ['serve']);
  child2.stdout.pipe(process.stdout);

  var child3 = spawn('webpack', ['--colors', '--watch']);
  child3.stdout.pipe(process.stdout);
});
