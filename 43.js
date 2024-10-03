// async/await
// always returns a promise
// Either we can return promise from inside the function
// or if we return value from the function, it
// will wrap the value inside Promise and than will return it
async function getData() {
  return new Promise((resolve, reject) => resolve("second"));
}
const dat = getData();
dat.then((res) => console.log(res));
async function getData1() {
  return "first";
}
const data = getData1();
data.then((res) => console.log(res));
// getData1() is called, which returns a Promise that resolves to "first" immediately.
// getData() is called, which returns a Promise that resolves to "second" after a short delay.
