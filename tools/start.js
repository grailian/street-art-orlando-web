console.log('start');

var spawn = require('child_process').spawn;
var opn = require('opn');

var child1 = spawn('webpack-dev-server', ['--port', '8081', '--colors']);
child1.stdout.pipe(process.stdout);
child1.stderr.pipe(process.stderr);

setTimeout(function() {
  opn('http://localhost:8081');
}, 2000);
