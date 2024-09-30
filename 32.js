const obj = {
  a: "foo",
  b: function () {
    console.log(this.a);
  },
};
// When a function is invoked as a method of an object,
// this refers to that object.
const d = obj.b;
const c = obj;
// c();
c.b();
obj.b();
d();
// d is assigned the value of obj.b, which is a reference to
// the function.However, when you call d(), it's not being
// called as a method of obj, but as a standalone function.
const e = obj.b();
