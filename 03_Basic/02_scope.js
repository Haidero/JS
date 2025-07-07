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
        console.log(username)  // ✅ This will log "haider"
        console.log(website);
    }

    // console.log(website); ❌ This would throw an error if uncommented because "website" is scoped to `two()`
    
    two()  // ✅ This calls `two()` which logs "haider"
}

// one();

if (true){
    const username = "haiderjaan"
    if (username === "haiderjaan"){
        const website = "Google"
        console.log(username + website);
    }
    // console.log(website);
        
}

// console.log(username);
//////************** INTERESTING FUNTION ****************/

console.log(addone(6))
function addone(num){
    return num + 1
}
// addone(6)

const addtwo = function(num){
     return num + 3
}

addtwo(7)