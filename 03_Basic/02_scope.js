// let a = 10
// const b = 20
// var c = 30

var c = 300   // globle scope
let a = 400
if (true){
    let a = 10
    const b = 20    //BLOCK SCOPE
    console.log("INNER: ", a);

}


console.log(a)
// console.log(b)
console.log(c)   /// bhr aagiya print me masla ha //AVOID VAR