// console.log("Author name is --> Muhammad Hasnain Raza");

// ------ Data Types : ------

// 1. Primitive Data Types :

//  * Number        -->  2 to power 53
//  * String        -->  "Muhammad Hasnain Raza"
//  * Boolean       -->  true or false
//  * Undefined     -->  undefined  (means not defined value)
//  * Null          -->  null (Standalone Value/Empty Value)
//  * BigInt        -->  2 to power 128
//  * Symbol        -->  unique

// --------------------------  Difference Between Number and BigInt : --------------------------

// | Feature :              | Number :                                     | BigInt :                      |

// | 1. Type                | Floating-point / Decimal Value allowed       | Integer only                  |
// | 2. Range               | ±(2^53 − 1) safely                           | Virtually unlimited           |
// | 3. Precision           | Limited                                      | Accurate for any big int      |
// | 4. Suffix              | None                                         | Ends with `n`                 |
// | 5. Use Case            | Normal math, decimals                        | Very large integers           |

// 2. Non-Primitive/Reference Data Types :

// * Object         -->  {name : "Muhammad Hasnain Raza"}
// * Array          -->  ["Muhammad", "Hasnain", "Raza"]
// * Function       -->  function name(){}

// --------------- Finding Types of Data : ---------------

// console.log(typeof "Muhammad Hasnain Raza");
// console.log(typeof 1);
// console.log(typeof true);
// console.log(typeof undefined);        // Type of "undefined" is "undefined"
// console.log(typeof null);             // Type of "null" is "object"
// console.log(typeof BigInt);           // Type of "BigInt" is "function"
// console.log(typeof Symbol);           // Type of "Symbol" is "function"

// ----------------- Type Conversion : -----------------

// let age = 21;
// console.log(`Age is`, age);
// console.log(`The type of age is`, typeof age);          // First Method/Syntax
// console.log(`The type of age is`, typeof (age));        // Second Method/Syntax

// ------------------ To Number -------------------

// let target = 25;
// console.log(typeof target);             // number
// console.log(typeof (target));           // number

// let target = "31"
// console.log(typeof target);             // String

// let target = "31"
// let valueInNumber = Number(target);
// console.log(valueInNumber);
// console.log(typeof valueInNumber);     // number

// let target = "Hasnain"
// let valueInNumber = Number(target);
// console.log(valueInNumber);
// console.log(typeof valueInNumber);     // number

// let target = "31abc"
// let valueInNumber = Number(target);
// console.log(valueInNumber);            // NaN      -->   Not a Number  -> Type of "NaN" is "number"
// console.log(typeof valueInNumber);     // number   -->   Type of "NaN" is "number"

// console.log(typeof NaN)                // number   -->   Type of "NaN" is "number"

// let target = 21;
// let valueInBoolean = Boolean(target);
// console.log(valueInBoolean);           // true --> if there is any type of value, then it will be true.
// console.log(typeof valueInBoolean);    // Boolean

// let target = null;
// console.log(typeof target);            // object
// let valueInNumber = Number(target);
// console.log(valueInNumber);            // 0
// console.log(typeof valueInNumber);     // number (object type is converted to number)

// let target = undefined;
// console.log(typeof target);            // undefined
// let valueInNumber = Number(target);
// console.log(valueInNumber);            // NaN
// console.log(typeof valueInNumber);     // number

// ------------------------------- Conclusion ----------------------------------

// 1. "33"       --->  33
// 2. "33abc"    --->  NaN      (type of "NaN" is "number")
// 3. null       --->  0        (type of "null" is "object")
// 4. undefined  --->  NaN      (type of "undefined" is "undefined")

// ------------------------------------------------------------------------------

// ------------------ To String -------------------

// let target = 31;
// let valueInString = String(target);
// console.log(valueInString);
// console.log(typeof valueInString);     // String

// let target = null;
// let valueInString = String(target);
// console.log(valueInString);            // "null"
// console.log(typeof valueInString);     // String

// let target = undefined;
// let valueInString = String(target);
// console.log(valueInString);            // "undefined"
// console.log(typeof valueInString);     // String

// let target = true;
// let valueInString = String(target);
// console.log(valueInString);            // "true"
// console.log(typeof valueInString);     // String

// ---------------------------------- Conclusion ----------------------------------

// 1. 31         --->  "31"
// 2. null       --->  "null"
// 3. undefined  --->  "undefined"
// 4. true       --->  "true"

// --------------------------------------------------------------------------------

// ---------- Another Method to convert to String -----------

// let target = 235;
// let valueInString = target.toString()
// console.log(target , typeof target)
// console.log(valueInString, typeof valueInString)

// ------------------ Converting To Boolean ------------------

// let target = "Happy";                        // If there is any type of value, then it will be true
// let valueInBoolean = Boolean(target);
// console.log(valueInBoolean);                 // true
// console.log(typeof valueInBoolean);          // Boolean

// let target = "";                             // If there is no value, then it will be false
// let valueInBoolean = Boolean(target);
// console.log(valueInBoolean);                 // false
// console.log(typeof valueInBoolean);          // Boolean

// let target = null;
// let valueInBoolean = Boolean(target);
// console.log(valueInBoolean);                 // false
// console.log(typeof valueInBoolean);          // Boolean

// let target = undefined;
// let valueInBoolean = Boolean(target);
// console.log(valueInBoolean);                 // false
// console.log(typeof valueInBoolean);          // Boolean

// let target = 0;
// let valueInBoolean = Boolean(target);
// console.log(valueInBoolean);                 // false
// console.log(typeof valueInBoolean);          // Boolean

// let target = 1;
// let valueInBoolean = Boolean(target);
// console.log(valueInBoolean);                 // true
// console.log(typeof valueInBoolean);          // Boolean

// let target = NaN;
// let valueInBoolean = Boolean(target);
// console.log(valueInBoolean);                 // false
// console.log(typeof valueInBoolean);          // Boolean

// let target = Infinity;
// let valueInBoolean = Boolean(target);
// console.log(valueInBoolean);                 // true
// console.log(typeof valueInBoolean);          // Boolean

// ------------------------------ Conclusion ----------------------------------

// 1. "Happy"        --->  true
// 2. ""             --->  false
// 3. null           --->  false
// 4. undefined      --->  false
// 5. 0              --->  false
// 6. 1              --->  true
// 7. NaN            --->  false
// 8. Infinity       --->  true

// ------------------------------------------------------------------------------

// ------------------  Operations in JavaScript :  ------------------

// let value = 10
// let negativeValue = -value
// console.log(negativeValue)

// ------------------------ Comparison Between Types (Different Data Types) ------------------------

// let value1 = 10
// let value2 = "10"
// console.log(value1 == value2)           // true

// let value1 = 10
// let value2 = "10"
// console.log(value1 === value2)          // false (Strict Comparison)

// --------------------- STACK and HEAP Memory ---------------------

// 1. STACK MEMORY :   (Memory used by Primitive Data Types is known as STACK MEMORY)

// let firstChannel = "Hasnain-Coding-School";
// let secondChannel = "Coding-Camp-By-Hasnain";

// secondChannel = firstChannel;       // Gives you a Shallow Copy / String stores in STACK Meomry.

// secondChannel = "Eat, Code, Sleep, Repeat"

// console.log(firstChannel);
// console.log(secondChannel);         // Hasnain Coding School

// 2. HEAP MEMORY :     (Memory used by Non-Primitive Data Types is known as HEAP MEMORY)

// let firstUserData = {
//     name : "abc",
//     email : "abc@gmail.com",
//     isLoggedIn : false
// }

// let secondUserData = firstUserData       // Gives you the Reference (Deep Copy) / Object stores in HEAP Memory.

// secondUserData.email = "xyz@gmail.com"

// console.log(firstUserData.email);
// console.log(secondUserData.email);

// ------------------------------------------- Strings In Javascript : --------------------------------------------

// let userName = "Hasnain Raza";
// let userAge = 21;

// console.log("Hello! " + userName + "," + " You are " + userAge + " years old" + ".")     // Old Method

// --------------------  Use Template Literals instead this :  ------------------------    

// let userName = "Hasnain Raza";
// let userAge = 21;

// console.log(`Hello! ${userName.toUpperCase()}, You are ${userAge} years old`)         // Modern Style


// --------------------------------- Modern Method/Syntax to Declare Strings : ---------------------------------


// let countryName = "Pakistan";                    // Normal and Old Method


// let countryName = new String('Pakistan')            // returns string as an "object"
// console.log(countryName);


// We can use a lot of methods with "string" object :

// let countryName = "Pakistan";
// "OR"
// let countryName = new String("Pakistan");

// console.log(countryName.length);                        // 8
// console.log(countryName[0]);                            // P
// console.log(countryName.toUpperCase());                 // PAKISTAN
// console.log(countryName.toLowerCase());                 // pakistan
// console.log(countryName.charAt(6));                     // a
// console.log(countryName.indexOf("a"));                  // 1
// console.log(countryName.lastIndexOf("a"));              // 7

// let string = "Banana";
// console.log(string.lastIndexOf("a", 4));                // 3

// Explanation :

// fromIndex = 4 (means from index 4) :

// “Index 4 se peeche ki taraf dekho aur "a" ka last occurrence batao.”

// Index 4 tak string "Banan" hai.
// "a" last baar index 3 par aaya tha.
// Isliye output --> 3.

// let word = "Mississippi";
// console.log(word.lastIndexOf("s", 5));                  // 3

// console.log(countryName.slice(2, 5));                   // kis
// console.log(countryName.slice(2));                      // kistan
// console.log(countryName.replace("Pakistan", "China"));  // China
// console.log(countryName.split(""));                     // ["P", "a", "k", "i", "s", "t", "a", "n"]
// console.log(countryName.split(" "));                    // ["Pakistan"]


// --------------- More/Advanced/Other Methods in Strings : ---------------

// let countryName = new String("Pakistan");

// console.log(countryName.repeat(3));             // PakistanPakistanPakistan
// console.log(countryName.includes("i"));         // true
// console.log(countryName.startsWith("P"));       // true
// console.log(countryName.endsWith("n"));         // true

// let segment = countryName.substring(0,2);       // Note that : index 2 is excluded.
// let segment = countryName.substring(4,6);       // Note that : index 6 is excluded.
// console.log(segment);

// let segment = countryName.slice(0,5)            // index 5 is not included
// console.log(segment);


// let countryName = new String("Pakistan");
// let segment = countryName.slice(2, -2)
// console.log(segment)                            // kist

// let countryName = new String("Pakistan");
// let segment = countryName.slice(5, -2)
// console.log(segment)                            // t

// let countryName = new String("Pakistan");
// let segment = countryName.slice(0, -3)
// console.log(segment)                            // Pakis

// let countryName = new String("Pakistan");
// let segment = countryName.slice(1, -5)
// console.log(segment)                               // ak













