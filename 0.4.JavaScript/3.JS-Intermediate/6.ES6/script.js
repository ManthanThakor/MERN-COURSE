//!===========================
//----
//? ARROW FUNCTION
//---
//!===========================

//! Basic Syntax

function mult(a, b) {
  const sum = a * b;
  console.log(sum);
}
// mult(100, 100);

//! Arrow Function Syntax

const multiply = (a, b) => a * b;

const multFn = multiply(100, 100);
// console.log(multFn);
const rest = multiply(2, 3);
// console.log(rest);

//! Block Body Syntax

const greetuser = (name) => {
  return `Hello, ${name}`;
};

const greetFnn = greetuser("Manthan");
// console.log(greetFnn);

//-----------------

const greet = (namee) => `Hello, ${namee}`;
const greetFn = greet("Emmanuel");
// console.log(greetFn);

//-----------------

//! Single Parameter, No Parentheses

const square = (x) => x * x;
const squareFn = square(5);
// console.log(squareFn);

//! No Parameters

const random = () => Math.random();
const randomFn = random();
// console.log(randomFn);

//! Object Literal Return

const getuser = () => {
  return {
    name: "John",
    age: 30,
  };
};
const getUserF = getuser();
// console.log(getUserF);

const getUser = () => ({ name: "MR", age: 21 });
const getUserFn = getUser();
// console.log(getUserFn);

//!===========================
//---
//? "let" and "const" in JavaScript
//--
//!===========================

//! Hoisting
//? using var

function hostingIssue() {
  console.log(a);
  var a = 10;
  console.log(a);
}
// hostingIssue();

//? using var

function hoistingIssuee() {
  console.log(a);
  let a = 10;
  console.log(a);
}
// hoistingIssuee();

//! Block Scope

//? using var

//! for (var i = 0; i < 10; i++) {
// console.log(i);
//! }
// console.log(i);

//? using var

for (let i = 0; i < 3; i++) {
  // console.log(i);
}
// console.log(i);

//-------------------

//! Immutability

//? using var and let

// const x = 10;
// x = 20;
// console.log(x);

//!===========================
//---
//? Destructuring in JavaScript ES6
//--
//!===========================

//! basic

const numbers = [1, 2, 3, 4];
const [first, second, third, four] = numbers;

// console.log(first);
// console.log(second);
// console.log(third);
// console.log(four);
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);

//! swap variiables

let a = 1;
let b = 2;
[a, b] = [b, a];
// console.log(a, b);

//! Object Destructuring

//? Extract user data

const { namee, agee, emaill } = {
  namee: "manthan",
  agee: 21,
  emaill: "manthan@example.com",
};
// console.log(namee);
// console.log(agee);
// console.log(emaill);

//! Destructuring in Function Parameters

function greet2({ name, age }) {
  console.log(`Hello, ${name}, your age is ${age}`);
}
// greet2({ name: "John", age: 30 });

//! Nested Destructuring

const {
  id,
  info: { name, age },
} = {
  id: 1,
  info: {
    name: "Maysnctech",
    age: 10,
  },
};
// console.log(id);
// console.log(name);
// console.log(age);

//!===========================
//---
//? Spread and Rest Operator
//---
//!===========================

//! Spread operator
//array concatenation

const fruits = ["apple", "banana"];
const veggies = ["carrot", "potato"];
const food = [...fruits, ...veggies];
// console.log(food);

// Cloning an Object
const person = { name: "Maysnctech", email: "support@masynctech.com" };

const clonedObj = { ...person, location: "Ghana" };

// console.log(person);
// console.log(clonedObj);

//! Collect Function Arguments

//using rest operator

const displayUserInfo = (name, email, ...args) => {
  console.log(args);
  console.log(
    `Welcome ${name}, your email is  ${email}, the location is ${args[0]}`
  );
};

// displayUserInfo("Maysnctech", "something@gmial.com", "location");

const sumAll = (...args) => {
  //   console.log(args);
  return args.reduce((sum, current) => {
    return sum + current;
  }, 0);
};

const results = sumAll(1, 2, 3, 4, 5, 6, 7, 8);
// console.log(results);

//Object Destructuring with Rest

const { userId, ...otherProps } = { userId: 1, name: "Alice", age: 20 };

// console.log(otherProps);
// console.log(userId);

//---
//! Enhanced Object Literals
//--

//! Property shorthand

const username = "Masynctech";
const email = "masynctech2@gmail.com";
const userProfile = { username, email };

// console.log(userProfile);

//! Method Shorthand

const timer = {
  startTime: 10,
  start() {
    console.log(this.startTime);
  },
};

// timer.start();

//! Computed Property Names

const settingName = "isWhiteMode";
const settingValue = true;

const appSettings = {
  ["default" + settingName]: false,
  [settingName]: settingValue,
};

// console.log(appSettings);
