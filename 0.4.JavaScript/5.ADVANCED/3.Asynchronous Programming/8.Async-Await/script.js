//! =================
//? Simulating a Delay
//! =================

//! creating
async function waitAndRun(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, 3000);
  });
}

// const waitAndRun = async () => {
//   console.log("hi");
// };

//! usage

const getProcessValue = async () => {
  const result = await waitAndRun("This is my promise with async await");
  console.log(result);
};
getProcessValue();

//! =================
//? Fetching Multiple Values in Parallel
//! =================

const getName = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("John Doe");
    }, 2000);
  });
};

const getAge = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(30);
    }, 1000);
  });
};

//!  method-1

/* const fetchData = async () => {
   const name = await getName();
  const age = await getAge();
   console.log(`Name: ${name}, Age: ${age}`);
 };
 fetchData(); */

//!  method-2
async function getuserDetails() {
  const result = await Promise.all([getName(), getAge()]);
  console.log(result);
}
getuserDetails();

//! =================
