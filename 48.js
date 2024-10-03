const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("first");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("second");
  }, 5000);
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
// as p1 is resolved
// it will again come inside the getData fn
// and will start executing from where it left
// it will see p2 is yet not resolved
// and it will again suspend the getData fn
// and callStack will be empty again
// after the time when p2 gets resolved, it again gets back to the fn.
// and executes the rest
