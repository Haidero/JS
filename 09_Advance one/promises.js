const promiseone = new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("async task is complete");
    resolve(); 
  }, 1000);
});

promiseone.then(function () {
  console.log("promise consumed");
});

// Corrected version of second promise
new Promise(function(resolve, reject){
  setTimeout(() => {
    console.log("async task 2");
    resolve();  // ✅ Call resolve correctly
  }, 1000);
}).then(function() {
  console.log("async hover");
});

////email username 
const promisethree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "haider@gmail.com" });
  }, 1000); // Missing time argument
});

promisethree.then(function (user) {
  console.log(user);
});


const promisefour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({ username: "chai", email: "haider@gmail.com" });
        } else {
            reject('ERROR: SOMETHING WENT WRONG');
        }
    }, 1000);
});

promisefour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username); // Now `username` is available here
    })
    .catch(function (error) {
        console.log(error);
    });
