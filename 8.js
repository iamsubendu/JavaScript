let str = 'dev';
// let reversedStr = str.split('').reverse().join('');
let reversedStr = str.split('');
console.log(reversedStr);
reversedStr = reversedStr.reverse();
console.log(reversedStr);
console.log(typeof reversedStr);
reversedStr = reversedStr.join('');
console.log(reversedStr); // Output: "ved"
