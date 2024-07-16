//! ======================
//? --- Create a Blocking ---
//! ======================

console.log("Starting Blocking Operations");
// CREATE BLOCKING CODE

//? for (let i = 0; i < 1e9; i++) {
// Perform some heavy computations
// This will block the main thread
// and make it unable to perform other tasks
// until it finishes the loop
// This is not recommended for real-world applications
// because it can lead to performance issues
// and consume a lot of resources
// ! ************** Danger *****************8
// ?  console.log(i);
// ! ************** Danger *****************8
// ? }

//! ======================
//? --- Create a non Blocking ---
//! ======================

console.log("Starting Non-Blocking Operations");

// CREATE NON-BLOCKING CODE

setTimeout(() => {
  // Perform some heavy computations
  // This will not block the main thread
  // and can continue executing other tasks
  // while it waits for the setTimeout to finish
  // This is a better approach for real-world applications

  console.log("Hello after 3 seconds");
}, 3000);

console.log("Non-Blocking Operations Finished");
