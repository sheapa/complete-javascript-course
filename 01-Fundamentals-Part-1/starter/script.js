let js = "amazing";
console.log(40 + 8 + 23 - 10);

/* Part1.1 lecture */

let firstName = "Patrick";
let lastName = "Shea";

console.log(firstName, lastName);

// Variables Best Practices
// cannot begin variables with numbers
// camelCase best practice
// Can only Contain "$,numbers,letters,_"
// cannot use reserved js keywords for variables
// don't begin variables with uppercase letter
// All uppercase is reserved for variables that will not change. (real constant)
// ALWAYS USE DESCRIPTIVE VARIABLES Bad: job1 = programmer, Good: myFirstJob = Programmer

/* SECTION 1 HW  */
let myCountry = "United States";
let myContinent = "North America";
let myCountryPopulation = 331.42;

console.log(myCountry, myContinent, myCountryPopulation);

/* Part 1.2 Lecture Types of variables 7 as of 2020*/

// !!! JavaScript has dynamic typing (Value has type, NOT variable!): we do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.

// Number
let myAge = 32;

// String
let birthName = "Pat";

// Boolean (Decisions)
let fullAge = true;
let smoker = false;
true;
false;
console.log(true);
console.log(typeof true);
console.log(typeof fullAge);

// Undefined -Variable not yet defined. Declared with no assigned value Empty Value
let children;

// Null: Also means 'empty value'
function getVowels(str) {
  const m = str.match(/[aeiou]/gi);
  if (m === null) {
    return 0;
  }
  return m.length;
}

console.log(getVowels("sky"));
// expected output: 0

// Symbol (ES2015): Value that is unique and cannot be changed. Const?

// BigInt (ES2020): Larger integers than the Number type can hold.

// "ctrl + / = comment line shortcut"

// Dynamic typing Can change variable type!
let javaScriptIsFun = true;
console.log(javaScriptIsFun);
javaScriptIsFun = "yes!";
console.log(typeof javaScriptIsFun);
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

// Undefined properties Undefind = typeof Undefined (value&type)
let year;
console.log(year);
console.log(typeof year);

// Error in typeof *PERMANENT BUT.. RETURNS OBJECT, SHOULD RETURN "NULL"
console.log(typeof null);

/* part 1.2 HW */
let isIsland = false;
let language;
console.log(isIsland, myCountryPopulation, myCountry, language);

/* Lecture Par5 1.3 Let, Const, Var Best Practice To Use Const for cleaner code and lest bugs*/

// Mutateable "re-assign variable"
let age = 32;
console.log(age);
age = 33;
console.log(age);

// UnMutable "cannot be changed"
const birthYear = 1989;
//birthYear = 1990;
console.log(birthYear);
//const job; (syntax error: Missing initializer in const declaration)

//oldSchool - Behaves like let, but is very different in reality "mutatable" function scoped - Should be avoided.
var job = "programmer";
console.log(job);
job = "teacher";
console.log(job);

// Always Declare variables

/* Lecture 1.4 Operators */

// $ Mathmatical Operators
const now = 2021;
const agePatrick = now - 1989;
const ageGeorge = now - 2005;
console.log(agePatrick, ageGeorge);

console.log(agePatrick * 2, agePatrick / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 2 * 2 * 2

// concatenate - link (things) together in a chain or series
const girlFirstName = "Sophie";
const girlLastName = "Shea";
console.log(girlFirstName + " " + girlLastName);

// $ Assignment operators
let x = 10 + 5; // = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);
console.log(x / 2);

// $ Comparison Operators
console.log(agePatrick > ageGeorge); // >, <, >=, <=
console.log(agePatrick >= 65); // >, <, >=, <=

const isRetirementAge = agePatrick >= 65;
console.log(isRetirementAge);

console.log("Patrick is older?", now - agePatrick < now - ageGeorge);

/* Part 1.4 HW */

let halfCountry = myCountryPopulation / 2;
console.log("Half of the " + myCountry + " is " + halfCountry);
let halfPlusOne = ++halfCountry;
console.log("What is Half the USA population plus one? ", halfPlusOne);
let finlandPopulation = 33;
console.log(
  "Does the USA have a higher population than Finland? ",
  myCountryPopulation > finlandPopulation
);
let averageCountryPop = 33;
console.log(
  "Does the USA have a larger than average population? ",
  myCountryPopulation >= averageCountryPop
);
let description =
  "Portugal is in Europe, and it's 11 million people speak Portuguese.";
console.log(description);

/* Operator Precedence Lecture 1.5 */
// See MDN Operator Precedents Index https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

console.log(2 - 10 - 5);

let w, z;
w = z = 25 - 10 - 5; // x = y = 10
console.log(w, z);

//PEMDAS
const averageAge = (agePatrick + ageGeorge) / 2;
console.log(agePatrick, ageGeorge, averageAge);
