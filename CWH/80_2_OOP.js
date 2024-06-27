class parent {
    constructor(fname) {
        console.log("what");
        this.name = fname;
    }
    eat(bname) {
        this.name = bname;
        console.log("kuch bhi!");
    }
}
class child {
    constructor(fname) {
        super(fname)
        this.name = fname;
    }
    jump() {
        console.log("jumping");
    }
}
let rabbit = new parent();
rabbit.eat("ha");