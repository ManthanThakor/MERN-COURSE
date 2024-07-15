//! select buttons

const button1el = document.getElementById("button1");
console.log(button1el);

const button2el = document.getElementById("button2");
console.log(button2el);

//! use previousSibling to get the preceeding paragraph element

const text1El = button1el.previousSibling;
// console.log(text1El);

const text2El = button2el.previousSibling;
// console.log(text2El);

//! change the text content of the preceeding paragraph

if (text1El.nodeType === 3) {
  text1El.textContent = "Text 1 has been updated";
}

if (text2El.nodeType === 3) {
  text2El.textContent = "Text 2 has been changed";
}
