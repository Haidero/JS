/// For Loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5){
//         console.log("5 is best number")
//     }
    
//     console.log(element);
    
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`outter loop ${i}`);
//     for (let j = 0;  j <= 10; j++){
//         // console.log(`inner loop ${j} and outer valuer ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
        
//     }
// }


let myarry = ["panda", "cat", "spider", "mamba", "pyhton"]
console.log(myarry.length);


for (let index = 0; index < myarry.length; index++) {
    const element = myarry[index];
    console.log(element);
       
}

//BREAK AND CONTINUE
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("Detected 5");
//         break
//     }
//     console.log(`print my vales ${index}`);   
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue  // ek bar maaf kro , iqnore kro
    }
    console.log(`print my vales ${index}`);   
}