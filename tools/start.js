console.log('start');

var spawn = require('child_process').spawn;
// var build = require('./build');
// var serve = require('./serve');

// build();
// serve();

var child = spawn('webpack', ['--colors']);
child.stdout.on('data', function(chunk) {

    var child2 = spawn('gulp', ['serve']);
    child2.stdout.pipe(process.stdout);

    var child3 = spawn('webpack', ['--colors', '--watch']);
    child3.stdout.pipe(process.stdout);
});
