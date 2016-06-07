console.log('start');

var spawn = require('child_process').spawn;
var opn = require('opn');

var child = require('./build');
child.stdout.on('close', function(chunk) {

  require('../server.js');

  var child3 = spawn('webpack', ['--colors', '--watch']);
  child3.stdout.pipe(process.stdout);
  child3.stderr.pipe(process.stderr);

});

setTimeout(function() {
  opn('http://localhost:8000');
}, 2000);
