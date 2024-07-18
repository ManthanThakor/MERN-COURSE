//! --Accessing the global object---

//Accessing the global object
global.myGlobal = "Hello from the global object";

//? console.log(" ");
//? console.log(global.myGlobal);
//? console.log(" ");
//? console.log("myGlobalss" in global); // false
//? console.log("myGlobal" in global); // true
//? console.log(" ");

//! To check if our variable is truly global

//? console.log(__dirname);
//? console.log(" ");
//? console.log(__filename);
console.log(" ");

//! Using `setInterval` and `clearInterval

let count = 0;
const intervalId = setInterval(() => {
  console.log("Hello word");
  count++;
  if (count === 5) {
    clearInterval(intervalId);
  }
}, 1000);

//? setTimeout

setTimeout(() => {
  console.log("This will be delayed by 5S");
}, 5000);
