//!Named function for alert

function showAlert() {
  console.log("Hello");
}

//!getting the button element

const alertbtn = document.getElementById("alertButton");
// console.log(alertbtn);

//!Add addEventListener  to the element

alertbtn.addEventListener("click", showAlert);

//!Named function for  removing event

function removeAlert() {
  alertbtn.removeEventListener("click", showAlert);
}

//!getting the remove button element

const removebtn = document.getElementById("removeButton");
// console.log(removebtn);
removebtn.addEventListener("click", removeAlert);
