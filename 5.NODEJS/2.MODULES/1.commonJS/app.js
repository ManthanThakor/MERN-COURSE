//! ========================
const greet = require("./utills");
const firstName = require("./utills");
const { utills, add, subtract, sayBye, sayHi } = require("./utills");

console.log("App Started...");
// console.log(module);
// console.log(firstName);
// console.log(utills("Alice"));
// console.log(greet);

//? -----------------------------

// console.log(utills);
// const { add, subtract } = utills;
// console.log(add(10, 5));
// console.log(subtract(10, 5));
// console.log(add(2, 6));
// console.log(subtract(10, 5))

//? -----------------------------

console.log(sayHi("Alice"));
console.log(sayBye("Bob"));
console.log(sayHi("Charlie"));
console.log(sayBye("David"));
console.log(sayHi("Emily"));
