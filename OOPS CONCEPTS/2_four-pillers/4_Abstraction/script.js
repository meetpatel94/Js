// Abstraction:- Hiding all naccecery details and showing only important parts.
//           --> Using Abstact class
class Car {
    constructor(model) {
        this.model = model;               // hide
    }

    // This is abstracting the start process
    start() {
        console.log(`${this.model} is starting...`);
    }
}

const myCar = new Car("Toyota");
myCar.start();  // Output: Toyota is starting...

