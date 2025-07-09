// const  coding = [ "java", "pyhton", "ruby", "php"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item // manually but for each not return
// })

// console.log(values);


const my_nums = [1,2,3,4,5,6,7,8,9,10]

const newnums = []
 
my_nums.forEach((num)  => {
    if (num > 4 ) {
        newnums.push(num)
    }
    
});

console.log(newnums);
// const new_nums = my_nums.filter( (num) => num > 4 )
// console.log(new_nums);
