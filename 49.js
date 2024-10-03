const url = "https://api.github.com/users/iamsubendu";

async function handlePromise() {
  const data = await fetch(url);
  // fetch fn returns a Promise object
  // the response body is readable stream
  // if we need to convert this readable stream to json
  // we use .json which is also a promise
  // after getting resolved it will give us required results
  const d1 = await data.json();
  console.log(d1);
}
handlePromise();

async function handlePromise2() {
  try {
    const data = await fetch(url);
    const d1 = await data.json();
    console.log(d1);
  } catch (error) {
    console.log(error);
  }
}
handlePromise2();
