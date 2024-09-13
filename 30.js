// A promise in JavaScript is exactly what it sounds like - you use it to make
// a promise to do something, usually asynchronously.When the task completes,
// you either fulfill your promise or fail to do so.Promise is a constructor
// function, so you need to use the new keyword to create one.It takes a function,
// as its argument, with two parameters - resolve and reject.These are methods
// used to determine the outcome of the promise.

const myPromise = new Promise((resolve, reject) => {});

// A promise has three states: pending, fulfilled, and rejected.The promise you
// created in the last challenge is forever stuck in the pending state because
// you did not add a way to complete the promise.The resolve and reject parameters
// given to the promise argument are used to do this.resolve is used when you
// want your promise to succeed, and reject is used when you want it to fail.

const myPromise1 = new Promise((resolve, reject) => {
  if ("condition here") {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});

// Promises are most useful when you have a process that takes an unknown amount
// of time in your code(i.e.something asynchronous), often a server request.When
// you make a server request it takes some amount of time, and after it completes
// you usually want to do something with the response from the server.This
// can be achieved by using the then method.

Promise.prototype.then(onFulfilled, onRejected);

// The then method schedules callback functions for the eventual completion of a
// Promise - either fulfillment or rejection.One of the onFulfilled and
// onRejected handlers will be executed to handle the current promise's
// fulfillment or rejection.When the promise is fulfilled with resolve the
// onFulfilled handler is called.

const apiCall = new Promise((resolve, reject) => {
  const url = "https://jsonplaceholder.typicode.com/todos/1"; // Example API

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        // If the response status is not OK, reject the promise
        reject(`Error: ${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      // Resolve the promise with the API data
      resolve(data);
    })
    .catch((error) => {
      // Handle network or other fetch-related errors
      reject(`Fetch error: ${error.message}`);
    });
});

apiCall
  .then((result) => {
    console.log("API call succeeded:", result);
  })
  .catch((error) => {
    console.error("API call failed:", error);
  });
