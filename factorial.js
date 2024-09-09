const factorial = (num) => {
  let res = 1;
  if (num === 0) {
    return 1;
  }
  for (let i = 1; i <= num; i++) {
    res = res * i;
  }
  return res;
};
const data = factorial(5);
console.log(data);
const data1 = factorial(0);
console.log(data1);

// or we can use recursion

function factorialR(n) {
  if (n == 1 || n == 0) return 1;
  else return n * factorialR(n - 1);
}
console.log(factorialR(4));
