//!----PRIMITIVE DATA TYPES---

// Number - Storing age

const age = 21;
console.log("number = " + age);

// String - Storing name

const namee = "Virat Kohli";
console.log("string = " + namee);

// Boolean - Is the user logged in?

const isLoggedIn = true;
console.log("boolean = " + isLoggedIn);

// Symbol - Unique identifier

var user_id = 1000000000000000000;
const id = Symbol(user_id);
console.log(`symbol = ${id.toString()}`);
console.log(id);

// Undefined - A variable that has been declared but not yet assigned a value

let undeclaredVariable;
console.log(undeclaredVariable);

// Null - Intentionally setting a variable to have no value

let nullVariable = null;
console.log(nullVariable);

//!---NON-PRIMITIVE DATA TYPES---

// Object - Storing user data

const user = {
  name: "Virat",
  age: 21,
  friends: ["Rohit", "Rahul", "Shikhar"],
};
console.log(user);

// Array - Storing a list of mixdata

const mixdata = [21, "virat", true, null, undefined, {}];
console.log(mixdata);
