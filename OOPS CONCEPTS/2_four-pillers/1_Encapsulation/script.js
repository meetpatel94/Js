// //-----------Without Encapsulation--------//
// class account {
//     // Private fields (using the hash `#` syntax)
//     name;
//     age;

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     // Public methods
//     getName() {
//         return this.name;
//     }
//     getAge() {
//         return this.age;
//     }
// }
// const person = new account('Sahil', 30);
// console.log(person.getName()); // Sahil
// console.log(person.getAge());  // 30

// person.name = "Jay"
// console.log(person.getName());


//-----------With Encapsulation--------//
class account {
    // Private fields (using the hash `#` syntax)
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    // Public methods
    getName() {
        return this.#name;
    }
    getAge() {
        return this.#age;
    }
    // setName(newName) {
    //     this.#name = newName;
    // }
    // setAge(newAge) {
    //     this.#age = newAge;
    // }
}
const person = new account('Sahil', 30);
console.log(person.getName()); // Sahil
console.log(person.getAge());  // 30


person.name = 'Jay'
console.log(person.getName());   // Sahil

// person.age = 100
// console.log(person.getAge());   // 30

// person.setName('Jane');
// console.log(person.getName());

// person.setAge(25);
// console.log(person.getAge());  // 25
