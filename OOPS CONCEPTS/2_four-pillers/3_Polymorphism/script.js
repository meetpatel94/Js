//Poly     = Many
//Morphism = Forms

// Parent class
class Animal {
    speak() {
        console.log('The animal makes a sound.');
    }
}
// Child class 1
class Dog extends Animal {
    speak() {
        console.log('The dog barks.');
    }
}
// Child class 2
class Cat extends Animal {
    speak() {
        console.log('The cat meows.');
    }
}
// Create instances
const myDog = new Dog();
const myCat = new Cat();

// Demonstrate polymorphism
myDog.speak(); // Output: The dog barks.
myCat.speak(); // Output: The cat meows.
