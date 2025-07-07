/// Immediately invokedn funtion ///

// function chai (){
//     console.log( `DB Conectted`)
// }
// chai()

// (function chai (){
// named iife
//     console.log( `DB Conectted`)
// })();

// Immediately excute hojae 
// globe scope ki polution kse problem hoti ha pollutionko hata ne k liye likhi jati ha

// ( ()=> {
//     console.log( `DB Conectted two`)
// })()

( (name)=> {
    console.log( `DB Conectted two ${name}`)
})('Haider')