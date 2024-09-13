const numbers = [1, 2, 3, 4, 6, 7];
console.log(numbers);
const add1 = [...numbers, 4];
console.log(add1);
const add2 = [0, ...numbers];
console.log(add2);
const index = numbers.indexOf(4);
// get values before index from start
const add3 = numbers.slice(0, index);
console.log(add3, "add3");
// get values from index to end
const add4 = numbers.slice(index);
console.log(add4, "add4");
// add a num in between
const add5 = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
console.log(add5, "add5");
// filter array
const rem1 = numbers.filter((n) => n !== 2);
console.log(rem1, "rem1");
// update array
const up1 = numbers.map((n) => (n === 2 ? 20 : n));
console.log(up1, "up1");
