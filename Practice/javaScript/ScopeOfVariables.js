// Local and Global Variables in JavaScript

// Global Variable (Declared outside any function, accessible anywhere)
let globalVar = "I am a Global Variable";

function displayGlobalVar() {
  console.log(globalVar); // Accessible here
}
displayGlobalVar();

// Local Variable (Declared inside a function, accessible only within the function)
function localVariableExample() {
  let localVar = "I am a Local Variable";
  console.log(localVar); // Accessible here
}
localVariableExample();

// console.log(localVar); // Error: localVar is not defined (Outside the function)

// Variable Shadowing (Local variable overrides the global variable with the same name)
let name = "Global John";
function showName() {
  let name = "Local John";
  console.log("Inside Function:", name); // Local variable takes precedence
}
showName();
console.log("Outside Function:", name); // Global variable remains unchanged

// Default Values in JavaScript Functions

// Example 1: Using Default Parameters
function greetUser(userName = "Guest") {
  console.log(`Hello, ${userName}!`);
}
greetUser("Alice"); // Output: Hello, Alice!
greetUser(); // Output: Hello, Guest!

// Example 2: Using Expressions as Default Values
function calculatePrice(price, tax = price * 0.1) {
  console.log(`Total Price: ${price + tax}`);
}
calculatePrice(100); // Output: Total Price: 110
calculatePrice(200, 30); // Output: Total Price: 230 (Override default tax)

// Example 3: Using Functions as Default Values
function logMessage(message = getDefaultMessage()) {
  console.log(message);
}
function getDefaultMessage() {
  return "This is the default message.";
}
logMessage(); // Output: This is the default message.
logMessage("Custom Message"); // Output: Custom Message
