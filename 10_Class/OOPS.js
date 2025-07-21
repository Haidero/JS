const user= {
    username: "Zeeshan",
    loginCount: "9",
    signedIn: "True",

    getUserDetail: function (){
        // console.log("Got User detail form database");
        // console.log(`username: ${this.username}`);
        // console.log(this);
        
}

}

// console.log(user.username);
// console.log(user.getUserDetail()); //show undefined because not use this
console.log(this);
