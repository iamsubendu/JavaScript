export const add = (x, y) => {
  return x + y;
};

//or

const add1 = (x, y) => {
  return x + y;
};

export { add1 };

// In the export, you learned about the syntax referred to as a
// named export. This allowed you to make multiple functions
// and variables available for use in other files.

// import {add} from "./math_functions.js";
// import * as ant from "./math_functions.js";

// There is another export syntax you need to know, known as
// export default. Usually you will use this syntax if only one
// value is being exported from a file.It is also used to create
// a fallback value for a file or module.

// To import a default export, you need to use a different import syntax.
// In the following example, add is the default export of the
// math_functions.js file.Here is how to import it:

// import add from "./math_functions.js";
