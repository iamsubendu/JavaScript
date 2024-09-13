const user = { name: "John Doe", age: 34 };
const { name: userName, age: userAge } = user;
console.log(userName, userAge);

const user1 = {
  johnDoe: {
    age: 34,
    email: "johnDoe@freeCodeCamp.com",
  },
};
const {
  johnDoe: { age, email },
} = user1;
console.log(age, email);
const {
  johnDoe: { age: userAge1, email: userEmail },
} = user1;
console.log(userAge1, userEmail);

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
// We can also access the value at any index in an array with
// destructuring by using commas to reach the desired index
const [a1, b1, , , c1] = [1, 2, 3, 4, 5, 6];
console.log(a1, b1, c1);

let a2 = 8,
  b2 = 6;
[a2, b2] = [b2, a2];

const [a3, b3, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a3, b3);
console.log(arr);
