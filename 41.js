// creating own promise

const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);
promise
  .then(function (orderId) {
    proceedToPayment(orderId);
  })
  .catch(function (err) {
    console.log(err);
  });

function createOrder(cart) {
  // new promise constructor
  // will take 2 parameteres - resolve, reject
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "123456789";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function validateCart(cart) {
  return true;
}
function proceedToPayment(orderId) {
  console.log(`Your order id is ${orderId}`);
}
