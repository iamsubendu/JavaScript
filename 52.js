// this inside a object

const obj = {
  a: 10,
  x: function () {
    console.log(this); // will refer to the object
    console.log(this.a);
  },
};
// x will be called as method
// as a function created inside object

// value of this depends upon also how the function is called

obj.x();
