//! Using textContent to update the blog title
const blogt = document.getElementById("title");
// console.log(blogt);
blogt.textContent = "New Blog Title";

//! change the background

blogt.style.background = "blue";
blogt.style.color = "white";
blogt.style.textAlign = "center";

//! Using innerHTML to add another paragraph with some HTML content

const paragraphel = document.getElementById("paragraph");
console.log(paragraphel);
paragraphel.innerHTML = "<h1>I have changed the paragraph</h1>";
paragraphel.innerHTML +=
  "<br><strong> This is new Paragraph text </strong></br>";

//! Using innerText to modify the comment section (assume the original comment is visible)

const firstCommentEl = document
  .getElementById("comment1")
  .querySelector(".commentText");

firstCommentEl.innerText = "This is a new comment";
