function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 3000); // 1s
  console.log("first");
}
x();
// the callback/function inside setTimeout forms closure
// this function remembers the value of i
