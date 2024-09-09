//-----------Without Encapsulation--------//
class account {
    // Private fields (using the hash `#` syntax)
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Public methods
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
const person = new account('Sahil', 30, 5000);
console.log(person.getName()); // Sahil
console.log(person.getAge());  // 30

person.name = "Jay"
console.log(person.getName());


//-----------Without Encapsulation--------//
// class account {
//     // Private fields (using the hash `#` syntax)
//     name;
//     #age;
//     #balance;

//     constructor(name, age, balance) {
//         this.name = name;
//         this.#age = age;
//         this.#balance = balance;
//     }
//     // Public methods
//     getName() {
//         return this.name;
//     }
//     getAge() {
//         return this.#age;
//     }
//     getBalance() {
//         return this.#balance;
//     }
//     setAge(newAge) {
//         this.#age = newAge;
//     }
//     setAge(newBalance) {
//         this.#balance = newBalance;
//     }
// }
// const person = new account('Sahil', 30, 5000);
// console.log(person.getName()); // John
// console.log(person.getAge());  // 30
// console.log(person.getBalance());  // 5000


// person.name = 'Jay'
// console.log(person.getName()); // Sahil
// person.age = 100       //error

// // person.setName('Jane');
// // person.setAge(25);

// console.log(person.getAge());  // 25
