// Objects are similar to arrays, except that instead of using
// indexes to access and modify their data, you access the data
// in objects through what are called properties.

// Objects are useful for storing data in a structured way

// const cat = {
//   name: "Whiskers",
//   legs: 4,
//   tails: 1,
//   enemies: ["Water", "Dogs"],
// };
const myDog = {
  name: "Pluto",
  legs: 4,
  tails: 1,
  friends: ["S", "B", "K"],
};
console.log(myDog);

// There are two ways to access the properties of an object: dot
// notation(.) and bracket notation([]), similar to an array.
console.log(myDog.friends);
console.log(myDog["legs"]);

myDog.name = "Alakazam";
console.log(myDog["name"]);

console.log(myDog);
myDog["bark"] = "woof";
console.log(myDog);

// We can also delete properties from objects
delete myDog.bark;
console.log(myDog);
