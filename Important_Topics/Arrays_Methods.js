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

//---->Examples:-

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

//(ii)---->Find and Search Array Methods:-

// Array indexOf()             // Array findIndex()
// Array lastIndexOf()         // Array findLast()
// Array includes()            // Array findLastIndex()
// Array find()

//(iii)---->Sort Array Methods:-

//--AlPHABET SORT--//            //--NUMERICAL SORT--//
// Array sort()                  // Numeric Sort
// Array reverse()               // Random Sort
// Array toSorted()              // Math.min()
// Array toReversed()            // Math.max()
// Sorting Objects               // Home made Min()
// --------------- //            // Home made Max()

//(iv)---->Iteration Methods:-

// Array forEach                 // Array some()
// Array map()                   // Array from()
// Array flatMap()               // Array keys()
// Array filter()                // Array entries()
// Array reduce()                // Array with()
// Array reduceRight()           // Array Spread (...)
// Array every()