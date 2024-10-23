console.log("start");
import log2, { log, Calculator, variable } from "./script1.js";
log("hello");
log2("hello2");
console.log(`Product: ${Calculator.multiply(2, 3)}`);
console.log(variable);

// In JavaScript, when you use ES6 modules, the import statements are executed before
// any other code in the module.This is because the import statements are used to
// resolve dependencies between modules.
// When you write an import statement, the JavaScript engine doesn't execute the code
// immediately.Instead, it creates a dependency graph of all the modules and their
// imports.This graph is used to determine the order in which the modules should be executed.
