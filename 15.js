// Random numbers are useful for creating random behavior.

// JavaScript has a Math.random() function that generates a random
//  decimal number between 0(inclusive) and 1(exclusive).Thus
// Math.random() can return a 0 but never return a 1.

function randomFraction() {
  return Math.random();
}
let num = randomFraction();
console.log(num);
// Use Math.floor() to round this number down to its nearest whole number
num = Math.floor(num * 10);
console.log(num);
