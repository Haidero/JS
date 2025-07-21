// new is constructor funtion naya context banane me kaam ata ha
function User(username, logincount, islogin) {
    this.username = username;
    this.logincount = logincount;
    this.islogin = islogin;
    
    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    };
   
    // No need for `return this` — it's implied when using `new`
}

// Create instances using `new`
const user1 = new User("ali", 12, true);    //user 1 me encapsolation 
// const user2 = new User("haider", 12, true);
// const user3 = new User("hey", 14, true);

console.log(user1);
// console.log(user2);
// console.log(user3);