// object declaeaars as 2 type

// 1.Constructor

// 2. literal

// ---Signleton koi b constructor se bnta h

// Object literlas: In JavaScript object literals, 
// property names that contain spaces must be in quotes. Otherwise, you'll get:
// Object.create k through bn skta ha
const mysymbol = Symbol("my_sym")
const jsUser = {
    "full name":"zeeshan",
    email: "zeeshan@gmail.com",
    age: "19",
    location: "Kararchi",
    isLoggedIn:false,
    lastLoginDays:["Monday", "Tuesday",],
    [mysymbol]: "my_sym",  // ✅ Correct symbol property assignment
}

console.log(jsUser.email); // is tara se 
console.log(jsUser["email"]);  // is tara se  print ke skty hai
console.log(jsUser["full name"]);
console.log(jsUser[mysymbol]); 
console.log(typeof jsUser[mysymbol]);  // ✅ Correct



jsUser.email= "shan@gmail.com"
// Object.freeze(jsUser);     /// change ni hongi q k ap ne freez kr diya ha
jsUser.email = "not@gamil.com"

console.log(jsUser);


//////////  **************** FUNTIONS ****************** /////////////
jsUser.greetings = function(){
    console.log("Hello, user");
}

jsUser.greetingstwo = function(){
    console.log(`Hello User ${this["full name"]}`);
}
console.log(jsUser.greetings());
console.log(jsUser.greetingstwo());