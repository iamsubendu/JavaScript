const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

// In order to help us create more flexible functions, ES6
// introduces default parameters for functions.
const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John"));
console.log(greeting());

// ES6 introduces the rest parameter for function parameters.
// With the rest parameter, you can create functions that take a
// variable number of arguments.These arguments are stored in an
// array that can be accessed later from inside the function.
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], {}));

// ES6 introduces the spread operator, which allows us to expand
// arrays and other expressions in places where multiple parameters
// or elements are expected.
