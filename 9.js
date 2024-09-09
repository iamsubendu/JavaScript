let num = Number('12');
console.log(num, 'num'); // 12
console.log(typeof num); // "number"

let num1 = +'12';
console.log(num1, 'num1'); // 12
console.log(typeof num1); // "number"

let num2 = parseInt('12', 10);
console.log(num2, 'num2'); // 12
console.log(typeof num2); // "number"

let num3 = parseFloat('12');
console.log(num3, 'num3'); // 12
console.log(typeof num3); // "number"

console.log(+'12'); // 12
console.log(+'Hi'); // NaN

// The radix in parseInt can be any integer from 2 to 36,
// each corresponding to a different numeral system.Here’s what some of these radices mean:

// Binary (Base 2):

// parseInt('1101', 2) would interpret '1101' as a binary number, resulting in the decimal number 13.
// Octal (Base 8):
let num4 = parseInt('12', 2);
console.log(num4, 'num4');

// parseInt('14', 8) would interpret '14' as an octal number, resulting in the decimal number 12.
// Decimal (Base 10):
let num5 = parseInt('14', 8);
console.log(num5, 'num5');

// parseInt('12', 10) interprets '12' as a decimal number, resulting in 12.
// Hexadecimal (Base 16):

// parseInt('1C', 16) interprets '1C' as a hexadecimal number, resulting in the decimal number 28.
// Other Radices:
let num6 = parseInt('12', 16);
console.log(num6, 'num6');

// You can use any radix between 2 and 36.
//For example, parseInt('101', 3) interprets '101' as a base - 3 number, resulting in the decimal number 10.
// In general, radices beyond 10 use letters as digits:

// Base 16 (Hexadecimal): Uses digits 0-9 and letters A-F.
// Base 36: Uses digits 0-9 and letters A-Z.
// This allows parseInt to interpret strings in various numeral systems.
