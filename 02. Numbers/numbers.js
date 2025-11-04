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

// 1.2 × 10²	            Yes	                 1 digit before decimal
// 12 × 10¹	                No	                 2 digits before decimal --> not normalized
// 0.12 × 10³	            No	                 decimal point too far left
// 1.23 × 10²	            Yes	                 standard scientific form


// ===============  Summary : ===============

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

// --------------------------------------------------------------------------

// ==========  Complete Summary Of Number Methods, Properties, and Conversion : ==========


// 1. Number Properties (Fixed Values) :

// console.log(Number.MAX_VALUE)                    // 1.7976931348623157e+308 --> Biggest Possible Number in JS.
// console.log(Number.MIN_VALUE)                    // 5e-324 --> Smallest Possible Number in JS (near to 0).
// console.log(Number.MAX_SAFE_INTEGER)             // 9007199254740991 --> Max safe integer.
// console.log(Number.MIN_SAFE_INTEGER);            // -9007199254740991 --> Min safe integer.
// console.log(Number.POSITIVE_INFINITY)            // Infinity --> represents Positive Infinity.
// console.log(Number.NEGATIVE_INFINITY)            // -Infinity --> represents Negative Infinity.
// console.log(Number.NaN)                          // Not-A-Number (when becoming a Number is impossible).


// 2. Number Checking Methods :

// Number.isFinite(value)                           // true, if 'value' is a finite number. 
// Number.isInteger(value)                          // true, if 'value' is a complete integer.
// Number.isNaN(value)                              // true, if 'value' is NaN. 
// Number.isSafeInteger(value)                      // true, if 'value' is in safe integer range.


// 3. String → Number Conversion :

// console.log(Number.parseInt("123abc"))           // 123 --> only gives the integer part.
// console.log(Number.parseFloat("12.34px"))        // 12.34 --> only gives the decimal part.
// console.log(Number("45"))                        // 45 --> converts the string into number.
// console.log(+ "56")                              // 56 --> converts the string into number (shortcut).


// 4. Number Formatting Methods :

// console.log((12.3456).toFixed(2))                        // "12.35" --> rounds off to 2 decimal places.
// console.log((12.3456).toPrecision(3))                    // "12.3"  --> rounds off to 3 significant digits.
// console.log((255).toString(2))                           // "11111111" --> converts number into binary string.
// console.log((255).toString(16))                          // "ff" --> converts number into hexadecimal string.

// 5. Useful Examples :

// console.log(Number.isFinite(Infinity))                   // false
// console.log(Number.isInteger(5.5))                       // false
// console.log(Number.isNaN("abc"))                         // false (kyonki ye string hai)
// console.log(Number.isNaN(NaN))                           // true
// console.log(Number.isSafeInteger(9007199254740992))      // false
// console.log((112).toString(2))                           // "1010"
// console.log((123.456).toFixed(1))                        // "123.5" --> returns string.



//  =====================  SUMMARY OF NUMBER METHODS, PROPERTIES, AND CONVERSION : =====================


// 1.  Properties : MAX_VALUE, MIN_VALUE, NaN, POSITIVE_INFINITY, NEGATIVE_INFINITY

// 2.  Methods : isFinite(), isInteger(), isNaN(), isSafeInteger()

// 3.  Conversion : parseInt(), parseFloat(), Number()

// 4.  Formatting : toFixed(), toPrecision(), toString()


// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------


// //  =========== NaN (Not-A-Number) : ==========


// console.log(isNaN("abc"));                               // true
// console.log(Number.isNaN("abc"));                        // false

// console.log(isNaN(NaN));                                 // true
// console.log(Number.isNaN(NaN));                          // true

// console.log(isNaN(undefined));                           // true
// console.log(Number.isNaN(undefined));                    // false

// console.log(isNaN(null));                                // false
// console.log(Number.isNaN(null));                         // false


// | Expression :              | Converts value to Number ??   | Checks exactly NaN ??     | Result :       |
// | --------------------      | ------------------------      | -------------------       | -------        |
// | 1. isNaN(null)            |    Yes (null -> 0)            |         No                |   false        |
// | 2.Number.isNaN(null)      |           No                  |         Yes               |   false        | 


// isNaN() :

// isNaN() says = "Number mein convert karke check karo"

// isNaN() first tries to convert the value (like "abc") into a number.
// Since, "abc" can't be converted into a number, it becomes 'NaN'.
// Then 'isNaN()' says -> "Yes, this is NaN."


// Number.isNaN() :

// Number.isNaN() = "bina convert kiye check karo kay kya ye exactly NaN hai ya nahi."

// Number.isNaN(NaN)           //  true          (Because the value is exactly NaN)
// Number.isNaN("abc")         //  false         (Because the value is a string)
// Number.isNaN(123)           //  false         (Because the value is a number)


// Summary Of isNaN() and Number.isNaN() :

// 1. isNaN() : checks if the value is exactly NaN.
// 2. Number.isNaN() : checks if the value is exactly NaN.

// Expalanation :

// isNaN() first tries to convert the value (like "abc") into a number.
// Since, "abc" can't be converted into a number, it becomes 'NaN'.
// Then 'isNaN()' says -> "Yes, this is NaN."

// But!
// `Number.isNaN()` doesn’t convert the value into a number, it only checks directly that
//  whether the value itself is `NaN` or not.

// Number One : 'isNaN(value)' --------------------

// Ye purana function hai.
// Pehle value ko number mein convert karta hai,
// phir check karta hai ke result NaN hai ya nahi.

// Number Two : Number.isNaN(value) --------------------

// Ye modern (ES6) version hai.
// Ye direct value check karta hai —
// kisi bhi conversion ke bina.


// Difference Example : -----------------------------

// 1. console.log(isNaN("abc"));                    // true
// 2. console.log(Number.isNaN("abc"));             // false

// Ab dekho kya hua :
// console.log(isNaN("abc")

// Pehle "abc" ko number mein badalne ki koshish karta hai,
// isNaN("abc") returns NaN (kyonki ye number nahi ban sakta).

// Ab check karta hai: kya ye NaN hai ??
// Yes, toh result true.

// Number.isNaN("abc") returns false.

// Ye conversion nahi karta.
// Seedha check karta hai: kya value exactly NaN hi hai ???
// "abc" ek string hai, So it returns 'false'.

// Aik aur example : -----------------------------

// console.log(isNaN("123"));                   // false
// console.log(Number.isNaN("123"));            // false

// "123" number mein convert ho sakta hai --> 123
// isNaN(123) --> false (kyonki 123 aik number hai, NaN nahi).

// Aur Number.isNaN("123") -> bhi false (kyonki string hai, exactly NaN nahi).


// ------------------------------------------------------------------------------------------------------------

