// ! Fetch the element with id="parent"

const parentEl = document.querySelector("#parent");
// console.log(parentEl.childNodes);

parentEl.childNodes.forEach((node) => {
  //   return console.log(node);
});

//!  Fetch all child element nodes of the parent element

console.log(parentEl.children);

// Convert the HTMLCollection to an array

const convertedHTMLCollection = Array.from(parentEl.children);

convertedHTMLCollection.forEach((el) => {
  //   return console.log(el);
});
