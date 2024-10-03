const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("first");
  }, 5000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("second");
  }, 3000);
});

async function getData() {
  console.log("Hello");
  const val = await p1;
  console.log(val);
  console.log("third");
  const val2 = await p2;
  console.log(val2);
  console.log("fourth");
}
getData();

// At initial
// callStack = empty

// CallStack is a place where every function will be executed

// As soon as getData fn is called
// callStack = getData()

// it finds p1 await and then
// getData() fn execution suspends for the time & will move out of the callStack
// will wait till p1 gets resolved
// callStack = empty

// as p1 is resolved
// it will again come inside the getData fn
// and will start executing from where it left
// it will see p2 is resolved already, so it will go ahead
