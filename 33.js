const companies = [
  { id: "1", name: "Facebook" },
  { id: "2", name: "Apple" },
  { id: "3", name: "Google" },
];

companies.sort((a, b) => (a.name > b.name ? -1 : 1));
// The sort() function compares two elements at a time (a and b).
// If a.name is greater than b.name(i.e., alphabetically
// later), return -1 so that a comes before b.
// Otherwise, return 1, so b comes before a.
console.log(companies);

const numbers = [40, 100, 1, 5, 25, 10];
// Ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 5, 10, 25, 40, 100]

// Descending order
numbers.sort((a, b) => b - a);
console.log(numbers); // [100, 40, 25, 10, 5, 1]

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Alphabetical order
fruits.sort();
console.log(fruits); // ['Apple', 'Banana', 'Mango', 'Orange']

// Reverse alphabetical order
fruits.sort((a, b) => (a > b ? -1 : 1));
console.log(fruits); // ['Orange', 'Mango', 'Banana', 'Apple']

const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 19 },
  { name: "Jack", age: 30 },
];

// Sort by name in alphabetical order
people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);
// [{name: 'Jack', age: 30}, {name: 'Jane', age: 19}, {name: 'John', age: 25}]

// Sort by name in reverse alphabetical order
people.sort((a, b) => b.name.localeCompare(a.name));

console.log(people);
// [{name: 'John', age: 25}, {name: 'Jane', age: 19}, {name: 'Jack', age: 30}]

const dates = [
  new Date(2024, 2, 21),
  new Date(2024, 0, 5),
  new Date(2024, 10, 10),
];

// Sort dates in ascending order
dates.sort((a, b) => a - b);

console.log(dates);
// [new Date(2024, 0, 5), new Date(2024, 2, 21), new Date(2024, 10, 10)]
