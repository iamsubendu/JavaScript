let a = '5' + 3;
console.log(a); //53
console.log(typeof a); //string
// The + operator is used for both addition and string concatenation in JavaScript.

let b = '5' - 3;
console.log(b); //2
console.log(typeof b); //number
// The sub/mul/div operator is used for numerical operation.

console.log(5 == '5');
// true
// The == operator compares the values after performing type conversion if necessary.
console.log(5 === '5');
// false

console.log(NaN == 'NaN');
// false
// When you compare NaN == 'NaN', JavaScript attempts to convert both sides
// to the same type, but NaN does not equal any string(even the string 'NaN'),
// so the result is false.
console.log(NaN === 'NaN');
// false
// The strict equality operator(===) checks both the value and the type
// without any type conversion.Since NaN is of type number and 'NaN' is
// of type string, NaN === 'NaN' will also return false

console.log(1 < 2 < 3);
// true
// Step 1: 1 < 2 is evaluated first.
// This is true, so the expression becomes true < 3.
// Step 2: true is converted to a number for the comparison, where true becomes 1.
// Now, the expression is 1 < 3.
// Step 3: 1 < 3 is true.
console.log(3 > 2 > 1);
// false
// Step 1: 3 > 2 is evaluated first.
// This is true, so the expression becomes true > 1.
// Step 2: true is converted to a number for the comparison, where true becomes 1.
// Now, the expression is 1 > 1.
// Step 3: 1 > 1 is false.
