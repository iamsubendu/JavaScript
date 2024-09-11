// 42: number

// 'hello': string

// true: boolean

// undefined: undefined

// Symbol('id'): symbol

// BigInt(9007199254740991): bigint

// null: object

// { }: object

// []: object

// function() {}: function

// NaN: number
// JavaScript treats NaN as a special kind of number that
// represents an undefined or un-representable value within
// the set of all possible numbers.

console.log(typeof 3, typeof "3", typeof true, typeof undefined);
console.log(typeof Symbol("id"));
console.log(typeof BigInt(9007199254740991));
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});
console.log(typeof NaN);
