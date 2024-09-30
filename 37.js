function y() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("first");
}
y();
// var is functional scope
// and it will refer to same variable i
function z() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("second");
}
z();
// as let is block scope, its forming new closure everytime
// copy of iteration everytime

function x() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
  console.log("first");
}
x();
// to make it same as of let
// as we wrap this inside a new function , it will create a new copy of i for itself
