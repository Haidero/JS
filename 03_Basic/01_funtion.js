// function PRINTMYNAME() {
//     console.log("H");
//     console.log("A");
//     console.log("I"); 
//     console.log("D");
//     console.log("E");
//     console.log("R");   
// }      

// // Calling the function
// PRINTMYNAME()
////number1, number2---> parameter 
// function addtwonumbers (number1, number2){ 
//     console.log(number1+number2)
// }

// // pass argument
// // addtwonumbers(4, null)
// // addtwonumbers(4, "a")

// const result = addtwonumbers(8,5)
// console.log("result: ", result);

/////**********  */
// function addtwonumbers (number1, number2){ 

//     // let result = number1 + number2
//     // console.log("Haider")
//     // return result
//     return number1 + number2
// } 
// const result = addtwonumbers(8,5);
// console.log("result: ", result);

///Note: return k bd vairable me store krsktey hai

function userliginmessage(username){   
    if(username === undefined){
        console.log("plz enter user name")
        return
    }
    return `${username} just loged in` 
}
 console.log(userliginmessage()) // agr () na lage tu ye errorr ae ga [Function: userliginmessage]

 function usermessage(user_name= "sam"){  //give default value 
    if(!user_name){        // react_native
        console.log("plz enter user name")
        return
    }
    return `${user_name} just loged in` 
}
 console.log(usermessage("Waseem_shek"))

