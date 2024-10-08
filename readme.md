# D - A Custom Date Library

The `D` class provides a way to create and manipulate dates with human-readable components and easy-to-use formatting options. This library offers various getters for date parts, customizable formatting, and a method to describe how far a date is from the current date.

## Installation

You can import this class into your project by requiring the module.

```javascript
const D = require('./path/to/D');
Class: D
Constructor
javascript
 
new D(...args)
Creates a new D instance using the arguments provided, which are passed to JavaScript's native Date constructor.

Parameters:
args {Array} - Arguments that are passed to the Date constructor (e.g., year, month, day).
Methods
year
javascript
 
D.year
Returns the full year of the date (e.g., 2024).

Returns:
{Number} Full year.
yr
javascript
 
D.yr
Returns the last two digits of the year (e.g., '24' for 2024).

Returns:
{String} Last two digits of the year.
month
javascript
 
D.month
Returns the full name of the month (e.g., 'January').

Returns:
{String} Full month name.
mon
javascript
 
D.mon
Returns the abbreviated name of the month (e.g., 'Jan' for January).

Returns:
{String} Abbreviated month name.
day
javascript
 
D.day
Returns the full name of the day of the week (e.g., 'Monday').

Returns:
{String} Full name of the day.
dy
javascript
 
D.dy
Returns the abbreviated name of the day of the week (e.g., 'Mon' for Monday).

Returns:
{String} Abbreviated day name.
date
javascript
 
D.date
Returns the day of the month (e.g., 25).

Returns:
{Number} The numeric day of the month.
hours
javascript
 
D.hours
Returns the hours of the date (in 24-hour format).

Returns:
{Number} The hour of the date (0-23).
mins
javascript
 
D.mins
Returns the minutes of the date.

Returns:
{Number} The minutes (0-59).
secs
javascript
 
D.secs
Returns the seconds of the date.

Returns:
{Number} The seconds (0-59).
Private Methods
_pad
javascript
 
D._pad(n)
Pads a number with a leading zero if it's less than 10.

Parameters:
n {Number} - The number to pad.
Returns:
{String} The padded number (e.g., '09' for 9).
_getOrdinal
javascript
 
D._getOrdinal(n)
Returns the ordinal suffix for a number (e.g., 1st, 2nd, 3rd, 4th).

Parameters:
n {Number} - The number to get the ordinal suffix for.
Returns:
{String} The ordinal suffix (e.g., 'st', 'nd', 'rd', 'th').
Public Methods
format
javascript
 
D.format(mask = 'Y M D')
Formats the date according to a given mask. The mask can include the following symbols:

Y: Full year (e.g., 2024)

y: Last two digits of the year (e.g., 24)

M: Full month name (e.g., January)

m: Abbreviated month name (e.g., Jan)

D: Zero-padded day of the month (e.g., 09)

d: Day of the month (e.g., 9)

L: Full day name (e.g., Monday)

l: Abbreviated day name (e.g., Mon)

#: Day of the month with ordinal suffix (e.g., 9th)

H: Zero-padded hour (e.g., 09)

h: Hour (e.g., 9)

I: Zero-padded minutes (e.g., 09)

i: Minutes (e.g., 9)

S: Zero-padded seconds (e.g., 09)

s: Seconds (e.g., 9)

Parameters:

mask {String} - The format mask (default is 'Y M D').
Returns:

{String} The formatted date string.
when
javascript
 
D.when()
Returns a human-readable string indicating how far the date is from the current date. The method returns phrases such as today, yesterday, tomorrow, 2 days ago, or 1 year from now.

Returns:
{String} A description of how far the date is from the present (e.g., '2 days ago', '1 year from now').
javascript
 

This `README.md` file documents all the methods of the `D` class, their usage, para