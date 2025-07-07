// this current context k bare me btata ha
const user = {
    username: "haiderali",
    price: 99,

    wellcome_message: function() {
        console.log(`${this.username}, Wellcome to Website`);
    
    }

}

user.wellcome_message()  // contex same 
user.username = "ALi"    //ye print ho raha ha q k hum ne hardcore ni kiya tha this //context not same
user.wellcome_message()