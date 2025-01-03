console.log(Math.PI)

// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

// let obj = Object.defineProperty(Math, 'PI', {
//     value: 55,
//     writable: true,
// })
// console.log(Math.PI)

// How to freeze object:-
let a = {
    nomber: 77,
    sname: "jay"
}
console.log(a)

// Method:1
// Object.freeze(a)
// for knowledge
// Object.seal(a) ————————————————
//                                |
// Method:2                       |
// Object.defineProperty(         |
//     a, 'sname', {              |
//     writable: true,            |
// })                             |
//                                | 
// a.sname = "mehul"              |
// delete a.sname <———————————————
console.log(a)