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
    }).finally (()=>{
      console.log("finaly your promise or either resolve or rejected")
    })

    /////////////////////////
const promisefive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({ username: "ali", email: "ali@gmail.com", password: "12345" });
        } else {
            reject('ERROR: SOMETHING WENT WRONG');
        }
    }, 1000);
});

async function consumepromise() {
    try {
        const response = await promisefive;
        console.log(response);
    } catch (error) {
        console.log('Caught error:', error);
    }
}

// consumepromise();

// async function getallusers() {
//   try {
//     const response = await fetch('https://api.github.com/users/Haidero');
//     console.log("Raw response:", response);

//     const data = await response.json(); // Await is necessary here too
//     console.log("Parsed data:", data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }

// getallusers(); // You must call the function

fetch('https://api.github.com/users/Haidero')
.then((response) => {
  return response.json()
})
.then((data)=>{
  console.log(data);
})