//Two Types:-
//---->  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const a = "Hi"
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



//----> Reference (Non primitive)

// Array, Objects, Functions

const heros = ["SpiderMan", "Thor", "IronMan"];
let myObj = {
    name: "sahil",
    age: 21,
}

const myFunction = function () {
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//---------------------->Memory Types<---------------//
//Two Types:-

// (i)Static  (primitive data type store)

// (ii)Heap   (Non-primitive data type store)
