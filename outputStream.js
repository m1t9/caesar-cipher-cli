const fs = require('fs');
const CustomError = require('./CustomError');

exports.outputStream = (filePath) => {
	if (typeof filePath === 'undefined') {
		return process.stdout;
	} else {
		if (filePath) {
			try {
				fs.accessSync(filePath, fs.W_OK);
				return fs.createWriteStream(filePath, {flags : 'a'});
			} catch(err) {
				throw new CustomError(err.message, 2);
			}
		}
	};
}