const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("first");
  }, 3000);
});
function getData() {
  p.then((res) => console.log(res));
  console.log("second");
}
getData();
// JS Engine don't wait for anything
// it will register getData fn
// it won't wait for promise to get resolved
// so, it will execute next statement
// as promise gets resolved, callback will be executed than
