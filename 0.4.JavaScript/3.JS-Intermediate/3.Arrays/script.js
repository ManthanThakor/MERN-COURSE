//-------
//! Creating Array using Array Literal
//-------

//synatx

const studentAges = [12, 23, 21, 22, 50, 54, 11];
// console.log(studentAges);

//! Access the first elemen

const studentAgess = [12, 23, 21, 22, 50, 54, 110000000000000000];
const firstAge = studentAgess[0];
const firstAge1 = studentAgess[1];
const firstAge2 = studentAgess[-1];
const firstAge3 = studentAgess[100];
const fisrtAge4 = studentAgess[studentAgess.length - 1];

// console.log(firstAge);
// console.log(firstAge1);
// console.log(firstAge2);
// console.log(firstAge3);
// console.log(fisrtAge4);

//! Declaring an array of strings
const daysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// console.log(daysOfTheWeek);

//! Declaring an array of mix types

const mixedTypes = [42, "hi", true];
// console.log(mixedTypes);

//! Declaring an array of with data

const emptyArr = [];
// console.log(emptyArr);

//*-----
//? Creating Array using Array Constructor
//*----

//! Create an array with empty data

const emptyArray = new Array();
// console.log(emptyArray);

//! Creating an array with a predefined size (5)

const sizeDefinedArr = new Array(5);
// console.log(sizeDefinedArr);

//! Creating an array with elements

const fruitArr = new Array("Apple", "Banana", "kiwi");
// console.log(fruitArr);

//! Creating an array with mixed types

const mixDataType = new Array(1, false, "Emmanuel");
// console.log(mixDataType);

//*----
//? Creating Array using Array.of()
//*----

//! Creating an array with numbers

const numArr = Array.of(1, 2, 3, 4);
// console.log(numArr);

//! Creating an array with strings

const strArr = Array.of("Apple", "Banana", "Kiwi");
// console.log(strArr);

//!  Creating an array with mixed types
const mixedArr = Array.of("Apple", "Banana", "Kiwi", false, true, 20);
// console.log(mixedArr);

//* ---
//? Creating Array using Array.from()
//* ---

//! cloning array

const originalArr = [1, 2, 4, 5, 7, 8];
const clonedArr = Array.from(originalArr);
// console.log(clonedArr);

//creating an array from an array-like object
const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
const convertedArr = Array.from(arrayLike);
// console.log(convertedArr);

// ! ==========================================

//* -----
//? Using push method
//* -----

// !  Using .push() to add elements at the end of an array

const fruits1 = ["Apple", "Banana"];
// console.log("Original fruits", fruits1);
const newArrayOfFruits1 = fruits1.push("kiwi");
// console.log("Modified fruits", fruits1);

// !  Using .unshift() to add elements at the beginning of an array

const fruits = ["Apple", "Banana"];
// console.log("Original fruits", fruits);
const newArrayOfFruits = fruits.unshift("Mango", "kiwi");
// console.log("modfied fruits", fruits);

// ! ==========================================

//* ----
//? Remove Elements (.pop(), .shift())
//* -----

// ! pop() removes the last element

const animal = ["Cat", "Dog", "Elephant"];
// console.log("Original Animal", animal);
//! pop()
const popedAnimal = animal.pop();
// console.log("After Poped Animal", animal);

//! shift() removes the first element

const vehicle = ["car", "bike", "truck"];
// console.log("Original Vehicle", vehicle);
//! shift()
const shiftedVehicle = vehicle.shift();
// console.log("After Shifted Vehicle", vehicle);

// ! ==========================================

//* -----
//? Array Size (.length)
//* -----

const colors = ["Red", "Yellow", "Green", "Black"];
const arrayLength = colors.length;
// console.log("Array length", arrayLength);

//! Modify the length of the array
colors.length = 2;
// console.log(colors);

// ! ==========================================
// ! ==========================================
// ! ==========================================

//----
//? For Loops
//----

//! Basic for loop to print numbers 0-5

for (let i = 0; i <= 100; i++) {
  // console.log(`for loop 1 to 100: ${i}`);
}

// ! Looping through an array to print its elements

const devil = ["vk", "devil", "dark"];
for (let i = 0; i < devil.length; i++) {
  // console.log(devil[i]);
}

//! Using 'break' to exit the loop early

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break;
  } else {
    // console.log(`Looping through array: ${i}`);
  }
}

//! Using 'continue' to skip an iteration

for (i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  // console.log(`Looping through array with condition: ${i}`);
}

//! Looping in reverse

for (let i = 10; i >= 0; i--) {
  // console.log(`Looping in reverse: ${i}`);
}

// ! ==========================================

//* ----
//? ForEach Loop
//* ---

// ! The forEach loop in JavaScript is a method used to iterate over elements of an array, executing a provided function once for each array element. It’s often used to perform actions on each element of an array without needing to manage the loop control variables explicitly.

//* Syntax

//! array.forEach(function (currentValue, index, array) {
//    Code to execute for each element
//! });

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100];
numbers1.forEach(function (elements, index, arrr) {
  // console.log(`Element at index ${index} IS ${elements} , and array:${arrr}`);
});

// --------------------

const game = ["coc", "gta", "pubg", "cod"];
game.forEach(function (el, index, ar) {
  // console.log(`element: ${el} , index: ${index}, array: ${ar}`);
});

//! Using forEach to sum the elements of an array

let sums = 0;
const numb = [1, 2, 3, 4, 5, 6, 100000];

numb.forEach(function (e, i) {
  sums = sums + e; // sums += e
});
// console.log("Sum of the numbers:", sums);

//! Modifying array elements using forEach

const numberss = [1, 2, 3, 4, 5, 6, 1000, 212];
const squares = [];
numberss.forEach(function (num) {
  squares.push(num * num);
});
// console.log(squares);
// console.log(numberss);

// ! ==========================================
// ! ==========================================

//* ----
//! Mapping (.map())
//* ---

//! The map method in JavaScript is used to create a new array by applying a provided function to each element of the original array. It is particularly useful when you want to transform or compute a new array from an existing array.

// * Syntax

// !const newArray = array.map(function(currentValue, index, array) {
//    Return element for newArray
// !});

const numbe = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 352, 4423, 34434, 3434236, 43757, 4354, 3, 23,
  34, 3, 4,
];
const newNumbe = numbe.map(function (element, index, array) {
  return `element:${element}, index: ${index} array: ${array}`;
});
// console.log(newNumbe);

// ----------------------

const number = [1, 2, 3, 4, 5, 500];
const doubled = number.map(function (number) {
  return number * 2;
});

// console.log(doubled);
// console.log(number);

//! Using map to convert an array of strings to uppercase

const words = ["apple", "pear", "mango"];

const convertWords = words.map(function (word) {
  return word.toUpperCase();
});

console.log(convertWords);

// ! ==========================================
// ! ==========================================

//---
//? Filtering (.filter())
//---

const numbers = [1, 2, 3, 4, 5, 6];

// const evenNumbers = numbers.filter(function(num){
//     //filter logic here
//     return num %2 ===0
// })
// console.log(evenNumbers);
const gender = ["male", "female"];

const maleArr = gender.filter(function (gender) {
  return gender === "male";
});
// Using filter to remove falsy values from an array
const mixedArr2 = [0, 1, "apple", "", null, "banana"];
const truthyValues = mixedArr2.filter(function (value) {
  return Boolean(value);
});

//----
//Reducing (.reduce())
//----
// Using reduce to sum up all elements in an array

const numbers2 = [1, 2, 3, 4, 5, 6, 30];

const sum = numbers2.reduce(function (acc, current) {
  //perfomr our logic
  return acc + current;
}, 0);

// Using reduce to find the maximum value in an array
const maxNum = numbers2.reduce(function (acc, current) {
  if (current > acc) {
    return current;
  } else {
    return acc;
  }
}, 0);

// Using reduce to count the frequency of elements in an array
const fruits2 = ["Apple", "Banana", "Apple", "Mango", "Apple", "Mango"];
const fruitCount = fruits2.reduce(function (acc, current) {
  if (acc[current]) {
    acc[current] += 1;
  } else {
    acc[current] = 1;
  }
  return acc;
}, {});

//----
//Multi-Dimensional Arrays
//----
// Creating a 2D array
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
//Access the elements
//console.log(matrix[0][0]);
// console.log(matrix[2][2]);

// Creating a 3D array
const threeDArray = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

// console.log(threeDArray[0][1][1]);

// console.log(threeDArray[1][0][0]);
