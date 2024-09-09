// Recursion
// A function calls over itself over and over

function functionName() {
  // baseCase
  // if base case fails -> recursive call to itself
}

function factorial(n) {
  if (n == 1 || n == 0) return 1;
  else return n * factorial(n - 1);
}
console.log(factorial(4));
// 4 * factorial(3);
// 3 * factorial(2);
// 2 * factorial(1);
// 1
// 4 * 3 * 2 * 1
