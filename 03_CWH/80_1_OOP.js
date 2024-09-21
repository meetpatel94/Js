//=====================================>>prototype<<=====================================//
// let animal = {
//     eat: true
// };
// let rabbit = {
//     jump: true
// };
// rabbit.__proto__ = animal;
//=====================================>>class<<========================================//
class animal {
    eat() {
        console.log("kuch bhi!");
    }
    walk() {
        console.log("kahi bhi!");
    }
}
class saslu extends animal {
    jump() {
        console.log("jumpping to");
    }
}
class sher extends saslu {
    roar() {
        console.log("roaring");
    }
    walk() {
        console.log("Nahi jane dunga!");
    }
}
let rabbit = new saslu;
let lion = new sher;
