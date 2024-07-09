//!---Define the variables---
let ageOfJohn = 25; //Number
let ageOfDoe = 30;
let userInput = "25"; //string
// using == (double equal to)
// console.log(ageOfJohn == userInput);

// using ===
// console.log(ageOfJohn === userInput);

// using !=
// console.log(ageOfJohn != ageOfDoe);

// using !==
// console.log(ageOfJohn !== userInput);

// using >
// console.log(ageOfJohn > ageOfDoe);

// using >=
// console.log(ageOfJohn >= ageOfDoe);

// using <
// console.log(ageOfJohn < ageOfDoe);

// using <=
console.log(ageOfJohn <= ageOfDoe);

let a = 10;
let b = 5;

// Equal to
console.log(`${a} == ${b}: ${a == b}`); // Output: 10 == 5: false

// Not equal to
console.log(`${a} != ${b}: ${a != b}`); // Output: 10 != 5: true

// Greater than
console.log(`${a} > ${b}: ${a > b}`); // Output: 10 > 5: true

// Less than
console.log(`${a} < ${b}: ${a < b}`); // Output: 10 < 5: false

// Greater than or equal to
console.log(`${a} >= ${b}: ${a >= b}`); // Output: 10 >= 5: true

// Less than or equal to
console.log(`${a} <= ${b}: ${a <= b}`); // Output: 10 <= 5: false

let aa = 10;
let bb = 5;

// ! Strict Equality Operator (===)

// The === operator checks whether the operands are strictly equal without type conversion. It returns true if both the value and the type of the operands are the same.

console.log(`${aa} === ${bb}: ${aa === bb}`); // Output: 10 === '10': false

// ! Strict Inequality Operator (!==)
// The !== operator checks whether the operands are not equal and of different types without type conversion. It returns true if either the value or the type of the operands are different.

console.log(`${aa} !== ${bb}: ${aa !== bb}`); // Output: 10 !== '10': true
