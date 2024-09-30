// foreach -- their are 5 no in array but we want to print till 3 only

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index) => {
  if (index < 3) {
    console.log(number);
  }
});

const firstThreeNumbers = numbers.slice(0, 3);

firstThreeNumbers.forEach((number) => {
  console.log(number);
});

const limit = 3;

numbers.some((number, index) => {
  if (index < limit) {
    console.log(number);
    return false; // Continue iteration
  }
  return true; // Stop iteration
});

// The.some method in JavaScript is used to test whether at least one element
// in an array passes a specified condition.It returns a boolean value(true or false).
// The method stops processing as soon as it finds an element that satisfies
// the condition, making it useful for short - circuiting operations.

const numbers1 = [5, 8, 12, 4];
const hasGreaterThanTen = numbers1.some((num) => num > 10);
console.log(hasGreaterThanTen); // Output: true (because 12 is greater than 10)

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
const hasUserUnder30 = users.some((user) => user.age < 30);
console.log(hasUserUnder30); // Output: true (because Alice is under 30)

const numbers2 = [2, 4, 6, 8, 10];
const isAnyOdd = numbers2.some((num) => num % 2 !== 0);
console.log(isAnyOdd); // Output: false (no odd numbers in the array)
