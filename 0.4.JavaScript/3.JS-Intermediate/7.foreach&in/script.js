//!=========================
// ! forEach
//!=========================

// The forEach method is used to execute a provided function once for each array element.

const array = [1, 2, 3, 4, 5];

array.forEach((element, index) => {
  //   console.log(`Index: ${index}, Element: ${element}`);
});

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = [];

numbers.forEach((number) => {
  doubledNumbers.push(number * 2);
});

// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

const prices = [5, 10, 15, 20];
let total = 0;

prices.forEach((price) => {
  totall = total + price;
});
// console.log(`Total: $${totall}`); // Output: Total: $50

//!=========================
// ! for...in
//!=========================

// The for...in statement iterates over the enumerable properties of an object (including inherited properties).

const object = {
  name: "John",
  age: 30,
  occupation: "Developer",
};

for (let key in object) {
  if (object.hasOwnProperty(key)) {
    // Optional: filters out properties from the prototype chain
    // console.log(`Key: ${key}, Value: ${object[key]}`);
  }
}

const person = {
  firstName: "Alice",
  lastName: "Smith",
  age: 28,
};

for (let key in person) {
  //   console.log(`${key}: ${person[key]}`);
}

// Output:
// firstName: Alice
// lastName: Smith
// age: 28

const settings = {
  theme: "dark",
  notifications: true,
  autoSave: false,
};

for (let key in settings) {
  if (settings[key]) {
    // console.log(`${key} is enabled.`);
  } else {
    // console.log(`${key} is disabled.`);
  }
}

// Output:
// theme is enabled.
// notifications is enabled.
// autoSave is disabled.
