// Loops in JavaScript

// 1. For Loop - Executes a block of code a specified number of times
console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
  console.log(i); // Prints numbers from 1 to 5
}

// 2. While Loop - Repeats as long as the condition is true
console.log("While Loop:");
let count = 1;
while (count <= 5) {
  console.log(count); // Prints numbers from 1 to 5
  count++;
}

// 3. Do-While Loop - Executes at least once, then checks the condition
console.log("Do-While Loop:");
let num = 1;
do {
  console.log(num); // Prints numbers from 1 to 5
  num++;
} while (num <= 5);

// 4. For...In Loop - Iterates over object properties
console.log("For...In Loop:");
let person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
  console.log(`${key}: ${person[key]}`); // Prints each property and its value
}

// 5. For...Of Loop - Iterates over iterable objects (like arrays)
console.log("For...Of Loop:");
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
  console.log(color); // Prints each color
}

// 6. Break Statement - Stops the loop when the condition is met
console.log("Break Example:");
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    console.log("Loop Stopped at 6");
    break; // Exits the loop
  }
  console.log(i);
}

// 7. Continue Statement - Skips the current iteration
console.log("Continue Example:");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping 3");
    continue; // Skips the current iteration
  }
  console.log(i);
}
