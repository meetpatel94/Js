//====================================CALLBACK__HELL=====================================//
// function student(ID, getnext) {
//     setTimeout(() => {
//         console.log("ID is:", ID);
//         if (getnext) {
//             getnext();
//         }
//     }, 2000);
// }
// student(101, () => {
//     student(201, () => {
//         student(301);
//     });
// });    
//==================================promise==========================================//
//
//How to create:-
// let promise = new Promise((resolve, reject) => { ......})
//
//Stages:-1.pending,2.fullfiled & 3.rejected
//
//======================>>>>resolve<<<<=========================//
// let promise = new Promise((resolve, reject) => {
//     console.log("hiii");
//     resolve("success")
// })
//=====================>>>>reject<<<<===========================//
// let promise = new Promise((resolve, reject) => {
//     console.log("hiii");
//     reject("This is an occured")
// })
//
function student(ID, getnext) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("ID is:", ID);
            resolve("success")
            if (getnext) {
                getnext();
            }
        }, 2000);
    });
}
let result = student(123);