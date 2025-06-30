// There are two groups of Date methods: one group gets and sets various date components by 
// interpreting the timestamp as a local time
// Component	Local	UTC
// Get	Set	Get	Set
// Year	getFullYear()	setFullYear()	getUTCFullYear()	setUTCFullYear()
// Month	getMonth()	setMonth()	getUTCMonth()	setUTCMonth()
// Date (of month)	getDate()	setDate()	getUTCDate()	setUTCDate()
// Hours	getHours()	setHours()	getUTCHours()	setUTCHours()
// Minutes	getMinutes()	setMinutes()	getUTCMinutes()	setUTCMinutes()
// Seconds	getSeconds()	setSeconds()	getUTCSeconds()	setUTCSeconds()
// Milliseconds	getMilliseconds()	setMilliseconds()	getUTCMilliseconds()	setUTCMilliseconds()
// Day (of week)	getDay()	N/A	getUTCDay()	N/A

// let myDate = new Date ();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// // let myCreatedDate = new Date(2023, 02, 23)
// let myCreatedDate = new Date(2023, 02, 23, 5, 3)
// let myCreatedDate = new Date("2023-06-20");
// console.log(myCreatedDate.toLocaleDateString())

// let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now());  ///making clone
// console.log(Math.round(Date.now() / 1000));

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getHours());
//  `${newDate.getDay()}`
/////************************************************************* */
const newDate = new Date(); // Create a Date object
const dayString = `${newDate.getDay()}`; // Interpolate getDay() result
console.log(dayString); 

newDate.toLocaleDateString('default', {
    weekday: "long",
    timeZone
})
