// use in shopping cart for total 
const mynums = [1,2,3]

// const mytotal = mynums.reduce(function(acc, currval){
//     console.log(`acc ${acc} and currval ${currval}`);
//     return acc + currval
// }, 5)

const mytotal = mynums.reduce((acc, currval)=> acc + currval, 0)
console.log(mytotal);


const shopping_cart = [{
    item_name: "py course",
    price: 10000
    },
    {
    item_name: "java course",
    price: 20000
    },
    {
    item_name: "ruby course",
    price: 30000
    }
]

const pricetopay = shopping_cart.reduce( (acc, item) => acc + item.price, 0)

console.log(pricetopay);
