const coding = ["pyhton", "javascript", "ruby", "react", "css", "html"]  //hiher order funtion

// coding.forEach( function (item){
//     console.log(item);
    
// } )
// coding.forEach( (item)=> {
//     console.log(item);
    
// } )

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)

// coding.forEach ((item, index, arr)=>{
//     console.log(item, index, arr);
    
// })

const my_coding = [ 
    {
        languagename:"javascript",
        language_file_name: "js"
    },
    {
        languagename:"Pyhton",
        language_file_name: "py",
    },
    {
        languagename:"Ruby",
        language_file_name: "rb"
    }

]

my_coding.forEach((item) => {
    console.log(item.language_file_name);
    
    
});