const url = "https://jsonplaceholder.typicode.com/posts";

// Create a new instance of XMLHttpRequest
const xhr = new XMLHttpRequest();

// Configure the request
xhr.open("GET", url, true);

// Attach an event listener to handle changes in the request state
xhr.onreadystatechange = function () {
  // Check if the request is complete (readyState 4) and successful (status 200)
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Parse the JSON data
    const posts = JSON.parse(xhr.responseText);
    displayPosts(posts);
  }
  // Handle errors
  if (xhr.readyState === 4 && xhr.status !== 200) {
    console.log(xhr.statusText);
  }
};

// Send the request
xhr.send();

function displayPosts(posts) {
  const postsContainer = document.getElementById("posts");
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    const postTitle = document.createElement("h2");
    postTitle.classList.add("post-title");
    postTitle.textContent = post.title;

    const postBody = document.createElement("p");
    postBody.classList.add("post-body");
    postBody.textContent = post.body;

    postElement.appendChild(postTitle);
    postElement.appendChild(postBody);
    postsContainer.appendChild(postElement);
  });
}
