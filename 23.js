// Pure functions
// A pure function will always return the same output given the same input.
// same args = same result
// we can't use random values
// no current date/time
// no global state(DOM, files, db, etc)

function r1(num) {
  return num * 2;
}

//Impure fn
function r2(num) {
  return num * Math.random();
}

// benefits for Pure functions
// self-documenting
// easily testable
// concurrency
// cacheable

// Concurrency refers to the ability of a system to handle multiple tasks or
// processes simultaneously, but not necessarily at the same instant.It’s about
// dealing with multiple things at once, allowing for better resource
// utilization and responsiveness.

// Pure fn are immulatable
