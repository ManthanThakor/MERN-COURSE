//--------------------------
console.log("");

//---Else stament----
///case 1:
//Suppose you're developing a website and you want to personalize a message for users based on whether they're logged in or not:

let isLoggedIn = false;

if (isLoggedIn) {
  console.log("Welcome back, user");
} else {
  console.log("Welcome guest, please login");
}

//--------------------------
console.log("");

//case 2;
//Imagine you're designing an online voting system. In this system, users can only vote if they're registered. Here's how you might use an if-else statement to check a user's status:

let isRegistered = true;
if (isRegistered) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible, please register");
}

//--------------------------
console.log("");

//-----ELSE IF STATEMENT----
//Case study 1
//Let's consider a traffic light system where you want to tell a driver what to do based on the color of the traffic light. Here's how you might use an else if statement for this purpose:

let trafficlight = "green";
if (trafficlight === "red") {
  console.log("Stop");
} else if (trafficlight === "yellow") {
  console.log("Prepare to stop");
} else if (trafficlight === "green") {
  console.log("Go");
} else {
  console.log("Invalid traffic");
}
