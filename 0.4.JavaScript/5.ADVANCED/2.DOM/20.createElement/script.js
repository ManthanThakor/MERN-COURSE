//! Function to create a new task

function createTask(newTask) {
  //! Create a new div element to hold the task

  const taskEl = document.createElement("div");
  // console.log(taskEl);

  //!add new css to the created element

  //   taskEl.setAttribute("class", "task");
  taskEl.className = "task";
  // console.log(taskEl);

  //!Create a text node containing the task text

  const taskTextNodeEl = document.createTextNode(newTask);
  // console.log(taskTextNodeEl);
  // console.log(taskEl);

  //!Append the text node to the div element

  taskEl.appendChild(taskTextNodeEl);

  //!Finally, append the task to the container div

  document.getElementById("container").appendChild(taskEl);
  // console.log(taskTextNodeEl);
  console.log(taskEl);
}
createTask("Programming");
createTask("Driving");
createTask("Reading");
createTask("Typing");
