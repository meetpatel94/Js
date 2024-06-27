//===========================================>>first<<=============================================//
// const obj1 = {
//     salary: 50000,
// }
// const obj2 = {
//     fun() {
//         console.log("employee");
//     }
// }
// obj2.__proto__ = obj1;

//===========================================>>second<<=============================================//
class cars {
    sportscar(fastest) {
        this.speed = fastest;
        console.log("very fast");
    }
    midspeedcar() {
        console.log("mid range car");
    }
    superiercar(superier) {
        this.speed = superier;
        console.log("very super");
    }
}
let lamborgini = new cars()
lamborgini.sportscar("300km\s");

let buggati = new cars()
buggati.superiercar("450km\s");

