console.log(" ");

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

//Basic for loop to print numbers 0-5

// for(let i=0; i<=5; i++){
//     //code will run
//     console.log(i);
// }

// Looping through an array to print its elements
// const myFruits = ['Apple','Banana','Kiwi']
// for(let i=0; i<myFruits.length; i++){
//     console.log(myFruits[i]);
// }

// Using 'break' to exit the loop early

// for(let i=0; i<=10; i++){
//     //code will run
//   if(i ===5){
//     break
//   }
//   console.log(i);
// }

// Using 'continue' to skip an iteration
// Looping in reverse
// for(let i=5; i>0; i--){
//   console.log(i);
// }

//----
//ForEach Loop
//---

//  const numbers  = [1,2,3,4,5,6, 100]
// numbers.forEach(function(element, index, array){
// console.log('Element', element);
// console.log('index', index);
// console.log('array', array);
// })

// Using forEach to sum the elements of an array
// let sum=0;
// numbers.forEach(function(num){
//     sum += num
// })
// console.log('The total sum is:', sum);

// Modifying array elements using forEach
// const numbers  = [1,2,3,4,5,6, ]
// const squares  = []
// numbers.forEach(function(num){
//   squares.push(num*num)
// })
// console.log(squares);
// console.log(numbers);

//----
// Mapping (.map())
//---

//   const numbers  = [1,2,3,4,5,6,]

//   const newNumArrSquare = numbers.map(function(num, idx, arr){
//       return num * 10
//   })

//   console.log(newNumArrSquare);
//   console.log(numbers);

// Using map to convert an array of strings to uppercase
const words = ["apple", "pear", "mango"];

const convertedWords = words.map(function (word) {
  return word.toUpperCase();
});

//   console.log(convertedWords);

//---
//Filtering (.filter())
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
