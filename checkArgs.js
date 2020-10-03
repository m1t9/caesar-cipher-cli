const CustomError = require('./CustomError');

exports.checkArgs = (shift, action) => {

	if (typeof shift === 'undefined') throw new CustomError("Error: shift undefined", 1);
	if (isNaN(parseInt(shift))) throw new CustomError("Error: shift is not a number", 1);

	if (typeof action === 'undefined') throw new CustomError("Error: action is not defined", 1);
	if(action !== 'encode' && action !== 'decode') throw new CustomError("Error: action invalid value", 1);
	
}