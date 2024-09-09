class account {
    // Private fields (using the hash `#` syntax)
    name;

    constructor() {
        console.log("This is constructor")
    }
    person1() {
        console.log("person-1")
    }
}
let man = new account()
man.person1()