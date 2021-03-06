var parseArgs = require('minimist');

const through2 = require('through2');
const fs = require('fs');
const { pipeline } = require('stream');
var argv = require('minimist')(process.argv.slice(2));

const { exit } = require('./customExit')
const { checkArgs } = require('./checkArgs');
const { inputStream } = require('./inputStream');
const { outputStream} = require('./outputStream');
const { encode } = require('./cipher');
const { decode } = require('./cipher');
const CustomError = require('./CustomError');

try {
	var shift = argv['s'] || argv['shift'];
	var input = argv['i'] || argv['input'];
	var output = argv['o'] || argv['output'];
	var action = argv['a'] || argv['action'];

	if ((argv['s'] && argv['shift']) || (argv['i'] && argv['input']) ||
		(argv['o'] && argv['output']) || (argv['a'] && argv['action']) || 
		Array.isArray(shift) || Array.isArray(input) || 
		Array.isArray(output) || Array.isArray(action)) throw new CustomError("Options error", 3);

	checkArgs(shift, action);

	pipeline(
		inputStream(input),
		(action === 'encode') ? through2(encode(shift)) : through2(decode(shift)),
		outputStream(output),
		complete => {
			outputStream(output).write('\n');
			console.log(action + " completed.");
	  });

} catch (error) {
	exit(error);
	process.exit(error.statusCode);
}