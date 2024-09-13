// You can obtain values from an object and set the value of a property
// within an object.

// These are classically called getters and setters.

// Getter functions are meant to simply return (get) the value of an
// object's private variable to the user without the user directly
// accessing the private variable.

// Setter functions are meant to modify(set) the value of an object's
// private variable based on the value passed into the setter function.
// This change could involve calculations, or even overwriting the
// previous value completely.
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book("anonymous");
console.log(novel.writer);
novel.writer = "newAuthor";
console.log(novel.writer);
// The _author property is prefixed with an underscore to suggest that it's an
// internal property of the Person class. This helps other developers
// understand that they should access or modify the name using the name
// getter and setter methods.
