//? --------------------------
// ! TERNARY OPERATOR
//? --------------------------

// condition ? expressionIfTrue : expressionIfFalse;

let age = 18;
let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";

console.log(canVote); // Output: Yes, you can vote.

//? --------------------------

let score = 85;
let grade =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";

console.log(grade); // Output: B

//? --------------------------

// ! Using the Ternary Operator for Assignments
// You can use the ternary operator to assign values to variables based on a condition.

let isMember = true;
let discount = isMember ? 0.1 : 0;

console.log(`Discount: ${discount * 100}%`); // Output: Discount: 10%

// ! Ternary Operator in Function Return
// The ternary operator can also be used to return different values from a function.

function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}

console.log(getFee(true)); // Output: $2.00
console.log(getFee(false)); // Output: $10.00
