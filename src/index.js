class D {
	constructor(...args) {
		this._date = new Date(...args)
	}

	// Getter for full year (e.g. 2021)
	get year() {
		return this._date.getFullYear()
	}

	// Getter for short year (e.g. 21)
	get yr() {
		return this._date.getFullYear().toString().slice(-2)
	}

	// Getter for full month name (e.g. July)
	get month() {
		const months = [
			'January', 'February', 'March', 'April', 'May', 'June',
			'July', 'August', 'September', 'October', 'November', 'December'
		];
		return months[this._date.getMonth()];
	}

	// Getter for short month name (e.g. Jul)
	get mon() {
		return this.month.slice(0, 3);
	}

	// Getter for full day name (e.g. Tuesday)
	get day() {
		const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		return days[this._date.getDay()];
	}

	// Getter for short day name (e.g. Tue)
	get dy() {
		return this.day.slice(0, 3);
	}

	// Getter for date (e.g. 27)
	get date() {
		return this._date.getDate();
	}

	// Getter for hours (e.g. 18)
	get hours() {
		return this._date.getHours();
	}

	// Getter for minutes (e.g. 6)
	get mins() {
		return this._date.getMinutes();
	}

	// Getter for seconds (e.g. 5)
	get secs() {
		return this._date.getSeconds();
	}
}

// // Example usage:
// const d = new D();
// console.log(d.year);  // Full year (e.g. 2021)
// console.log(d.yr);    // Short year (e.g. 21)
// console.log(d.month); // Full month (e.g. July)
// console.log(d.mon);   // Short month (e.g. Jul)
// console.log(d.day);   // Full day (e.g. Tuesday)
// console.log(d.dy);    // Short day (e.g. Tue)
// console.log(d.date);  // Date (e.g. 27)
// console.log(d.hours); // Hours (e.g. 18)
// console.log(d.mins);  // Minutes (e.g. 6)
// console.log(d.secs);  // Seconds (e.g. 5)

module.exports = D;