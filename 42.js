// Promise.all

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1 success"), 3000);
});

// const p1 = new Promise((fulfill, deny) => {
//   fulfill("success"); // equivalent to resolve
//   deny("error"); // equivalent to reject
// });
// so, we can use any word

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p2 success"), 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p3 success"), 4000);
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p4 fail"), 1000);
});

Promise.all([p1, p2, p3])
  .then((res) => console.log(res, "all1"))
  .catch((err) => console.log(err, "all1"));
Promise.all([p1, p2, p4])
  .then((res) => console.log(res, "all2"))
  .catch((err) => console.log(err, "all2"));
Promise.allSettled([p1, p2, p4])
  .then((res) => console.log(res, "allSettled"))
  .catch((err) => console.log(err, "allSettled"));
Promise.race([p1, p2, p4])
  .then((res) => console.log(res, "race"))
  .catch((err) => console.log(err, "race"));
Promise.any([p1, p2, p4])
  .then((res) => console.log(res, "any"))
  .catch((err) => console.log(err, "any"));
