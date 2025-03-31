// ==============================
// Arrays in JavaScript
// ==============================

// 1. Creating Arrays using Array Literal (Most Common)
let fruits = ["Apple", "Banana", "Mango", "Orange"]; 
// Array is a collection of items stored in a single variable
console.log("Fruits Array:", fruits);

// 2. Creating Arrays using Array Constructor
let colors = new Array("Red", "Green", "Blue"); 
// Using the Array constructor (less commonly used)
console.log("Colors Array:", colors);

// 3. Creating an Empty Array
let emptyArray = []; 
// This array is empty and can be filled later
console.log("Empty Array:", emptyArray);

// 4. Mixed Data Types in Array
let mixedArray = ["John", 25, true, { city: "New York" }, [1, 2, 3]]; 
// Arrays in JavaScript can contain multiple data types
console.log("Mixed Array:", mixedArray);

// =============================================
// Fetching Elements from an Array
// =============================================

// 1. Accessing Elements Using Index (Zero-Based Indexing)
console.log("First Fruit:", fruits[0]); // Output: Apple
console.log("Third Fruit:", fruits[2]); // Output: Mango
console.log("Last Fruit:", fruits[fruits.length - 1]); // Output: Orange
// Arrays are zero-indexed, meaning the first element is at index 0

// Accessing Out of Bound Index
console.log("Invalid Index:", fruits[10]); // Output: undefined

// 2. Updating Array Elements Using Index
fruits[1] = "Pineapple"; 
// Modifies Banana to Pineapple
console.log("Updated Fruits:", fruits);

// =============================================
// Iterating Over Arrays
// =============================================

// 1. Using for Loop
console.log("Using for Loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}
// Best used when you need index-based control

// 2. Using for...of Loop (Simpler for Arrays)
console.log("Using for...of Loop:");
for (let fruit of fruits) {
  console.log(fruit);
}
// Recommended for direct value access without needing the index

// 3. Using forEach Method (Functional Approach)
console.log("Using forEach:");
fruits.forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}`);
});
// Provides a cleaner functional approach with index access

// =============================================
// Destructuring Arrays (Extract Values Easily)
// =============================================

let [firstFruit, secondFruit, ...remainingFruits] = fruits;
// Destructuring allows quick extraction of values into variables
console.log("First Fruit:", firstFruit); // Output: Apple
console.log("Second Fruit:", secondFruit); // Output: Pineapple
console.log("Remaining Fruits:", remainingFruits); // Output: ['Mango', 'Orange']

// =============================================
// Additional Notes:
// =============================================
// - Arrays are dynamic, meaning their size can change during runtime
// - Arrays can store mixed data types including numbers, strings, objects, and other arrays
// - Accessing a non-existent index returns `undefined`
// - JavaScript does not support negative indexing directly

// Example of Adding Elements
fruits.push("Grapes"); // Adds to the end
console.log("After Push:", fruits);

fruits.unshift("Strawberry"); // Adds to the beginning
console.log("After Unshift:", fruits);

// Example of Removing Elements
fruits.pop(); // Removes last element
console.log("After Pop:", fruits);

fruits.shift(); // Removes first element
console.log("After Shift:", fruits);
