// callback
// async operations exist in JS due to this callbacks

// issues
// 1. callback hell
// 2. inversion of control

// js is single threaded app and can do one thing at a time

setTimeout(function () {
  console.log("second");
}, 5000);
// after 5s , its work of setTimeout to execute this callback after 5s
console.log("first");

// so using callback, we can execute things which can be done at later point of time

const cart = ["a", "b", "c"];
// api.createOrder();
// api.proceedToPayment();
// after creating order only we can proceed to payment
api.createOrder(cart, function () {
  api.proceedToPayment(orderId, function () {
    api.showOrderSummary(paymentInfo, function () {
      api.updateWallet();
    });
  });
});
// so such large sets of callbacks inside callback create Callback hell
// which is unmaintainable
// this structure is also known as "Pyramid of Doom"

// Inversion of control - when we lose control of code when we are using callbacks
