// d.test.js
const D = require('../src/index');  // Adjust the path to the D class if necessary

describe('D Class', () => {
	let d;

	beforeEach(() => {
		// Create a specific date for consistent testing
		d = new D(2021, 6, 27, 18, 6, 5);  // July 27, 2021, 18:06:05
	});

	test('should return the correct full year', () => {
		expect(d.year).toBe(2021);
	});

	test('should return the correct short year', () => {
		expect(d.yr).toBe('21');
	});

	test('should return the correct full month name', () => {
		expect(d.month).toBe('July');
	});

	test('should return the correct short month name', () => {
		expect(d.mon).toBe('Jul');
	});

	test('should return the correct full day name', () => {
		expect(d.day).toBe('Tuesday');
	});

	test('should return the correct short day name', () => {
		expect(d.dy).toBe('Tue');
	});

	test('should return the correct date', () => {
		expect(d.date).toBe(27);
	});

	test('should return the correct hours', () => {
		expect(d.hours).toBe(18);
	});

	test('should return the correct minutes', () => {
		expect(d.mins).toBe(6);
	});

	test('should return the correct seconds', () => {
		expect(d.secs).toBe(5);
	});
});
