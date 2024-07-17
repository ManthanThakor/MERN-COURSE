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
