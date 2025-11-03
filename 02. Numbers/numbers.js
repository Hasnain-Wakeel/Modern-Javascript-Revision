// // ---------------------------  Maximum Positive Safe Integer : --------------------------------

// // The Maximum Safe Integer in JavaScript is : (2e53 - 1) => 9007199254740991

// const biggestInt = Number.MAX_SAFE_INTEGER;

// console.log(biggestInt);                // (2**53 - 1) => 9007199254740991


// // ---------------------------  Minimum Negative Safe Integer : --------------------------------

// // The Minimum Safe Integer in JavaScript is : (-(2e53 - 1)) => -9007199254740991

// const smallestInt = Number.MIN_SAFE_INTEGER;

// console.log(smallestInt);               // -(2**53 - 1) => -9007199254740991


// ----------------------------------------------------------------------------------------------------------------


// Normal Method "OR" Simple Method to Declare Numbers :

// let number = 25;
// console.log(number);


// New/Advanced Method to Declare Numbers (Strictly Number Type) :

// let number = new Number(12);            // Number Constructor

// console.log(number);
// console.log(typeof number)              // Object


// ------------------------------- Methods Of Numbers : --------------------------------


// 1. toString() :

// let number = 100;

// number = number.toString();

// console.log(number);
// console.log(typeof number);


// Since, 'number' is converted to 'String' , So we can use the "Methods of Strings" on this 'Converted String' :

// console.log(number.length);
// console.log(number.toUpperCase());
// console.log(number.slice(0,2))

// 2. toFixed() :

// const PI = 3.1415;

// // const rounded_PI = PI.toFixed(2)
// const rounded_PI = Number(PI.toFixed(2));          // toFixed return a String

// console.log(rounded_PI);
// console.log(typeof rounded_PI);

