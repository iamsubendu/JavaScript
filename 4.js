// To check if a property on a given object exists or not, you can use
// the.hasOwnProperty() method.someObject.hasOwnProperty(someProperty)
// returns true or false depending on if the property is found on the
// object or not.
function checkForProperty(object, property) {
  return object.hasOwnProperty(property);
}

console.log(checkForProperty({ top: "hat", bottom: "pants" }, "top"));
console.log(checkForProperty({ top: "hat", bottom: "pants" }, "middle"));

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  }
  return "Not Found";
}
console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift"));

// for Array, we can use includes
const arr = [1, 3, 5];
console.log(arr.includes(2)); //false

// The has() method is not available for arrays, but it is available
// for other JavaScript data structures, such as Map and Set.
const set = new Set([1, 3, 5]);
console.log(set.has(2)); // false
console.log(set.has(3)); // true

const map = new Map();
map.set("a", 1);
map.set("b", 2);
console.log(map.has("a")); // true
console.log(map.has("c")); // false

// A Set is a collection of unique values.This means no duplicates are allowed,
// and the values in a set can be of any type(e.g., primitive values or objects).

// .add(value): Adds a value to the set.
// .has(value): Checks if a value exists in the set.
// .delete(value): Removes a value from the set.
// .clear(): Removes all values from the set.
// .size: Returns the number of values in the set.

const mySet = new Set();

// Adding values
mySet.add(1);
mySet.add(5);
mySet.add(1); // Won't be added since 1 is already in the set

console.log(mySet); // Output: Set { 1, 5 }

// Checking existence
console.log(mySet.has(5)); // Output: true

// Deleting values
mySet.delete(5);
console.log(mySet.has(5)); // Output: false

// Iterating through a Set
mySet.add(2);
mySet.add(3);
for (let value of mySet) {
  console.log(value);
}
// Output:
// 1
// 2
// 3

// A Map is a collection of key - value pairs where keys can be of any type
// (both objects and primitive types are allowed as keys).

// .set(key, value): Adds or updates a key-value pair.
// .get(key): Returns the value associated with a key.
// .has(key): Checks if a key exists.
// .delete(key): Removes a key-value pair.
// .clear(): Removes all key-value pairs.
// .size: Returns the number of key-value pairs in the map.

const myMap = new Map();

// Adding key-value pairs
myMap.set("name", "Alice");
myMap.set("age", 30);
myMap.set(true, "yes"); // Boolean key

console.log(myMap); // Output: Map { 'name' => 'Alice', 'age' => 30, true => 'yes' }

// Accessing values by key
console.log(myMap.get("name")); // Output: Alice

// Checking if a key exists
console.log(myMap.has("age")); // Output: true

// Deleting a key-value pair
myMap.delete("age");
console.log(myMap.has("age")); // Output: false

// Iterating through a Map
for (let [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Alice
// true: yes
