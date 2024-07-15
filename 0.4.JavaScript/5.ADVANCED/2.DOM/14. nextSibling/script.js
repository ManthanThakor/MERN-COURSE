//! Get the container element

const containerEl = document.getElementById("container");
// console.log(containerEl);

//! Get all buttons within the container

const buttonsEl = document.querySelectorAll("button");
// console.log(buttonsEl);

//! Loop through each button and change the text of its next sibling

buttonsEl.forEach((button) => {
  const nextel = button.nextSibling;
  //? check if next sibling is element node
  // console.log(nextel);
  if (nextel && nextel.nodeType === 3) {
    nextel.textContent = "Changed Text";
  }
});
