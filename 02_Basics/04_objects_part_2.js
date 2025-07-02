// // const tinderUser = new Object()  ///single
// const tinderUsers = {}   // non_singleton_object

// tinderUsers.id = "123abc"
// tinderUsers.name = "hitesh"
// tinderUsers.isloggeddin= "false"


// console.log(tinderUsers );

// const regularuser = {
//     email:"haider@gmail.com", 
//     fullname:  {
//         userfullname:{
//             firstname: "haider",
//             lastname: "ALi"
//         }
//     }
// }

//             firstname: "haider",
// console.log(regularuser.fullname.userfullname.firstname);
// // console.log(regularuser.fullname?.userfullname.firstname); /// if else ni lgaana

// const obj1 = {1:"A", 2:"B"}
// const obj2 = {3:"C", 4:"D"}
// const obj4 = {5:"E", 6:"F"}
// // const obj3 = {obj2, obj1}

// // const obj3 = Object.assign({}, obj1, obj2)

// const obj3 = {...obj1, ...obj2, ...obj4}  //use this method latest
// console.log(obj3);

// ///////********JAB DATA BASE SE VALUES AE 
// // const users = [
// //     {
// //         id = "1"
// //         email: "h@gmail.com"

// //     }
// // ]
// ///loop through ya value print krna ho 

// // users[1].email

// console.log(tinderUsers);
// console.log(Object.keys(tinderUsers));
// console.log(Object.values(tinderUsers));
// console.log(Object.entries(tinderUsers));

// console.log(tinderUsers.hasOwnProperty('isloggeddin'));

///*********************** Object de-structure and JSON API intro******
const course = {
    coursename: "JAVA",
    price: "100$",
    courseinstructor: "Haider"
}

// console.log(course.courseinstructor);

const {courseinstructor} = course
console.log(courseinstructor);

const {courseinstructor:inst} = course ///destrucure
console.log(inst);

/////REACT ME KUCH METHOD HOTEY HAI

// const navbar = ({company}) => {

// }
// navbar(company = "Haider")

///// API CONCEPT JSON /////
// PEHLE XML ME ATI THI
// ABHI JSON ME ATI HA

// {
//     "coursename": "zeeshan"
//     "price": "1000"
//     "student": "zeeshan"

// }
 //*****// how to use fetch api

{
    {},
    {},
    {},
}

 //https://randomuser.me/
 //JSON formater