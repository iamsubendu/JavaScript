const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
const wrapInDiv = (str) => `<div>${str}</div>`;
const wrapInSpan = (str) => `<span>${str}</span>`;

// By not using wrapInDiv & wrapInSpan
const wrap = (type, str) => `<${type}>${str}</${type}>`;

console.log(wrap("div", toLowerCase(trim("   hello   "))));

// Currying
// Currying is a technique in functional programming where a function
// is transformed into a series of functions, each taking a single argument.
// Instead of passing all arguments at once, you pass them one at a time,
// with each function returning another function until all arguments are supplied.
function add(a, b, c) {
  return a + b + c;
}

function add(a) {
  return function add1(b) {
    return function add2(c) {
      return a + b + c;
    };
  };
}
let a1 = add(1)(2)(3);
console.log(a1);

const a2 = (a) => (b) => (c) => a + b + c;
console.log(a2(1)(2)(3));

// so adding currying in above function
const wrap2 = (type) => (str) => `<${type}>${str}</${type}>`;
