// Loop Types:
//  (i)  for loop,               (ii) for...of loop
// (iii) for...in loop           (iv) While/do...while loop


//===========>>>>>>For Loop<<<<<<==========//
// for (let i = 0; i < 5; i++) {
//     console.log(i)                            // 0,1,2,3,4
// }
//
// const cars = ["BMW", "Volvo", "Ford", "Audi", "Lamborgini"];
//
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);                     // BMW, Volvo, Ford, Audi, Lamborgini
// }
//
//===========>>>>>>For-in Loop<<<<<<==========//
// const person = { fname: "John", lname: "Doe", age: 25 };
// //
// for (let x in person) {
//     console.log(person[x]);                    // John, Doe, 25
// }

//===========>>>>>>For-of Loop<<<<<<==========//
// let language = "JavaScript";

// for (let x of language) {
//     console.log(x)                               // J, a, v, a, S, c, r, i, p, t
// }

//===========>>>>>>While Loop<<<<<<==========//
// let i = 0;                                                    //#EX:1
// while (i < 5) {
//     console.log(i)        // 1, 2, 3, 4, 5
//     i++;
// }
// 
// const cars = ["BMW", "Volvo", "Ford", "Audi"];  // #EX:2
// let x = 0;
// while (x < cars.length) {
//     console.log(cars[x]);
//     x++;
// }
// 
//===========>>>>>>Do-While Loop<<<<<<==========//
let i = 0;

do {
    console.log(i)
    i++;
}
while (i < 4);  