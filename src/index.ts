class D {
	private _date: Date;

	constructor(...args: ConstructorParameters<typeof Date>) {
		this._date = new Date(...args);
	}

	// Getters for various date parts
	get year(): number { return this._date.getFullYear(); }
	get yr(): string { return this._date.getFullYear().toString().slice(-2); }
	get month(): string {
		const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June',
			'July', 'August', 'September', 'October', 'November', 'December'];
		return months[this._date.getMonth()];
	}
	get mon(): string { return this.month.slice(0, 3); }
	get day(): string {
		const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		return days[this._date.getDay()];
	}
	get dy(): string { return this.day.slice(0, 3); }
	get date(): number { return this._date.getDate(); }
	get hours(): number { return this._date.getHours(); }
	get mins(): number { return this._date.getMinutes(); }
	get secs(): number { return this._date.getSeconds(); }

	// Padding function for zero-padding
	private _pad(n: number): string {
		return n < 10 ? '0' + n : n.toString();
	}

	// Function to get the ordinal suffix for a number
	private _getOrdinal(n: number): string {
		const suffixes: string[] = ['th', 'st', 'nd', 'rd'];
		const val = n % 100;
		return suffixes[(val - 20) % 10] || suffixes[val] || suffixes[0];
	}

	// Format function to replace mask characters with date components
	format(mask: string = 'Y M D'): string {
		const replacements: { [key: string]: string } = {
			'Y': this.year.toString(),
			'y': this.yr,
			'M': this.month,
			'm': this.mon,
			'D': this._pad(this.date),
			'd': this.date.toString(),
			'L': this.day,
			'l': this.dy,
			'#': this.date + this._getOrdinal(this.date),
			'H': this._pad(this.hours),
			'h': this.hours.toString(),
			'I': this._pad(this.mins),
			'i': this.mins.toString(),
			'S': this._pad(this.secs),
			's': this.secs.toString()
		};

		// Replace each formatting character in the mask
		return mask.replace(/Y|y|M|m|D|d|L|l|#|H|h|I|i|S|s/g, match => replacements[match]);
	}

	when(): string {
		const now: Date = new Date();
		const diff: number = this._date.getTime() - now.getTime();
		const diffDays: number = Math.floor(diff / (1000 * 60 * 60 * 24));
		const diffMonths: number = (this._date.getFullYear() - now.getFullYear()) * 12 + (this._date.getMonth() - now.getMonth());
		const diffYears: number = this._date.getFullYear() - now.getFullYear();
	  
		if (diffDays === 0) {
			return 'today';
		} else if (diffDays === 1) {
			return 'tomorrow';
		} else if (diffDays === -1) {
			return 'yesterday';
		} else if (diffDays > 1 && diffDays < 7) {
			return `${diffDays} days from now`;
		} else if (diffDays < -1 && diffDays > -7) {
			return `${-diffDays} days ago`;
		} else if (diffMonths === 1) {
			return '1 month from now';
		} else if (diffMonths === -1) {
			return '1 month ago';
		} else if (diffMonths > 1 && diffMonths < 12) {
			return `${diffMonths} months from now`;
		} else if (diffMonths < -1 && diffMonths > -12) {
			return `${-diffMonths} months ago`;
		} else if (diffYears === 1) {
			return '1 year from now';
		} else if (diffYears === -1) {
			return '1 year ago';
		} else if (diffYears > 1) {
			return `${diffYears} years from now`;
		} else if (diffYears < -1) {
			return `${-diffYears} years ago`;
		}
	  
		return '';
	}
}

export default D;
