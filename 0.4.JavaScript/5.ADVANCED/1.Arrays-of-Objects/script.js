//! =====================================
//----
//? The Concept of Objects Being Passed by Reference
//----
//! =====================================

//! Modifying Object Through a Different Reference

const person1 = { name: "Alice", age: 20 };

const person2 = person1;
//modify age
person2.age = 30;
person1.name = "Emmanuel";
// console.log("person2", person2);
// console.log("person1", person1);

//! Passing Object to a Function

const incrementAge = (personObj) => {
  personObj.age += 1;
};
//! person Obj
const bob = { name: "Bob", age: 40 };
// console.log("Before", bob);
incrementAge(bob);
// console.log("after", bob);

//! =====================================
//---
//?  Objects in arrays
//---
//! =====================================

//! Scenario: Managing a List of Students

//! In this example, we'll create a simple list of students where each student is an object with properties like `id`, `name`, and `grade`.

const students = [
  { id: 1, name: "Bob", grade: "A" },
  { id: 2, name: "Alice", grade: "B" },
  { id: 3, name: "xyz", grade: "A" },
];
//Access student
const student1 = students[0].name;
// console.log(student1);

//Add new student
const addStudent = (id, name, grade) => {
  const newstudent = { id, name, grade };
  students.push(newstudent);
};
addStudent(4, "David", "B");
addStudent(5, "Devil", "A");
addStudent(6, "Devil2", "B");
addStudent(7, "Devil", "C");

// Check the list of students
//? console.log(students);

//! Upgrade a  student

const updateStudentGrade = (id, newGrade) => {
  // find the student by id
  const studentFound = students.find((student) => {
    return student.id === id;
  });
  if (studentFound) {
    studentFound.grade = newGrade;
  } else {
    console.log("Student not found");
  }
};

updateStudentGrade(3, "Z");
// console.log(students);

//! =====================================
//--
//? Arrays in objects
//--
//! =====================================

//! Scenario: Managing a Simple To-Do List

//! Here, we'll create a simple `ToDoList` object that has a `tasks` array property. Each object inside the `tasks` array will have properties like `id`, `description`, and `completed`.

const todoLists = {
  title: " My Todo List",
  tasks: [
    { id: 1, description: "call friend", completed: false },
    { id: 2, description: "eat dinner", completed: true },
    { id: 3, description: "go to park", completed: false },
    { id: 4, description: "read book", completed: false },
    { id: 5, description: "practice coding", completed: false },
  ],
};

//Accessing properties
const todoTitle = todoLists.title;
// console.log(todoTitle);

//tasks
const allTasks = todoLists.tasks;
// console.log(allTasks);

//! Function to add a task

const addTask = (description) => {
  //get new id
  const newId = todoLists.tasks.length + 1;
  const newTask = {
    id: newId,
    description,
    completed: false,
  };
  //push new task in main task
  todoLists.tasks.push(newTask);
};
addTask("car driving");

// console.log(todoLists);

// call fn
// addTask("Programming");

//! Function to mark a task as completed

const markAsCompleted = (id) => {
  // find task
  const foundTask = todoLists.tasks.find((tasks) => tasks.id === id);
  if (foundTask) {
    foundTask.completed = true;
  } else {
    console.log("Task not found");
  }
};
markAsCompleted(1);
// console.log(todoLists);

//! =====================================
//? iterate through arrays using `forEach()`
//! =====================================

//Basic example
const fruits = [
  { name: "Apple", color: "red" },
  { name: "Banana", color: "yellow" },
  { name: "cherry", color: "red" },
];

fruits.forEach((currentcal, index, arr) => {
  // console.log(index, currentcal, arr);
});

//! Case Study: Online Shopping Cart Calculation

//Suppose you are working on an e-commerce website, and you need to calculate the total price of items in a user's shopping cart. Each item in the cart is represented as an object in an array with properties such as `name`, `price`, and `quantity`. Your task is to calculate the total cost of items in the cart and also list the names of all items in the cart for the user's review.

//Initial Data
const cart = [
  { name: "Laptop", price: 1000, qty: 1 },
  { name: "Phone", price: 500, qty: 2 },
  { name: "TV", price: 1500, qty: 1 },
  { name: "Headphones", price: 100, qty: 3 },
];
//Calculate the total cost of the items in the cart.

let totalCost = 0;
cart.forEach((item) => {
  // sum all the product prices
  totalCost += item.price * item.qty;
});
// console.log(totalCost);

//! List all the names of the products

let productNames = [];

cart.forEach((item) => {
  productNames.push(item.name);
});
// console.log(productNames);

//! Calculate the Total Number of Items

let totalItems = 0;
cart.forEach((item) => {
  totalItems += item.qty;
});

// console.log(totalItems);

//! =====================================
//? iterate through arrays using `map()`
//! =====================================

//Suppose we have an array of products in a shopping cart. Each object represents a product with a name and a price. We want to apply a 10% discount to all products.

//! Initial Data
const shoppingCart = [
  { name: "Laptop", price: 1000, qty: 1 },
  { name: "Phone", price: 500, qty: 2 },
  { name: "TV", price: 1500, qty: 1 },
  { name: "Headphones", price: 100, qty: 3 },
];

//! Add 105 discount

const discountCart = shoppingCart.map((product) => {
  return {
    name: product.name,
    price: product.price * 0.9,
  };
});
// console.log(discountCart);

//! get all the product names only

const productNamesOnly = shoppingCart.map((product) => {
  return {
    name: product.name,
    // price: product.price * 0.9,
  };
});

// console.log(productNamesOnly);
// console.log(shoppingCart);

//! =====================================
//? iterate through arrays using `filter()`
//! =====================================

//Filtering Active Users

const users = [
  {
    id: 1,
    isActive: false,
    name: "Bob",
  },
  {
    id: 2,
    isActive: true,
    name: "Emmanuel",
  },
  {
    id: 3,
    isActive: false,
    name: "Alice",
  },
];

//!filter out active users

const activeUsers = users.filter((user) => {
  return user.isActive === true;
});
// console.log(activeUsers);
// console.log(users);

//!Transactions Above a Certain Amount

const transactions = [
  { id: 1, amount: 50 },
  { id: 2, amount: 150 },
  { id: 3, amount: 200 },
];

//! filter out all amount above 100

const filterallamountabove100 = transactions.filter((params) => {
  return params.amount > 100;
});

// console.log(filterallamountabove100);

//! =====================================
//Transformation and Manipulation using `splice()`
//! =====================================

//Remove inactive users

const usersArr = [
  {
    id: 1,
    isActive: false,
    name: "Bob",
  },
  {
    id: 2,
    isActive: true,
    name: "Emmanuel",
  },
  {
    id: 3,
    isActive: true,
    name: "Alice",
  },
];

//! Remove inactive user
//! find the the index of the user to be removed

const indexToRemove = usersArr.findIndex((user) => {
  return user.id === 1 && !user.isActive;
});
// console.log(indexToRemove); // 0 MEANS USER FOUND , -1 means not found

//! use splice
if (indexToRemove !== -1) {
  usersArr.splice(indexToRemove, 1);
}
// console.log(usersArr);

// ------------------------

//! Managing playlist

//case study: You're developing a playlist feature for a music streaming app. Users can add and remove songs to their playlists. Each playlist is an array of song objects. You have to implement features that allow the user to delete a song, move a song up or down the playlist, and insert a song at a particular index.

//* solution

const playlist = [
  { id: "s1", title: "Song 1", artist: "Artist A" },
  { id: "s2", title: "Song 2", artist: "Artist B" },
  { id: "s3", title: "Song 3", artist: "Artist C" },
  { id: "s4", title: "Song 4", artist: "Artist D" },
];

//Remove song of id of s1

// const removesong = playlist.findIndex((song) => {
//   return song.id === "s1";
// });
// console.log(removesong); // 0 MEANS USER FOUND , -1 means not found

// if (removesong !== -1) {
//   playlist.splice(removesong, 1);
// }
// console.log(playlist);

//! Move a ong of id of s1 to third position

const indexToMove = playlist.findIndex((song) => {
  return song.id === "s1";
});
if (indexToMove != -1) {
  const [songTOmove] = playlist.splice(indexToMove, 1);
  playlist.splice(2, 0, songTOmove);
  // console.log(songTOmove);
}
// console.log(playlist);

//! insert new song

const newSong = { id: "s5", title: "Song 5", artist: "Artist E" };
playlist.splice(0, 0, newSong);

// console.log(playlist);

//! =====================================
//? Transformation and Manipulation using `concat()`
//! =====================================

//Concatenating Customer Records from Different Branches

const branch1Customers = [
  { id: 1, name: "Alice", branch: "North" },
  { id: 2, name: "Bob", branch: "North" },
];

const branch2Customers = [
  { id: 3, name: "Charlie", branch: "West" },
  { id: 4, name: "Diana", branch: "West" },
];

const allCustomers = branch1Customers.concat(branch2Customers);
// console.log(allCustomers);

//In this example, we'll be working with an e-commerce scenario where we have an array of items in a shopping cart and an array of new items that a user wants to add. We'll also have an array of promotional items that get added if certain conditions are met.

//Dummy data to work with

const currentCartItems = [
  {
    id: 1,
    name: "Laptop",
    price: 1000,
  },
  {
    id: 2,
    name: "Phone",
    price: 600,
  },
];

//New items to add to the cart

const newCartItems = [
  {
    id: 3,
    name: "Headphones",
    price: 150,
  },
  {
    id: 4,
    name: "Mouse",
    price: 20,
  },
];

//Promotional items

const promotionalItems = [
  {
    id: 5,
    name: "Stickers",
    price: 0,
  },
  {
    id: 6,
    name: "Keychain",
    price: 0,
  },
];

//!function to check if the cart total is above certain amount

const isCartTotalAbove = (cartItems, threshold) => {
  //calculate the total of the cartitems
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  return total > threshold;
};

//First, add the new items to the current cart

const updatedCart = currentCartItems.concat(newCartItems);

// console.log(updatedCart);

//! Check if the cart total is above $1000 to add a promotional item

// if (isCartTotalAbove(updatedCart, 9000)) {
//   //concate a promotional item to the updated cart
//   const finalCart = updatedCart.concat(promotionalItems[0]);
//   console.log("Final cart", finalCart);
// } else {
//   console.log("updated cart", updatedCart);
// }

//! =====================================
//? Object.assign()
//! =====================================

//! updating properties of students in a class
const studentsArr = [
  { id: 1, name: "Alice", grade: "A" },
  { id: 2, name: "Bob", grade: "B" },
];

//! Grade updates

const gradeUpdates = [{ grade: "A+" }, { grade: "A-" }];

//! Update the students
const updatedStudents = studentsArr.map((student, index) => {
  return Object.assign({}, student, gradeUpdates[index]);
});

// console.log(updatedStudents);

//! =====================================
//? Search and Filter using `find()`
//! =====================================

//! Finding the First Patient with a Specific Ailment in a Hospital Database
const patients = [
  { id: 101, name: "Sarah", disease: "Cold" },
  { id: 102, name: "Mike", disease: "Fever" },
  { id: 103, name: "Lucy", disease: "Cold" },
];

//! Patient with cold

const patienyWithCold = patients.find((patient) => {
  return patient.disease === "Cold";
});

// console.log(patienyWithCold);

//! =====================================
//? Search and Filter using `some()`
//! =====================================

const patients2 = [
  { id: 101, name: "Sarah", disease: "Cold" },
  { id: 102, name: "Mike", disease: "Fever" },
  { id: 103, name: "Lucy", disease: "Cold" },
];

//! Patient with cold
const patienyWithCold2 = patients.some((patient) => {
  return patient.disease === "Cold";
});

// console.log(patienyWithCold2);
// console.log(patienyWithCold);

//! =====================================
//? Search and Filter using `every()`
//! =====================================

//Confirming All Students Passed Their Exam

const masynctechStudents = [
  { id: 1, name: "Bob", grade: "A" },
  { id: 2, name: "Alice", grade: "A" },
  { id: 3, name: "Emma", grade: "A" },
];

const allPassed = masynctechStudents.every((student) => {
  return student.grade === "A";
});

// console.log(allPassed); // TRUE
