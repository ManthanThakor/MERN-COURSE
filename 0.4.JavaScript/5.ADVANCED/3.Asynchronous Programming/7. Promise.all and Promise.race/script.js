//! Promise.all

//? create our promises

const promise11 = Promise.resolve("Promise 11 resolved");
const promise22 = Promise.resolve("Promise 22 resolved");

Promise.all([promise11, promise22])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));

//! Promise.race

//? create our promises

const promise1 = Promise.resolve("Promise 1 resolved");
const promise2 = Promise.reject(new Error("Promise 2 rejected"));

Promise.race([promise1, promise2])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));
