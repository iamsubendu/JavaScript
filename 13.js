// Recursion is a programming concept where a function calls itself directly
// or indirectly to solve a problem.Recursion helps break down complex problems
// into simpler, smaller sub - problems that are easier to solve.Each recursive
// call processes a smaller part of the original problem, eventually leading
// to a base case where no more recursive calls are needed.

function factorial(n) {
  if (n <= 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}
console.log(factorial(5));

// Write a recursive function, sum(arr, n), that returns the sum of the first
// n elements of an array arr.

function sum(arr, n) {
  if (n <= 0) return 0;
  else if (n == 1) return arr[0];
  else return arr[n - 1] + sum(arr, n - 1);
}
const myArray = [1, 2, 3, 4, 5];
console.log(sum(myArray, 3)); // Output: 6 (1 + 2 + 3)

console.log(sum(myArray, 5)); // should equal 15.
console.log(sum([1], 0)); // should equal 0.
console.log(sum([2, 3, 4], 1)); // should equal 2.
console.log(sum([2, 3, 4, 5], 3)); // should equal 9.
console.log(sum([2, 3, 4, 5], -1));
console.log(sum([2, 3, 4, 5], 0));
