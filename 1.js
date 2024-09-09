console.log("harry".length);

const firstName = "Charles";
const firstLetter = firstName[0];
console.log(firstLetter);

const myArray = [
  ["John", 23],
  ["cat", 2],
];
console.log(myArray);
let newArray = myArray.push(["Dog", 4]);
console.log(newArray);
newArray.pop();
console.log(newArray);

// pop() always removes the last element of an array.
// What if you want to remove the first ?
// That's where .shift() comes in. It works just like .pop(),
// except it removes the first element instead of the last.
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
console.log(ourArray);

// .unshift() works exactly like .push(), but instead of adding
// the element at the end of the array, unshift() adds the
// element at the beginning of the array.
const ourArray1 = ["Stimpson", "J", "cat"];
ourArray1.shift();
ourArray1.unshift("Happy");
console.log(ourArray1);
