class D {
	constructor(...args) {
		this._date = new Date(...args);
	}

	// Getters for various date parts
	get year() { return this._date.getFullYear(); }
	get yr() { return this._date.getFullYear().toString().slice(-2); }
	get month() {
		const months = ['January', 'February', 'March', 'April', 'May', 'June',
			'July', 'August', 'September', 'October', 'November', 'December'];
		return months[this._date.getMonth()];
	}
	get mon() { return this.month.slice(0, 3); }
	get day() {
		const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		return days[this._date.getDay()];
	}
	get dy() { return this.day.slice(0, 3); }
	get date() { return this._date.getDate(); }
	get hours() { return this._date.getHours(); }
	get mins() { return this._date.getMinutes(); }
	get secs() { return this._date.getSeconds(); }

	// Padding function for zero-padding
	_pad(n) {
		return n < 10 ? '0' + n : n;
	}

	// Function to get the ordinal suffix for a number
	_getOrdinal(n) {
		const suffixes = ['th', 'st', 'nd', 'rd'];
		const val = n % 100;
		return suffixes[(val - 20) % 10] || suffixes[val] || suffixes[0];
	}

	// Format function to replace mask characters with date components
	format(mask = 'Y M D') {
		const replacements = {
			'Y': this.year,
			'y': this.yr,
			'M': this.month,
			'm': this.mon,
			'D': this._pad(this.date),
			'd': this.date,
			'L': this.day,
			'l': this.dy,
			'#': this.date + this._getOrdinal(this.date),
			'H': this._pad(this.hours),
			'h': this.hours,
			'I': this._pad(this.mins),
			'i': this.mins,
			'S': this._pad(this.secs),
			's': this.secs
		};

		// Replace each formatting character in the mask
		return mask.replace(/Y|y|M|m|D|d|L|l|#|H|h|I|i|S|s/g, match => replacements[match]);
	}
}

module.exports = D;
