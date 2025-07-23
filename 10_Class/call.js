function setusername(username){
    this.username = username
    console.log("called");
    
}
function createuser(username, email, passward){
    setusername.call(this, username)  // expilicity call & use this to 
    this.email = email
    this.passward = passward
}

const chai =  new createuser ("chai","ali@gmail.com", "123qwe")
console.log(chai);
