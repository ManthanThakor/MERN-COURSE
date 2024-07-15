//?  let's create a complex example that demonstrates the use of `insertBefore` to manage a list of students based on their grades. In this example, we'll keep the list sorted based on the grade of each student. As new students are added, they will be inserted in the correct position to maintain the sorted list.

//! Function to add a new student

function addstudent(name, grade) {
  //! Create a new div element to hold the student info

  const studentEl = document.createElement("div");
  // console.log(studentEl);

  //! add css to it

  studentEl.className = "student";
  // console.log(studentEl);

  //!Create a text node containing the student name and grade

  const studentTextNode = document.createTextNode(`${name}: ${grade}`);
  // console.log(studentTextNode);

  //! Append the text node to the div element

  studentEl.appendChild(studentTextNode);
  // console.log(studentEl);

  //! select the container

  const containerEl = document.getElementById("studentList");
  // console.log(containerEl);
  let beforeNode = null;

  //! find the correct position for the new student
  const studentsEl = document.querySelectorAll(".student");
  // console.log(studentsEl);

  //! Loop through existing students to find the correct position for the new student
  for (const child of containerEl.children) {
    const childGrade = parseInt(child.textContent.split(":")[1]);
    if (grade < childGrade) {
      beforeNode = child;
      break;
    }
  }
  //! insert the new student in the correct position
  containerEl.insertBefore(studentEl, beforeNode);
  // console.log(containerEl.children);
}
addstudent("Alice", 90);
addstudent("Ben", 70);
addstudent("X", 80);
