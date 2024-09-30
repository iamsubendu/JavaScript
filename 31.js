let a = {};
let b = { key: "b" };
// The key property in the b object doesn't have any specific
// meaning in this context.
let c = { key: "c" };
console.log(a, b.key, c);
a[b] = 123;
a[c] = 456;
// When using an object as a key in another object, JavaScript
// converts the object to a string.In this case, both b and c
// are converted to the string "[object Object]".
// a["[object Object]"] = 123;
// a["[object Object]"] = 456;
console.log(a[b]);

let d = {};
a[d] = 789;
console.log(a[d]);
