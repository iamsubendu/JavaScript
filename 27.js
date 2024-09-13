//es5
// const person = {
//   name: "Taylor",
//   sayHello: function () {
//     return `Hello! My name is ${this.name}.`;
//   },
// };

//es6
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  },
};

// In ES5, an object can be created by defining a constructor
// function and using the new keyword to instantiate the object.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("John", 30);
console.log(person1.name);

// In ES6, a class declaration has a constructor method that is
// invoked with the new keyword.If the constructor method is not
// explicitly defined, then it is implicitly defined with no arguments.

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person2 = new Person2("John", 30);
console.log(person2.name); // John

// If no constructor is provided, JavaScript defines an empty
// constructor implicitly:
class Person3 {}

const person3 = new Person3();
console.log(person3); // Person {}
