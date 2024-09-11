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
  console.log(obj);
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
