exports.encode = (shift) => {
	return function (buffer, enc, callback) {
		if (Math.abs(shift) > 26) shift = shift % 26;
		for (let i = 0; i < buffer.length; i++) {
			if (buffer[i] >= 65 && buffer[i] <= 90) {
				buffer[i] += shift;
				if (buffer[i] < 65) buffer[i] += 26;
				if (buffer[i] > 90) buffer[i] -= 26;
			} else if (buffer[i] >= 97 && buffer[i] <= 122) {
				buffer[i] += shift;
				if (buffer[i] < 97) buffer[i] += 26;
				if (buffer[i] > 122) buffer[i] -= 26;
			}
		}
		this.push(buffer);
		callback();
	}
}

exports.decode = (shift) => {
	return function (buffer, enc, callback) {
		if (Math.abs(shift) > 26) shift = shift % 26;
		for (let i = 0; i < buffer.length; i++) {
			if (buffer[i] >= 65 && buffer[i] <= 90) {
				buffer[i] -= shift;
				if (buffer[i] < 65) buffer[i] += 26;
				if (buffer[i] > 90) buffer[i] -= 26;
			} else if (buffer[i] >= 97 && buffer[i] <= 122) {
				buffer[i] -= shift;
				if (buffer[i] < 97) buffer[i] += 26;
				if (buffer[i] > 122) buffer[i] -= 26;
			}
		}
		this.push(buffer);
		callback();
	}
}