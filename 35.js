// copy one object to other
// deep copy , shallow copy

// Shallow Copy
// A shallow copy creates a new object with a new reference but does not
// create deep copies of nested objects.Instead, it copies references to
// those nested objects.As a result, changes to nested objects in the
// copied object will affect the original object.
const original = { a: 1, b: { c: 2 } };
console.log(original, "original");

const shallowCopy = Object.assign({}, original);
console.log(shallowCopy, "shallowCopy"); // { a: 1, b: { c: 2 } }
shallowCopy.b.c = 3;
console.log(original.b.c); // 3 (change in shallowCopy affects original)

const shallowCopy2 = original;
console.log(shallowCopy2, "shallowCopy2");
shallowCopy.b.c = 5;
console.log(original);

const shallowCopy3 = { ...original };
console.log(shallowCopy3, "shallowCopy3"); // { a: 1, b: { c: 2 } }
shallowCopy3.b.c = 7;
console.log(original.b.c); // 7 (change in shallowCopy affects original)

// 2. Deep Copy
// A deep copy creates a completely independent copy of the object and all nested
// objects.Changes to the copied object do not affect the original object and vice versa.
console.log(original, "original");
const deepCopy = JSON.parse(JSON.stringify(original));
console.log(deepCopy, "deepCopy");
deepCopy.b.c = 9;
console.log(original.b.c);
