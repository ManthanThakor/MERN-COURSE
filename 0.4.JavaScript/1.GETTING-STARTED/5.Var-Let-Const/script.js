//!----- Using `var` ----

var myAge = 21; // declared
console.log("Initial age using var:", myAge); // 21
myAge = 22; // re-assigned
console.log("Re-assigned age using var:", myAge); // 22

//!----- Using `let` ----

let myScore = 10;
console.log("Initial score using let:", myScore); // 10
myScore = 11; // re-assignment is allowed
console.log("Re-assigned score using let:", myScore); // 11
{
  let m = 50;
  console.log("Block-scoped variable using let:", m); // Accessible within the block, 50
}
console.log(
  "Trying to access block-scoped variable outside the block using let:",
  typeof m !== "undefined" ? m : "not accessible"
); // m is not accessible outside the block

//!----- Using `const` ----

const myHeight = 175;
console.log("Initial height using const:", myHeight); // 175
// Uncommenting the below line will cause an error because `const` cannot be re-assigned
// myHeight = 180;
// console.log("Re-assigned height using const:", myHeight); // Error

const myDetails = {
  name: "John",
  age: 30,
};
console.log("Initial details using const:", myDetails); // { name: "John", age: 30 }
myDetails.age = 31; // Object properties can be modified
console.log("Modified details using const:", myDetails); // { name: "John", age: 31 }
