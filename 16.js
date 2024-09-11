function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    // on unshift stacking the flow will be -> (left to right direction)
    // arr.unshift(n) adds the current value of n to the front of
    // the array that was returned by the previous recursive call.
    return arr;
  }
}
console.log(countdown(-1)); // should return an empty array.
console.log(countdown(10)); // should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(countdown(5)); // should return [5, 4, 3, 2, 1]
console.log(countdown(0));
