let multiply = function (x, y) {
  console.log(x * y);
};

console.log(this);
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

let multiplyByFour = multiply.bind(this, 4, 3);
multiplyByFour(5); // ignores this value

let multiplyByFive = multiply.bind(this);
multiplyByFive(5, 5);

let multiplyBySix = multiply.bind(this);
multiplyBySix(); // if we don't pass anything -> NaN
