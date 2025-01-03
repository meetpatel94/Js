// Set Methods:

//--->The new Set() Method:
// const letters = new Set(["a", "b", "c"]);
// console.log(letters.size)                      // 3

//--->The add() Method:
// const Newletters = new Set(["a", "b", "c"]);

// Newletters.add("d");  // Add a new Element
// Newletters.add("e");
// console.log(Newletters.size)                   // 5

//--->The add() Method:
// const letters = new Set(["a", "b", "c"]);

// // Does the Set contain "d"?
// console.log(letters.has("d"))                  // false
// console.log(letters.has("c"))                  // true


//--->The values() Method:
const letters = new Set(["a", "b", "c"]);
const myIterator = letters.values();
console.log(myIterator)                  // true

// List all Elements
// for (const x of myIterator) {
//     console.log(x)                                // a, b, c
// }

// Note:-other methods are keys() and entries().