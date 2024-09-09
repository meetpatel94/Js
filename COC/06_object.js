let symbol = Symbol("ACE")

let obj = {
    name: "jay",
    Id: 12,
    // [symbol]: "Diamond"
}
// console.log(obj[symbol])

// //Freeze object
// obj.name = "Meet";
// Object.freeze(obj)
// obj.name = "Sunil"
// console.log(obj.name)    // Meet

// // Keys and Values
console.log(Object.keys(obj))                    // [ 'name', 'Id' ]
console.log(Object.values(obj))                  // [ 'jay', 12 ]
console.log(Object.entries(obj))                 // [ [ 'name', 'jay], [ 'Id', 12] ]
console.log(obj.hasOwnProperty('isloggedIn'))    //false