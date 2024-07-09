// ! logical AND (&&)
// The logical AND operator returns true if both operands are true, otherwise it returns false.

let a = true;
let b = false;

console.log(a && b); // false
console.log(a && true); // true
console.log(b && false); // false

// Practical Example
let age = 25;
let hasDrivingLicense = true;

if (age >= 18 && hasDrivingLicense) {
  console.log("You can drive.");
} else {
  console.log("You cannot drive.");
}
// Output: You can drive.

// ! Logical OR (||)
// The logical OR operator returns true if at least one of the operands is true, otherwise it returns false.

let aa = true;
let bb = false;

console.log(aa || bb); // true
console.log(aa || false); // true
console.log(bb || false); // false

// Practical Example
let isRaining = false;
let isSnowing = true;

if (isRaining || isSnowing) {
  console.log("You need an umbrella.");
} else {
  console.log("You don't need an umbrella.");
}
// Output: You need an umbrella.

// ! Logical NOT (!)
// The logical NOT operator returns true if the operand is false and returns false if the operand is true.

let aaa = true;
let bbb = false;

console.log(!aaa); // false
console.log(!bbb); // true

// Practical Example
let isWeekend = false;

if (!isWeekend) {
  console.log("It's a weekday.");
} else {
  console.log("It's the weekend.");
}
// Output: It's a weekday.

// ! Combining Logical Operators
// Logical operators can be combined to form complex logical expressions.

let agee = 20;
let hasID = true;
let isVIP = false;

if ((agee >= 18 && hasID) || isVIP) {
  console.log("You can enter the club.");
} else {
  console.log("You cannot enter the club.");
}
// Output: You can enter the club.
