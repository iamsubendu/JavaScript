const p = new Promise((resolve, reject) => {
  resolve("value");
});

function getData() {
  p.then((res) => console.log(res));
}
getData();

async function handleParams() {
  const data = await p;
  console.log(data);
}
handleParams();
// await is a keyword, that can only be used inside async function
// await resolves the promise
