exports.exit = (err) => {
	process.on('exit', function (){
	    process.stderr.write(err.message + "\nstatus code: " + err.statusCode);
	});
}