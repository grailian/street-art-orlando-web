console.log('build')

module.exports = function (){
	setTimeout(function(){
		console.log('building')
	}, 3000)
	
}

// var spawn = require('child_process').spawn;

// var child = spawn('webpack', ['--colors']);
// child.stdout.pipe(process.stdout);

