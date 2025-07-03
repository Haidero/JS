// // let a = 10
// // const b = 20
// // var c = 30

// var c = 300   // globle scope
// let a = 400
// if (true){
//     let a = 10
//     const b = 20    //BLOCK SCOPE
//     console.log("INNER: ", a);

// }


// console.log(a)
// // console.log(b)
// console.log(c)   /// bhr aagiya print me masla ha //AVOID VAR


////// 22_ Scope nested
function one() {
    const username = "haider"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    console.log(website)
    
    two()

}