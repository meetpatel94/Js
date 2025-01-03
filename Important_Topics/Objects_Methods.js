// const symbol = Symbol("ACE")

const obj = {
    //  entries
    //key: value,
    name: "jay",
    Id: 12,
    //[symbol]:"Diamond"
}
// console.log(obj[symbol])

// //----> Freeze object
// obj.name = "Meet";
// Object.freeze(obj)
// obj.name = "Sunil"
// console.log(obj.name)    // Meet

// //----> Keys and Values
// console.log(Object.keys(obj))                    // [ 'name', 'Id' ]
// console.log(Object.values(obj))                  // [ 'jay', 12 ]
// console.log(Object.entries(obj))                 // [ [ 'name', 'jay], [ 'Id', 12] ]
// console.log(obj.hasOwnProperty('isloggedIn'))    //false

// //----> Objects Merge/Assign
// const obj1 = { 1: "a", 2: "b" }
// const obj2 = { 3: "a", 4: "b" }

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

// const obj3 = { ...obj1, ...obj2 }          // Spread
// console.log(obj3);                            // Operator

// //----> Nested Object
// const Objs = {
//     name: "meet",
//     Id: 98,
//     grade: {
//         cpi: 99,
//         spi: 89,
//         sem: {
//             br: "IT",
//             Sub: 8,
//             Year: "Four"
//         }
//     }
// }
// console.log(Objs.grade.cpi);                 // 99

// //---->Object Destructure:-
// const group = {
//     fname: "pudiya",
//     rollNo: 12,
//     grade: "A"
// };
// const { fname, rollNo, grade } = group;
// console.log(fname)
// console.log(rollNo)
// console.log(grade)