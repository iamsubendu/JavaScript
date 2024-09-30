const GITHUB_API = "https://api.github.com/users/iamsubendu";
// fetch returns a promise
const user = fetch(GITHUB_API);
// Promise have 3 things in it
// type = promise ,state , result
// PromiseState will be pending at initial state
// will be fulfilled as resolved
// or will be rejected
console.log(user);
user.then(function (data) {
  console.log(data);
});
// promise ob are immutable (unchangeable)
// 3 states - pending, resolved, rejected

api.createOrder(cart, function () {
  api.proceedToPayment(orderId, function () {
    api.showOrderSummary(paymentInfo, function () {
      api.updateWallet();
    });
  });
});

// now with promises
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function () {
    return updateWallet();
  });
// this is known as promise chaning
// return is must so to pass data in the chain
