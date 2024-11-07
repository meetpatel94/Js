// Dates

let myDate = new Date()
// console.log(myDate.toString());       // Tue Nov 05 2024 17:07:18 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());   // Tue Nov 05 2024
// console.log(myDate.toTimeString());   // 17:07:18 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString()); // 5/11/2024, 5:07:18 pm

// console.log(typeof myDate);  // object

// let myCreatedDate = new Date(2023, 0, 23)         // 23/1/2023, 12:00:00 am
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)   // 23/1/2023, 5:03:00 am 
// let myCreatedDate = new Date("2023-01-14")        // 14/1/2023, 5:30:00 am
// let myCreatedDate = new Date("01-14-2023")        // 14/1/2023, 12:00:00 am
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);          // 11
// console.log(newDate.getDay());                // 3

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",

})
