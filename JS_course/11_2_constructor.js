// class cars {
//     constructor(t, s) {
//         this.type = t;
//         this.speed = s;
//         console.log("hiiiiiiiiii");
//     }
//     supercar() {
//         console.log("efficient");

//     }
//     fastcar() {
//         console.log("fastest");
//     }
//     rellycar() {
//         consolr.log("good");
//     }
// }
// let audi = new cars("sports", 200);
//============================================>>INHERITENCE<<==============================================//
class parent {
    work() {
        console.log("work at time");
    }
}
class child extends parent {
    cars() {
        console.log("Cars");
    }
    games() {
        console.log("Games");
    }
}
let boy = new child;
// class small extends child {
//     house() {
//         console.log("time");
//     }
// }
// let person = new small;

