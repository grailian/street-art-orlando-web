console.log('build')

var spawn = require('child_process').spawn;
var child = spawn('webpack', ['--colors']);
child.stdout.pipe(process.stdout);

module.exports = child;
