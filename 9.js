let num = Number("12");
console.log(num, "num"); // 12
console.log(typeof num); // "number"

let num1 = +"12";
console.log(num1, "num1"); // 12
console.log(typeof num1); // "number"

let num2 = parseInt("12", 10);
console.log(num2, "num2"); // 12
console.log(typeof num2); // "number"
// The parseInt() function parses a string and returns an integer.
// It takes a second argument for the radix, which specifies
// the base of the number in the string.The radix can be an
// integer between 2 and 36.
// parseInt(string, radix);
console.log("num2", parseInt("10011", 2)); // to binary

let num3 = parseFloat("12");
console.log(num3, "num3"); // 12
console.log(typeof num3); // "number"

console.log(+"12"); // 12
console.log(+"Hi"); // NaN
