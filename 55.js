// polyfill for bind

// A polyfill is a piece of code that provides the technology
// that you, the developer, expect the browser to provide natively.
// It's a way to replicate the behavior of newer JavaScript
// features in older browsers that don't support them.

// Polyfills are necessary because different browsers support different
// versions of JavaScript, and not all browsers support the latest
// features.By using polyfills, you can ensure that your code works
// in older browsers that don't support the latest features.

let name = {
  fName: "Subendu",
  lName: "das",
};

let printFullName = function () {
  console.log(this.fName + " " + this.lName);
};

let printMyname = printFullName.bind(name);
printMyname();

//==============================================================================

// our task is to create the bind fn as above

// Function.prototype is a built -in object in JavaScript that serves
// as the prototype for all functions.It provides a set of methods
// and properties that can be used by all functions.
console.log(Function.prototype);
Function.prototype.myBind = function (...args) {
  console.log(this);
  let obj = this;
  // this is refering to printFullName method
  return function () {
    obj.call(args[0]);
  };
};
let printMyname2 = printFullName.myBind(name);
printMyname2();

//==============================================================================

let printFullName2 = function (city, state) {
  console.log(this.fName + " " + this.lName + " , " + city);
};

Function.prototype.myBind = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function () {
    obj.apply(args[0], params);
  };
};
let printMyname3 = printFullName2.myBind(name, "BSP");
printMyname3();

//==============================================================================

let printFullName3 = function (city, state) {
  console.log(this.fName + " " + this.lName + " , " + city + " , " + state);
};

Function.prototype.myBind = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};
let printMyname4 = printFullName3.myBind(name, "BSP");
printMyname4("CG");
