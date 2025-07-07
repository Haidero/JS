// if Statements 
//condition true ho tu excute hoga ni tu ni 
// if (true){
// }

// const isuserloggedin = true
// const Temperature = 41
// if (Temperature < 50){
//     console.log("less than 50");
// }
// else{ (console.log("temperature is greater than 50"))}
// ;
// if (2==="2"){
//     cosole.log("Exicuted");
// }

// // if (2=="2"){
// //     console.log("Exicuted");
// }
// >, < , >=, <=, ==, != , === //check type also, !== 

// const score  = 200

// if (score> 50 ){
//     var power = "fly"    // VAR use na karein q k global bnsn jata ah
//     console.log(`user power ${power}`);
// }

// console.log(`user power: ${power}`);


// const score  = 200

// if (score> 50 ){
//     let power = "fly"    
//     console.log(`user power ${power}`);
// }
// console.log(`user power: ${power}`);

// const balance = 1000

// if (balance < 500){
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");    
// }else if (balance < 1000) {
//     console.log("less than 1000");
// }else {
//     console.log("less than 1200");
// }

///*****ONLINE SHOPPING  ******u*/

const userlogedin = true
const debitcard = true
const logedingoogle = false
const loggedinemail = true

if (userlogedin && debitcard){
    console.log("Allow to buy");
    
}

if (logedingoogle || loggedinemail ){
    console.log("user loggged in");
    
    
}