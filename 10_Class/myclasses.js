// class User {  // Class names should typically start with uppercase
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeusername(){
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const chai = new User('haider', '@gmail.com', '12345')

// console.log(chai.encryptPassword());
// console.log(chai.changeusername());

// console.log(chai);

//************BEHIND THE SCENE

 function User(username, email, password) {
    this.email = email
    this.username = username
    this.password = password
    
 }

 User.prototype.encryptPassword = function () {
    return `${this.password}abc`
    
 }

 User.prototype.changeusername = function (){
    return `${this.username.toUpperCase()}`
 }

 const tea = new User("Ali", "ali@gmail.com", "12345")
 console.log(tea.encryptPassword());
 console.log(tea.changeusername());


 