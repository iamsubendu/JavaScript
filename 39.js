// promises

// Promises are use to handle async operations

// Promise ob are placeholder for certain period of time untill we recieve value from async operation

// A promise is an ob representing eventual completion or failure of an async operation.

const cart = ["a", "b", "c"];

createOrder(cart, function (data) {
  proceedToPayment(data);
});
// as createOrder and cart is executed, it wont wait for data to be resolved
// and will go for proceedToPayment

const promise = createOrder(cart);
// will return object
// {data: undefined}
promise.then(function (data) {
  proceedToPayment(data);
});
// By using .then we are adding callback function to promise object
// so when it will get resolved, only than callback will get executed
