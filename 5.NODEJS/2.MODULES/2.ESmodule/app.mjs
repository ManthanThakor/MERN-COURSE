//! =================
//! =================
//? Default Export
//! =================

// import gre from "./utiils.mjs";

// console.log(gre("World"));
// console.log(gre("Hello"));

//!----------------------------------
//! =================
//? Name Export
//! =================

// import { add, subtract } from "./utiils.mjs";

// console.log(add(10, 5));
// console.log(subtract(10, 5));

//!----------------------------------
//! =================
//? Mixed Export(Default + Named)
//! =================

// import greet, { subtract, add } from "./utiils.mjs";

// console.log(greet("World"));
// console.log(subtract(100, 50));
// console.log(add(100, 50));

//!----------------------------------
//! =================
//? Export everything
//! =================

import * as utiils from "./utiils.mjs";

console.log(utiils.add(10, 60));
console.log(utiils.subtract(10, 60));
