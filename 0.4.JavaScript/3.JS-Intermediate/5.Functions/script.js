// ! ================================
//----
//? Syntax of  Function declaration
//----
// ! ================================

//! calling the function/invoke/use the function

//invoke
// sayHelloo();
//! say hello
function sayHelloo() {
  console.log("Hello world");
}

// ----------------------------

//! greeting
function greetingss() {
  console.log("Welcome to MrRock");
}
//invoke
// greetingss();

// ----------------------------

//! show date
function showDate() {
  const currentDate = new Date();
  console.log(`Todays date is ${currentDate}`);
}
//invoke
// showDate();
// ----------------------------

// ! ================================
//---
//? Function expression
//---
// ! ================================

//invoke
// sayHello();

const sayHello = function () {
  console.log("Hello world");
};
//invoke
// sayHello();

const greetingssss = function () {
  console.log("Welcome to MR-MANTHU ROCKS");
};
//invoke
// greetingssss();

// ----------------------------

//! Determines if a fixed number (e.g., 4) is even or odd.

const checkevenorodd = function () {
  const num = 4;
  if (num % 2 === 0) {
    console.log(`${num} is an even number`);
  } else {
    console.log(`${num} is an odd number`);
  }
};
// Invoke the function
// checkevenorodd();

// ----------------------------

// ! ================================
//---
// ? Anonymous functions
//--
// ! ================================

// function(){  //!  ERROR: Identifier expected.
//     console.log('Weclome');
// }

// () => console.log('Weclome');

// ! ================================
//----
//? Immediately Invoked Function Expression (IIFE)
//----
// ! ================================

//! Calculating Square of a Number

(function () {
  const num = 10;
  const square = num * num;
  // console.log(square);
})();

//! Concatenating Strings

(function () {
  const str1 = "Hello";
  const str2 = "World";
  const combine = `${str1 + " " + str2}`;
  // console.log(combine);
})();

// ! ================================
//--
//? Function parameters vs arguments
//--
// ! ================================

//! DRY = Don't repeat yourself

const pers = function (name, age) {
  console.log(`welcome ${name}, your age  is ${age} year`);
};
// pers("Manthan", 21);
// pers("devil", 20);

//! function to add any two numbers

const addtnum = function (a, b) {
  const res = a + b;
  console.log(`The Result is ${res}`);
};
// addtnum(5, 5);
// addtnum(50000000000, 50);

// ! ================================
//---
//? Default parameters
//---
// ! ================================

//Basic Default Parameters

const hi = function (name = "xyz", age = "20") {
  console.log(`Hello ${name}, your age is ${age}`);
};
// hi();
// hi("Manthan", 21);
// hi("Emma", 30);
// hi("ManthanAA");

//! Default Parameters with Expression

const multiply = function (a, b = a * 2) {
  const result = a * b;
  console.log(`The Result is ${result}`);
};
// multiply(2);
// const myFnCall = multiply(2);

// console.log(myFnCall);

// ! ================================
//---
//? Return Statement
//--
// ! ================================

//! Basic Return Statement

const add = function (a, b) {
  const res = a + b;
  return res;
};
const addres = add(2, 2);
// console.log(addres);

//-------------------

//! Return Statement with Conditionals

const con = function (num) {
  if (num % 2 === 0) {
    return "Number is Even";
  } else {
    return "Number is Odd";
  }
};
const conres = con(21);
// console.log(conres);

// ! ================================
//--
//? Function Scope
//--
// ! ================================

// Local Variable in Function

function showLocalVariable() {
  const localVar = "I am a local variable";
}
// console.log(localVar);
// showLocalVariable();

// Variable in Outer and Inner Function
const globalVar = "I am a global variable";

function outerFn() {
  const outerVar = " I am an outer variable";

  function innerFn() {
    const innerVar = "I am an inner variable";
    // console.log(outerVar);
  }
  innerFn();
}

outerFn();

// console.log(globalVar);
