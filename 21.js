function sayHello() {
  return "hello";
}
let fn = sayHello;
// We are not calling sayHello yet, just referencing the function itself.
// Now, fn holds a reference to the same function.
console.log(fn());

// Higher Order Functions
// Function which takes function as an argument or returns a function or both
function a() {
  return function () {
    return "c";
  };
}
let f = a();
let message = fn();

let numbers = [1, 2, 3];
// map is also an HOC as its takes function as an argument
numbers.map((num) => num * 2);
// setTimeout is also HOC
setTimeout(() => console.log("first"), 1000);
