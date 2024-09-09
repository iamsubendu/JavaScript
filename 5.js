let arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
let arr1 = [1, 2, 3];
arr1.pop(); // [1, 2]
let arr2 = [1, 2, 3];
arr2.shift(); // [2, 3] Removes the first element of the array.
let arr4 = [1, 2, 3];
arr4.unshift(0); // [0, 1, 2, 3] Adds an element to the beginning of the array

[1, 2, 3].map((x) => x * 2); // [2, 4, 6]
[1, 2, 3, 4].filter((x) => x > 2); // [3, 4]
[1, 2, 3, 4].reduce((sum, x) => sum + x, 0); // 10

Math.abs(-5); // 5
Math.max(1, 2, 3); // 3
Math.min(1, 2, 3); // 1
Math.random(); // e.g., 0.2345 Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive)
Math.floor(4.7); // 4
Math.ceil(4.3); // 5

parseInt('123'); // 123

parseFloat('123.45'); // 123.45

let num = 5.6789;

num.toFixed(2); // '5.68'
