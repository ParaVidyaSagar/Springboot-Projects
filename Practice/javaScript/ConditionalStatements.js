// Conditional Statements in JavaScript

let a = 10;
let b = 20;

// 1. if Statement
if (a < b) {
  console.log("a is less than b"); // This will print
}

// 2. if-else Statement
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is not greater than b"); // This will print
}

// 3. if-else if-else Statement
let num = 0;
if (num > 0) {
  console.log("Positive Number");
} else if (num < 0) {
  console.log("Negative Number");
} else {
  console.log("It's Zero"); // This will print
}

// 4. Nested if Statement
let age = 25;
let hasLicense = true;
if (age >= 18) {
  if (hasLicense) {
    console.log("You can drive!");
  } else {
    console.log("Get your driving license first.");
  }
} else {
  console.log("You are underaged.");
}

// 5. Ternary Operator (Short form of if-else)
let isMember = true;
let discount = isMember ? "20% Discount" : "No Discount";
console.log(discount); // Output: 20% Discount

// 6. Switch Statement
let day = "Tuesday";
switch (day) {
  case "Monday":
    console.log("Start of the week.");
    break;
  case "Tuesday":
    console.log("It's Tuesday!"); // This will print
    break;
  case "Friday":
    console.log("Weekend is near.");
    break;
  default:
    console.log("Enjoy your day!");
}
