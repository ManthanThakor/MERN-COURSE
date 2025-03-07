//---------
// ! ==SINGLE, DOUBLE AND CONSTRUCTOR===
//----------

//Single quotes
const singleQuoteString = "This is a string using single quoutes";

//double quotes
const doubleQuoteString = "This is a string using double quoutes";

//Using the string constructor
const stringConstructor = new String(
  "This is a string using the string constructor quoutes"
);

//---------
//! ==TEMPLATE LITERALS===
//----------

//Basic usage
const greeting = `Hello, world`;
console.log(greeting);

//String interploation
const username = "rock";
const welcomeMessage = `Hello, ${username}! welcome to our website`;

const howaU = `HOW ARE YOU? , EVERYTHING IS FINE ?`;
const himess = `yo , ${(username, welcomeMessage)} , ${howaU} `;
console.log(himess);

//Multiline-string
const poem = `
Roses are red,
violets are blue,
Sugar is sweet,
And so are you?
`;
console.log(poem);

//Expression evaluation
const price = 10;
const tax = 0.05;
const total = `The price: ${price * (1 + tax)}`;
const meee = `This is the total Price ${total}`;
console.log(`Hi , ${meee} !`);
console.log(" ");

//Escaping backtics
const stringWithBacktick = `He's a backtick \``;
console.log(stringWithBacktick);
console.log(" ");

//---------
//! ==ESCAPING CHARACTERS IN STRINGS===
//----------

//Using backslahes before escaping
const quote = 'He said, "Hello, world"';
console.log(quote);
console.log(" ");

//NewLines and Tabs

const multiline = "Line 1\nLine 2\tTabbed";
console.log(multiline);
console.log(" ");

//Escaping backslashes
const filePath = "c:\\Program files\\App";
console.log(filePath);
console.log(" ");

//Using the Template literals
const anotherQuote = `He said, "That's \tawesome"`;
console.log(anotherQuote);
console.log(" ");

//Unicode characters
const heart = "I \u2764 Javascript";
console.log(heart);
console.log(" ");

// Escape Sequence for a Dollar Sign and Curly Braces in Template Literals
const metaString = `The syntax for variable is \${variableName}`;
console.log(metaString);
console.log(" ");

//---------
//! ==STRING CONCATENATION===
//----------

//using the + operator

const fname = "MANTHAN";
const lname = "THAKOR";
const fullname = fname + " " + lname;
console.log(`hello , this is using the + operator: ${fullname}`);
console.log(" ");

//using the .concat() method
const str1 = "Hello";
const str2 = "World";
const combinedString = str1.concat(" ", str2);
console.log(`hello , this is using the.concat() method: ${combinedString}`);
console.log(" ");

//Template literal
const fruit = "apple";
const color = "red";

const sentence = `The ${fruit} is  ${color}`;
console.log(`this is the use of Template literal: ${sentence}`);
console.log(" ");

//---------
//! ==ToLOWER AND ToUPPER CASE===
//----------

//toUpperCase()
const localCaseStr = "Hello, world";
const result1 = localCaseStr.toUpperCase();
const res = `Hello, world in uppercase: ${result1}`;
console.log(res);
console.log(" ");

//toLowerCase()
const upperCaseStr = "HELLO, WORLD";
const result2 = upperCaseStr.toLowerCase();
const ress = `Hello, world in lowercase: ${result2}`;
console.log(ress);
console.log(" ");

//Mixing both methods
const mixStr = "HeLLo, WoRLD";
const result11 = mixStr.toLocaleLowerCase();
const result22 = mixStr.toUpperCase();
console.log(`lowercase : ${result11} , toUpperCase: ${result22}`);
console.log(" ");

//case-insensitive comparison
const string1 = "Javascript";
const string2 = "javascript";

if (string1.toLocaleLowerCase === string2.toLocaleLowerCase) {
  console.log("Both strings are equal (case-insensitive)");
} else {
  console.log("Both strings are not equal (case-insensitive)");
}
console.log(" ");

//Note on non-english characters
const accentedStr = 'áéíóú"';

const accentedStrres = accentedStr.toLocaleUpperCase();
console.log(`Accented string in uppercase: ${accentedStrres}`);
console.log(" ");

//---------
//! ==STRING LENGTH===
//----------

//Find the length of a string
const myStr = "Hello, world";
const strLenght = myStr.length;
console.log(strLenght);
console.log(" ");

//Check for empty string
const emptyStr = "";
const emptyStrLenght = emptyStr.length;
console.log(`${emptyStrLenght}`);
console.log(" ");

//string validation
const username1 = "Emma";
const usernameee =
  username1.length >= 6
    ? console.log(`valid username: ${username1}`)
    : console.log(`invalid username: ${username1}`);
console.log(" ");

const username2 = "Manthu";
if (username2.length >= 7) {
  console.log("Valid username");
} else {
  console.log("Invalid user, Must be at least 7 characters");
}
console.log(" ");

//---------
//! ==STRING SLICE===
//----------

//Basic use
const greeting1 = "Hello, world";
const extractedword = greeting1.slice(7);
console.log(`omitting the end index: ${extractedword}`);
console.log(" ");

//omitting the end index
const text = "Hello, world";
const resul = text.slice(7, 9);
console.log(`omitting the end index: ${resul}`);
console.log(" ");

//using negative indices
const phrase = "Hello, world";
const endingText = phrase.slice(-7);
console.log(`using negative indices: ${endingText}`);
console.log(" ");

//slicing between negative indices
const sentence2 = "Hello, world";
const result3 = sentence2.slice(-6, -1);
console.log(`slicing between negative indices: ${result3}`);
console.log(" ");

//---------
//! ==STRING SPLIT===
//----------

//Simple split by space
const mySentence = "Hello, world";
const words = mySentence.split(",");
console.log(words);
console.log(" ");

//Limit number od split
const fruits = "apple,banana,pear";
const limitedfruits = fruits.split(",", 2);
console.log(limitedfruits);
console.log(" ");

//Split by multiple characters
const darkness = "devil:evil;dark?fire";
const maindarkness = darkness.split(/[:;?]/); // ! more important for complex text
console.log(maindarkness);
console.log(" ");

//split into characters
const word = "Emmanuel";
const letters = word.split("");
console.log(letters);
console.log(" ");

//---------
// ! ==STRING INDEXOF===
//----------

//? string.indexOf(searchValue, start);

//Basic usage
const sentences = "Hello, world";
const index = sentences.indexOf("world");
console.log(index);
console.log(" ");

let textt = "Hello, world!";
let indexx = textt.indexOf("World");
console.log(indexx); //! -1 (because "World" is not the same as "world")
console.log(" ");

let tex = "Hello, world! Hello again!";
let inde = tex.indexOf("Hello", 5);
console.log(inde); // 14 (the second "Hello" starts at index 14)
console.log(" ");

//---------
//! ==STRING TRIM===
//----------

//Trimming user input
const userInput = "   emma@gmail.com   ";
const emailTrimmed = userInput.trim();
console.log(emailTrimmed);
console.log(" ");

//Removing Line Breaks
const stringsWithBreaks = `\n\t Hello, World`;
const cleanString = stringsWithBreaks.trim();
console.log(cleanString);
console.log(" ");

//---------
//! ==STRING REPLACEMENT===
//----------

//Basic usage
const originalText = "This is an old text.";
const updatedText = originalText.replace("old", "new");
console.log(updatedText);
console.log(" ");

//Replace all occurances
const repititiveText = "old text with old words";
const replaceAll = repititiveText.replace(/old/g, "new");
console.log(replaceAll);
console.log(" ");

//! g flag replace multiple occurances

// Replacing with Regular Expressions:

let str = "Apples are round, and apples are juicy.";
let newStr = str.replace(/apples/gi, "oranges");

console.log(newStr); // Output: "Oranges are round, and oranges are juicy."
console.log(" ");

// ! Here, /apples/gi is a regular expression that replaces all occurrences of "apples" (case insensitive due to the i flag) with "oranges" in the string str.

// Using a Function for Replacement:

function capitalize(match) {
  return match.toUpperCase();
}

let strr = "hello, world!";
let newStrr = strr.replace(/hello/g, capitalize);

console.log(newStrr); // Output: "HELLO, world!"
console.log(" ");

//---------
//! == STRING LASTINDEXOF ===
//----------

//Basic usage
const myText = "apple organe, apple, banana";
const lastIndx = myText.lastIndexOf("apple");
console.log(lastIndx);
console.log(" ");

//Specifying the from index
let sr = "Hello, world Welcome to the world of JavaScript.";
let inex = sr.lastIndexOf("world", 7);
console.log(inex); //
console.log(" ");

//---------
//! ==STRING INCLUDES===
//----------

//Basic usage
const myText2 = "I have an apple";
const youtext = myText2.includes("apple");
console.log(`STRING INCLUDES : ${youtext}`); // true
console.log(" ");

//Checking for a character
const resu = myText2.includes("I");
console.log(`STRING INCLUDES : ${resu}`); // true
console.log(" ");

//Specifying specific position
const result = myText2.includes("apple", 8);
console.log(`STRING INCLUDES : ${result}`); // false
console.log(" ");

//---------
//! ==STRING CONVERSION===
//----------

//Converting a number to a string;
const num = 42;
console.log(typeof num);
console.log(" ");

const strNum = String(num);
console.log(strNum);
console.log(" ");

console.log(typeof strNum);
console.log(" ");

//Converting a boolean to a string;
const boolVal = true;
const strBool = String(boolVal);
console.log(`Converting a boolean to a string: ${strBool}`);
console.log(" ");

console.log(
  `The data type after converting the boolean to a string is ${typeof strBool}.`
);

console.log(" ");

//Converting  an array to a string;

const arr = [1, 2, 3];
console.log(`type of array : ${typeof arr}`);
console.log(" ");

const strarr = String(arr);
console.log(
  `The data type after Converting  an array to a string is ${typeof strarr}`
);
console.log(" ");

//Converting  object to a string;

const obj = { name: "Emma", age: 25 };
console.log(`Converting  object to a string: ${typeof String(obj)}`);
console.log(" ");

//Converting  null and undefined to a string;

const str1Undefined = String(undefined);
console.log(typeof str1Undefined);
console.log(" ");

const str1Null = String(null);
console.log(typeof str1Null);
console.log(" ");

//---------
//! == .toString() ===
//----------

//Convert number to string
const num1 = 25;
const strNum1 = num1.toString();
console.log(typeof strNum1);
console.log(" ");

//Convert boolean to string
const boolVal2 = false;
console.log(typeof boolVal2.toString());
console.log(" ");

//---------
//! == STRING TO NUMBER ===
//----------

//Converting Pixel Value to Number with parseInt()

const pixelvalueAsString = "42px";
console.log(typeof pixelvalueAsString);
const convertedVals = parseInt(pixelvalueAsString);
console.log(" ");

console.log(`${convertedVals + 10}px`);
console.log(typeof convertedVals);
console.log(" ");

// Example 2: Converting Dimension String to Number with parseFloat()

const dimensionStr = "42.5px";
const convertedVal1 = parseFloat(dimensionStr);
console.log(typeof convertedVal1);
console.log(" ");

// Example 3: Converting Age Input to Number using Number()

const ageInput = "422";
const convertedVal3 = Number(ageInput);
console.log(typeof convertedVal3);
console.log(" ");
console.log(convertedVal3 + 1000000);
console.log(" ");

// Example 4: Quick Conversion using Unary + Operator

const scoreStr = "100";
const convertedVal4 = +scoreStr;
console.log(convertedVal4 + 200);
console.log(" ");

//-------
//! String to Boolean
//-------

// Example 1: Using Boolean() for Form Validation

const usernameInput = "Thomas";
const convertedVal5 = Boolean(usernameInput);
console.log(convertedVal5);
console.log(" ");

// Example 2: Using Boolean() with Empty String

const emptyField = "";
const convertedVal6 = Boolean(emptyField);
console.log(convertedVal6);
console.log(" ");

// Example 3: Using Double Negation !! for Quick Conversion

const emailInput = "emma@gmail.com";
const convertedVal = !!emailInput;
console.log(convertedVal);
console.log(" ");
