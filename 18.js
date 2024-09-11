// One of the biggest problems with declaring variables with the
// var keyword is that you can easily overwrite variable declarations
var camper = "James";
var camper = "David";
console.log(camper);
// A keyword called let was introduced in ES6, a major update to
// JavaScript, to solve this potential issue with the var keyword.
// So unlike var, when you use let, a variable with the same
// name can only be declared once.
// const has all the awesome features that let has, with the added bonus
// that variables declared using const are read-only.They are a constant
// value, which means that once a variable is assigned with const, it
// cannot be reassigned

// When you declare a variable with the var keyword, it is declared globally,
// The let keyword behaves similarly, but with some extra features.When
// you declare a variable with the let keyword inside a block, statement,
// or expression, its scope is limited to that block, statement, or expression.
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray, "numArray");
console.log(i);

let printNumTwo = [];
for (let j = 0; j < 3; j++) {
  printNumTwo.push(j);
}
console.log(printNumTwo, "printNumTwo");
// console.log(j); //ReferenceError: j is not defined
// It is important to understand that objects(including arrays and functions)
// assigned to a variable using const are still mutable.Using the const
// declaration only prevents reassignment of the variable identifier.
const s = [5, 6, 7];
console.log(s);
s[2] = 45;
console.log(s);
