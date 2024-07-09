//-----SWITCH STATEMENT----
//Case study 1:
//Suppose you are building a calendar application and you need to display the day of the week based on the number provided (0-6, Sunday-Saturday).

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName); // Output: Tuesday

// Practical Example: Displaying a Message Based on User Role

let role = "admin";
let message;

switch (role) {
  case "admin":
    message = "Welcome, Admin! You have full access.";
    break;
  case "editor":
    message = "Welcome, Editor! You can edit content.";
    break;
  case "viewer":
    message = "Welcome, Viewer! You can view content.";
    break;
  default:
    message = "Invalid role";
}

console.log(message); // Output: Welcome, Admin! You have full access.
