const p = {
  name: "John",
};
const newD = Object.assign({}, p, { age: 30 });
console.log(newD);

const newD2 = {
  ...p,
  age: 40,
};
console.log(newD2);
