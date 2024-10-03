// this inside arrow function

// arrow function don't provide their own this binding
// but the value of this will be enclosing lexical context

// lexical context
// Lexical context refers to the scope in which a function
// is defined.It determines the variables and functions
// that are accessible within the function.

const ob2 = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};
ob2.x();

// the above is behaving like this
const ob3 = {
  a: 10,
  x: function () {
    console.log(this);
  },
};
ob3.x();

// this inside DOM
{
  /* <button onClick={alert(this)}>Click Me</button>;  [object HTMLButtonElement] */
}
{
  /* <button onClick={alert(this.tagName)}>Click Me</button>;  button */
}
// the value is reference to html element
