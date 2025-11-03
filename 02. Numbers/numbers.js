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

// -------  1. toString() : --------

// let number = 100;

// number = number.toString();

// console.log(number);
// console.log(typeof number);

// Since, 'number' is converted to 'String' , So we can use the "Methods of Strings" on this 'Converted String' :

// console.log(number.length);
// console.log(number.toUpperCase());
// console.log(number.slice(0,2))

// --------- 2. toFixed() : ---------

// const PI = 3.1415;

// // const rounded_PI = PI.toFixed(2)
// const rounded_PI = Number(PI.toFixed(2));          // toFixed return a String

// console.log(rounded_PI);
// console.log(typeof rounded_PI);

// ------  3. toPrecision() : ------

// let number = 123.456;

// number = number.toPrecision(2);

// console.log(number);

// ---------  Expalining "toPrecision()" : ---------

// Parameters :

// toPrecision(3) --> An integer value (1 to 100).
// This defines that how many significant digits you want.

// Return :

// This method returns a string which represent the rounded mumber

// ------- Example 1 : --------

// let num = 123.456;

// console.log(num.toPrecision(2));        // "1.2e+2"
// console.log(num.toPrecision(3));        // "123"
// console.log(num.toPrecision(5));        // "123.46"

// Significant digits = total meaningful digits (left se count hote hain, decimal ke position ka farq nahi).

// 123.456 ---> 2 significant digits → “ 1.2 × 10e2 ” --->  1.2 × 10e2 = 120

// toPrecision(2) --> returns 2 significant digits, so the number becomes : 1.2 × 10e2 = "1.2e+2" = 120
// toPrecision(3) --> returns at three digits --> "123"
// toPrecision(5) --> returns 5 digits --> "123.46"

// -------- Example 2 : ----------

// let num = 0.004567;

// console.log(num.toPrecision(2));        // "0.0046"      (4 and 6 are significant digits)
// console.log(num.toPrecision(4));        // "0.004567"

// --------  Summary : ---------

// Method :	                Meaning	:                   Example :	              Result :
//  toPrecision(2)	         2 total digits	             123.456	               "1.2e+2"
//  toPrecision(3)	         3 total digits	             123.456              	   "123"
//  toPrecision(5)	         5 total digits	             123.456                   "123.46"
//  toPrecision(2)	         2 total digits	             0.004567	               "0.0046"

// Question : Why there is always 1.2 before Exponenet ???

// Answer : In scientific (or exponential) notation, any number is written in the form [a x 10eb],
// but there's an important rule:
// The number "a" (called the 'mantissa' or 'significand') must have only "one" non-zero digit
// to the left of the decimal point.

// Syntax : {1} digit before decimal × 10exp(some power)
// 123.456 ---> 1.23456 x 10exp2
// num.toPrecision(2) ---> 1.2 x 10²

// Form	:                IS Allowed :	                Reason :

// 1.2 × 10²	            ✅	                 1 digit before decimal
// 12 × 10¹	                ❌	                 2 digits before decimal --> not normalized
// 0.12 × 10³	            ❌	                 decimal point too far left
// 1.23 × 10²	            ✅	                 standard scientific form

// ------  Summary : ------

// JavaScript writes 1.2e+2 because, in scientific notation, there must always be only one digit
// to the left of the decimal point.
// 12e+1 is mathematically the same value, but it’s not in the standard scientific format,
// which is why JavaScript never outputs it that way.

// --------- 4. toLocaleString() : ---------

// let value = 10000000;

// // value = value.toLocaleString();             // It defaultly sets according to the System's Region (e.g : en-US)
// value = value.toLocaleString("en-IN");

// console.log(value);

// -----------------------

// // Currency Format (Pakistani Rupees) :

// let price = 1234567;

// price = price.toLocaleString("en-IN", {style: "currency", currency: "PKR",});

// // style : "currency" give by default 2 decimal places, this is the standard behaviour of currency formatting.

// console.log(price);

// // -------  Minimum and Maximum Digits : -------

// let num = 1234.5;

// num = num.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 4,});

// console.log(num);

