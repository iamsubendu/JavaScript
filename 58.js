// closures

let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};
// the inner function having access to it parent function
// even after returning

let multiplyByTwo = multiply(2);
multiplyByTwo(3);

// sum(1)(2)...() //10

let target = 10;
let sum = function (a) {
  return function (b) {
    if (b) return sum(a + b);
    return a;
  };
};

console.log(sum(1)(2)(3)(4)());

let sum1 = (a) => {
  return (b) => {
    return b ? sum1(a + b) : a;
  };
};

let sum2 = (a) => (b) => b ? sum1(a + b) : a;
