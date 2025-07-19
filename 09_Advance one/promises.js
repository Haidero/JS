const promiseone = new Promise((resolve, reject) => {
  // Do async task
  // DB calls, Cryptography, network call
  setTimeout(function () {
    console.log("async task is complete");
    resolve(); // <== don't forget to resolve the promise
  }, 1000);
});

promiseone.then(function () {
  console.log("promise consumed");
});
