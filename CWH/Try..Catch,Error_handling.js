let a = prompt("Enter number");
let b = prompt("Enter number");
let c = parseInt(a) + parseInt(b);

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("NO!!!");
}
// console.log(c)
// try {
//     console.log(c * x)

// } catch (error) {
//     console.log("Not a number");
// }
//==============finally===============//
function main() {
    try {
        console.log(c)
        return true

    } catch (error) {
        console.log("Not a number");
        return false
    }
    finally {
        console.log("It also execute after return");
    }
}
let d = main()
