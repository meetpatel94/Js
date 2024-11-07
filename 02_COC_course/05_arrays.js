let proGames = ["BGMI", "COD", "VALORANT", "ASPHALT"]
let noobGames = ["DRDRIVING", "FF", "COC"]

//JOINING METHODS:-
//METHOD-1
// const games = proGames.concat(noobGames)
// console.log(games)

//METHOD-2
// const games = [...proGames, ...noobGames]     //Spread
// console.log(games)                               //operator

// // Netsed Array --->use flat
// let arr = [1, 2, [3], 4, 5, [6, 7, 8], 9, [10, 11, [12, 13, 14], 15], 16]
// // const realArr = arr.flat(1)
// const realArr = arr.flat(Infinity)
// console.log(realArr)

// //convert array
// console.log(Array.isArray("Meet"))      //false
// console.log(Array.from("Meet"))         // ["M", "e", "e", "t"]

// | \\ ----------------------------------------------------------- // | \\
// // Built Array:                                                  // | \\
// const firstName = "sahil"                                        // | \\
// const secondName = "jay"                                         // | \\
// const thirdName = "mehul"                                        // | \\
// console.log(Array.of(firstName, secondName, thirdName))          // | \\
// | \\ ----------------------------------------------------------- // | \\

