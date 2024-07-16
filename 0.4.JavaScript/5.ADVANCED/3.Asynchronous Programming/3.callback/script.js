//! Behaving as a normal function parameter/argument/variable

//! create callback function

function myCallbackfn() {
  // console.log("Hello this is a simple callback function");
}

//! Usage

function logMessage(callback) {
  //execute the callback fn
  callback();
}

//! call HOF

// logMessage(myCallbackfn);

logMessage(function () {
  // console.log("Hello this is a simple callback function");
});

//!: Returning a callback function method 1

function logMessageHOF(callback) {
  //execute the callback fn
  const result = callback();
  // console.log(callback());
}

logMessageHOF(() => {
  // return "Hello this is a  simple callback function";
});

//! Extracting Callback function

function logMessageHOF(callback) {
  //execute the callback fn
  const result = callback();
  return result;
}

const result = logMessageHOF(() => {
  return "Hello this is a  simple callback function";
});
// console.log(result);

//! passing parameters to the callback function

const log = (callback) => {
  const result = callback("ANG", "wkd");
  // console.log(result);
};
const logsCallbackfn = (firstName, lastName) => {
  return `hello ${firstName} ${lastName} this is a simple cb`;
};

//call HOF

log(logsCallbackfn);

//! HOF with parameter and call back function

const calculateSum = (a, b, callback) => {
  const result = a + b;
  callback(result);
};

calculateSum(3, 5, (result) => {
  console.log(`The sum is: ${result}`);
});
