// ! Case study
//Consider an e-commerce system where a user wants to purchase an item. The system has to check if the item is in stock before proceeding with the purchase:

let instock = true;
if (instock) {
  console.log("Item is instock, Proceeding with your purchase");
}

// ========================

let hello = false;
const yo = hello || true ? "hi" : "bye";

console.log(yo);

// ========================

//? ----------
// ! Case study 2
//? -------
//Suppose you're creating a website where users must be at least 18 years old to register. Here's how you might use an if statement to check a user's age:

let userAge = 18;
if (userAge >= 18) {
  console.log("You are eligible");
}
