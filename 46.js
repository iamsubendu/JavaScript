const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("first");
  }, 3000);
});

async function getData() {
  console.log("third");
  const val = await p;
  console.log(val);
  console.log("second");
}
getData();
// when we are using async await, JS engine
// suspends the execution of the function from
// callStack till it get resolved
