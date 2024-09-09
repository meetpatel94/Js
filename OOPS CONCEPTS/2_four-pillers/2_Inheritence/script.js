// ====>> Use 'extends' Keyword
class parent {
    work() {
        console.log("work at time");
    }
}
class child extends parent {
    // work() {
    //     console.log("do not nothing");
    // }
    cars() {
        console.log("Cars");
    }
    games() {
        console.log("Games");
    }
}
let boy = new child;
boy.cars()
boy.work()


// boy.work();

// class small extends child {
//     house() {
//         console.log("time");
//     }
// }
// let person = new small;
// person.house()
// person.cars()
// person.work()
