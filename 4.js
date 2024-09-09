'hello'.charAt(1); // 'e'

'hello world'.includes('world'); // true

'hello'.toUpperCase(); // 'HELLO'
'HELLO'.toLowerCase(); // 'hello'

'hello world'.slice(0, 5); // 'hello'

'hello world'.replace('world', 'everyone'); // 'hello everyone'

let str = 'hello world';
console.log(str.indexOf('world'));
console.log(str.substring(1, 4)); // "ell" Similar to slice, but does not accept negative indices.
console.log(str.split(' ')); // ["hello", "world"]

let str1 = '  hello world  ';
console.log(str1.trim()); // "hello world"
let str0 = 'hello';
let str2 = 'world';
console.log(str0.concat(' ', str2)); // "hello world"
let str3 = 'hello';
console.log(str3.repeat(3)); // "hellohellohello"
let str4 = 'hello world';
console.log(str4.startsWith('hello')); // true
let str5 = 'hello world';
console.log(str5.endsWith('world')); // true
