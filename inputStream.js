const fs = require('fs');
const CustomError = require('./CustomError');

exports.inputStream = (filePath) => {
	if (typeof filePath === 'undefined') {
		console.log("Enter sourse text:");
		return process.stdin;
	} else {
		try {
			fs.accessSync(filePath, fs.R_OK);
			return fs.createReadStream(filePath);
		} catch(err) {
			throw new CustomError(err.message, 2);
		}
	};
}