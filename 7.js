//order in which it will be executed
console.log(1);
setTimeout(function () {
  console.log(2);
}, 1000);
// delay 1000 ms
setTimeout(function () {
  console.log(3);
}, 0);
// delay 0 ms
console.log(4);

// ==================================================================

function x() {
  setTimeout(function () {
    console.log(i, 'i');
  }, 1000);
  var i = 1;
}
x();
// 1
// This happens because by the time the callback is
// executed(after 1 second), the variable i has
// already been assigned the value 1.
