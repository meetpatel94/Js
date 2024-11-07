// Arrays Methods:
//  (i)  Basic Methods, (ii) Find and Search Methods,
// (iii) Sort Methods,  (iv) Iteration Methods

//(i)---->Basic Array Methods:-

// Array.length                // Array.delete()
// Array.toString()            // Array.concat()
// Array.at()                  // Array.copyWithin()
// Array.join()                // Array.flat()
// Array.pop()                 // Array.splice()
// Array.push()                // Array.toSpliced()
// Array.shift()               // Array.slice()
// Array.unshift()

//====>>Examples:-<<====\\

// Array.at():
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
//console.log(fruits.at(2));           // Apple

// Array.join():
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.join(" * "));   // Banana * Orange * Apple * Mango

// Array.delete():
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[1]
// console.log(fruits);                 // ['Banana', <1 empty item>, 'Apple', 'Mango']

// Array.copyWithin():
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.copyWithin(2, 0);
// console.log(fruits);                   // ['Banana', 'Orange','Banana', 'Orange']
// fruits.copyWithin(2, 1);
// console.log(fruits);                   // ['Banana', 'Orange','Orange', 'Apple']

// Array.slice():
// //--Indexs---->   0      1      2      3
// const months = ["Jan", "Feb", "Mar", "Apr"];
// console.log(months.slice(1));            // ['Feb', 'Mar', 'Apr']
// console.log(months.slice(2));            // ['Mar', 'Apr']

// Array.splice():
//  a = [  0  ,   1  ,   2  ,  3  ,  4  ];
// let a = ["HII", "HMM", "WHY", "GN", "BY"];
// a.splice(1, 2);                          // ['HII', 'GN', 'BY']
// a.splice(1, 2, 101, 102);                // ['HII', 101, 102, 'GN', 'BY']
// console.log(a); //cut or splice

// Array.toSpliced():
// //--Indexs---->   0      1      2       3
// const months = ["Jan", "Feb", "Mar", "Apr"];
// console.log(months.toSpliced(0, 1));     // ['Feb', 'Mar', 'Apr']
// console.log(months.toSpliced(0, 2));     // ['Mar', 'Apr']
// console.log(months.toSpliced(2, 3));     // ['Jan', 'Feb']
//************************************end**********************************************//

//(ii)---->Find and Search Array Methods:-

// Array indexOf()             // Array findIndex()
// Array lastIndexOf()         // Array findLast()
// Array includes()            // Array findLastIndex()
// Array find()

//====>>Examples:-<<====\\

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// console.log(fruits.indexOf("Apple"))
// console.log(fruits.lastIndexOf("Apple"))
// console.log(fruits.includes("Mango"))

//************************************end**********************************************//

//(iii)---->Sort Array Methods:-

//--AlPHABET SORT--//            //--NUMERICAL SORT--//
// Array sort()                  // Numeric Sort
// Array reverse()               // Random Sort
// Array toSorted()              // Math.min()
// Array toReversed()            // Math.max()
// Sorting Objects               // Home made Min()
// --------------- //            // Home made Max()

//====>>Examples:-<<====\\

//--ALPHABETS--//
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort());
// console.log(fruits.reverse());
// console.log(fruits.toSorted());
// console.log(fruits.toReversed());

//--NUMERICALS--//
// const nums = [1, 4, 9, 3, 8]
// console.log(Math.min(...nums));
// console.log(Math.max(...nums));
//************************************end**********************************************//

//(iv)---->Iteration Methods:-

// Array forEach                 // Array some()
// Array map()                   // Array from()
// Array flatMap()               // Array keys()
// Array filter()                // Array entries()
// Array reduce()                // Array with()
// Array reduceRight()           // Array Spread (...)
// Array every()

//====>>Examples:-<<====\\

//-*-*-Array with():-*-*-*-*-*-//
// const months = ["Januar", "Februar", "Mar", "April"];
// console.log(months.with(2, "March"));
// console.log(months.with(0, "Jan"));

//-*-*-Array Spread (...):-*-*-//
// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];
// console.log([...q1, ...q2, ...q3, ...q4]);

//-*-*-Array from()-*-*-*-*-*//:
// console.log(Array.from("ABCDE"));                  // [ 'A', 'B', 'C', 'D', 'E' ]

//-*-*-Array forEach:-*-*-*-*//
// const nums = [45, 4, 9, 16, 25];
// nums.forEach(num => {
//     console.log(num);
// });

//-*-*-Array map()-*-*-*-*-*//:
// const nums = [45, 4, 9, 16, 25];
// nums.map(num => {
//     console.log(num);
// });
// const doubleNums = nums.map(num => num * 2)              // diff:map and foreach
// console.log(doubleNums);

//-*-*-Array flatMap()-*-*-//:
// const myArr = [1, 2, 3, 4, 5];
// console.log(myArr.flatMap(x => [x, x * 10]));

//-*-*-Array filter()-*-*-//:
// const filnums = [45, 4, 9, 16, 25];

// myFilterfun = (value) => {
//     return value > 18;
// }
// console.log(filnums.filter(myFilterfun));           // [ 45, 25]

//-*-*-Array reduce()-*-*-//:
// const reducenums = [45, 4, 9, 16, 25];

// function myFun(total, value) {
//     return total + value;
// }
// console.log(reducenums.reduce(myFun));             // 99


//--Array keys():--//
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();

// let text = "";
// for (let x of keys) {
//     text = text + x;
// }
// console.log(text);

//--Array entries():--//
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// for (let [index, fruit] of f) {
//     console.log(`${index}, ${fruit}`);
// }


//************************************end**********************************************//