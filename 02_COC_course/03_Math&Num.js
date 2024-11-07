const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));     // 100.0
// console.log(balance.toFixed(2));     // 100.00

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));     // 123.9
// console.log(otherNumber.toPrecision(5));     // 123.90

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  // 10,00,000    -->en-IN:Indian English
// console.log(hundreds.toLocaleString('en-US'));  // 1,000,000    -->en-US:US English

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-2));                 // 2
// console.log(Math.round(4.6));              // 5
// console.log(Math.ceil(4.2));               // 5
// console.log(Math.floor(4.9));              // 4
// console.log(Math.min(4, 3, 6, 8));         // 3
// console.log(Math.max(4, 3, 6, 8));         // 8
// console.log(Math.random());                // any given random number between 0 to 1
// console.log((Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

//-->Example:
// const min = 10
// const max = 20

//--------> formula for math.random values of between two numbers:
//-----------------------------------------------------------------// | \\
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // | \\
//-----------------------------------------------------------------// | \\