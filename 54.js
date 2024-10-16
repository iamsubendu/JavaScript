// call apply bind

let name = {
  fName: "Subendu",
  lName: "das",
  printFullName: function () {
    console.log(this, "7");
    console.log(this.fName + " " + this.lName);
  },
};
name.printFullName();
// The call() method calls a function with a given this value and arguments.
let name2 = {
  fName: "Subhojit",
  lName: "das",
};

// function borrowing
name.printFullName.call(name2);
// this pointing toward obj2 now

let name3 = {
  fName: "Subendu",
  lName: "das",
};

let printFullName2 = function () {
  console.log(this, "28");
  console.log(this.fName + " " + this.lName);
};
printFullName2.call(name3);

let printFullName3 = function (city) {
  console.log(this, "34");
  console.log(this.fName + " " + this.lName + " from " + city);
};
printFullName3.call(name3, "BSP");

//==============================================================================

// apply
// The apply() method calls a function with a given this value and an array of arguments.
let printFullName4 = function (city, state) {
  console.log(this, "41");
  console.log(this.fName + " " + this.lName + " from " + city + "," + state);
};
printFullName4.apply(name3, ["BSP", "CG"]);
// instead of passing each argument one-by-one
// in apply we pass it in array

//==============================================================================

// bind
// The bind() method creates a new function that has its this keyword set to the
// provided value, with a given sequence of arguments preceding any provided
// when the new function is called.
let printMyName = printFullName4.bind(name3, "BSP", "CG");
console.log(printMyName(), "58");
// will create a copy of printFullName4 fn
// and will bind it with name3 object
// and will return a function
// which can be called later
printMyName();
// passing arguments is same as call
let printMyName2 = printFullName4.bind(name3, "BSP");
printMyName2("Bihar");
