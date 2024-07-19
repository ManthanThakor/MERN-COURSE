//! ===========================
const path = require("path");

// console.log(path);

//! path.basename()

const filename = path.basename(
  "./MERN-COURSENODEJS/2.MODULES/5.Path API/app.js"
);
// console.log(filename);

//!path.dirname()

const filename2 = path.dirname(
  "./MERN-COURSENODEJS/2.MODULES/5.Path API/app.js"
);
// console.log(filename2);

//! path.extname()

const filename3 = path.extname(
  "./MERN-COURSENODEJS/2.MODULES/5.Path API/app.js"
);
// console.log(filename3);

//! path.join()
const joinedPath = path.join(
  "./MERN-COURSENODEJS",
  "2.MODULES",
  "5.Path API",
  "app.js"
);
// console.log(joinedPath);

//!path.resolve()

const absolutePath = path.resolve(
  "./MERN-COURSENODEJS",
  "2.MODULES",
  "5.Path API",
  "app.js"
);
// console.log(absolutePath);

//!path.isAbsolute()

const isAbs = path.isAbsolute(
  "D:/mern-course/MERN-COURSENODEJS/2.MODULES/5.Path API/app.js"
);
// console.log(isAbs);

//!path.parse()

const parsedPath = path.parse(
  "./MERN-COURSENODEJS/2.MODULES/5.Path API/app.js"
);
// console.log(parsedPath.dir);
// console.log(parsedPath.name);
// console.log(parsedPath.ext);
