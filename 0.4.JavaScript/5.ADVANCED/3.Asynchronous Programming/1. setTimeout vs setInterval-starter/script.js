//! ========================
//? --- set-timeout
//! ========================

const showMessage = () => {
  //   console.log("hello after 3 second");
};
// schedule the message
setTimeout(showMessage, 3000);

// console.log("waiting for the message");

//! rewrite

setTimeout(() => {
  //   console.log("Hello after 3 seconds");
}, 3000);

setTimeout(function () {
  //   console.log("Hello after 3 seconds");
}, 3000);

// ! --- canceling a 'settimeout'---

const timeOutId = setTimeout(() => {
  console.log("This will  not displayed");
}, 3000);
clearTimeout(timeOutId);

//! ========================
//? --- setinterval
//! ========================

setInterval(() => {
  //   console.log("Am calling at every 2 seconds");
}, 2000);

// ! --- canceling a 'setinterval'---

let counter = 0;

const intervalId = setInterval(() => {
  counter++;
  console.log(counter);
  if (counter >= 5) {
    clearInterval(intervalId);
  }
}, 1000);
