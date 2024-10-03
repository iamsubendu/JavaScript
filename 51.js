// this inside function

// "use strict";

function x() {
  console.log(this);
}
x();

// will be undefined when strict mode enabled
// else window or global object

// this is due to - this substitution
// if value of this keyword is undefined or null
// then this value will be replaced by global object
// only in non-strict mode

// in browser while using strict mode
// if we call fn with
// window.x()
// this will be replaced with window object then
