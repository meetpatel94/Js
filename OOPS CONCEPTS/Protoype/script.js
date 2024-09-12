const obj1 = {
    salary: 50000,
}
const obj2 = {
    engineer() {
        console.log("50M");
    }
}
obj2.__proto__ = obj1;