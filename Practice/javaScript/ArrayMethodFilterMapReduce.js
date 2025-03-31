// ==========================================
// Array Methods: filter(), map(), and reduce()
// ==========================================

// ✅ These methods are commonly used for data manipulation in JavaScript.
// ✅ They are part of functional programming concepts, working with arrays in a clean and efficient way.

const numbers = [5, 10, 15, 20, 25, 30];
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 20 },
  { name: "Alex", age: 30 },
  { name: "Chris", age: 17 }
];

// ==========================================
// 1. filter() Method
// ==========================================
// ✅ `filter()` creates a new array containing elements that pass a given condition.
// ✅ It does not modify the original array.

console.log("Original Numbers:", numbers);

// Example 1: Filtering numbers greater than 15
const greaterThan15 = numbers.filter(num => num > 15);
console.log("Numbers Greater Than 15:", greaterThan15); // Output: [20, 25, 30]

// Example 2: Filtering users with age 18 or above
const adults = users.filter(user => user.age >= 18);
console.log("Adult Users:", adults);
// ✅ Output: 
// [{ name: "John", age: 25 }, { name: "Jane", age: 20 }, { name: "Alex", age: 30 }]

// ==========================================
// 2. map() Method
// ==========================================
// ✅ `map()` creates a new array by applying a function to each element.
// ✅ It is commonly used to transform data without modifying the original array.

console.log("\nUsing map to Transform Data:");

// Example 1: Doubling each number
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers); // Output: [10, 20, 30, 40, 50, 60]

// Example 2: Extracting names from users
const userNames = users.map(user => user.name);
console.log("User Names:", userNames); // Output: ['John', 'Jane', 'Alex', 'Chris']

// Example 3: Adding a new property to objects
const usersWithStatus = users.map(user => ({
  ...user,
  status: user.age >= 18 ? "Adult" : "Minor"
}));
console.log("Users with Status:", usersWithStatus);
// ✅ Output:
// [
//   { name: "John", age: 25, status: "Adult" },
//   { name: "Jane", age: 20, status: "Adult" },
//   { name: "Alex", age: 30, status: "Adult" },
//   { name: "Chris", age: 17, status: "Minor" }
// ]

// ==========================================
// 3. reduce() Method
// ==========================================
// ✅ `reduce()` reduces an array to a single value (e.g., sum, product, or concatenated string).
// ✅ It takes a callback with two arguments: 
// - accumulator (acc): stores the result of previous operations
// - current value (curr): current element being processed

console.log("\nUsing reduce to Calculate Values:");

// Example 1: Sum of all numbers
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of Numbers:", sum); // Output: 105

// Example 2: Finding the Maximum Number
const maxNumber = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), numbers[0]);
console.log("Maximum Number:", maxNumber); // Output: 30

// Example 3: Concatenating all usernames
const concatenatedNames = users.reduce((acc, user) => acc + user.name + " ", "");
console.log("Concatenated Names:", concatenatedNames.trim()); // Output: John Jane Alex Chris

// ==========================================
// Conclusion:
// ==========================================
// - **filter()**: Extracts elements that meet a condition (e.g., filtering numbers or users).
// - **map()**: Transforms data, returning a new array (e.g., double numbers or add properties).
// - **reduce()**: Performs cumulative operations, reducing data to a single value (e.g., sum, max, concatenation).
// - These methods are useful for clean and functional coding practices in JavaScript.
