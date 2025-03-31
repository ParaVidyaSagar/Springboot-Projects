// ==========================================
// Different Types of Data in JavaScript Arrays
// ==========================================

// 1. String Array
let stringArray = ["Apple", "Banana", "Mango", "Orange"]; 
// An array containing only string values
console.log("String Array:", stringArray);

// 2. Number Array
let numberArray = [10, 20, 30, 40, 50]; 
// An array containing numeric values
console.log("Number Array:", numberArray);

// 3. Boolean Array
let booleanArray = [true, false, true, false]; 
// An array of Boolean values (true/false)
console.log("Boolean Array:", booleanArray);

// 4. Mixed Data Type Array
let mixedArray = ["John", 28, true, null, undefined, { city: "New York" }, [1, 2, 3]];
// Arrays in JavaScript can hold mixed data types including:
// - Strings
// - Numbers
// - Booleans
// - Null and Undefined
// - Objects
// - Arrays (Nested Arrays)
console.log("Mixed Data Type Array:", mixedArray);

// 5. Object Array
let personArray = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Alex", age: 28 }
];
// An array of objects, often used for managing data in applications
console.log("Object Array:", personArray);

// 6. Nested Array (Multidimensional Array)
let matrix = [
  [1, 2, 3], 
  [4, 5, 6], 
  [7, 8, 9]
];
// A two-dimensional array representing a matrix
console.log("Matrix (2D Array):", matrix);
console.log("Access Element (2,1):", matrix[1][0]); // Accessing element 4

// 7. Function Inside an Array
let functionArray = [
  function() { return "Hello"; },
  function(a, b) { return a + b; }
];
// Arrays can store functions (First-Class Functions)
console.log("Function Result 1:", functionArray[0]()); // Output: Hello
console.log("Function Result 2:", functionArray[1](5, 10)); // Output: 15

// 8. Special Values in Array
let specialValuesArray = [null, undefined, NaN, Infinity, -Infinity];
// Special values like null, undefined, NaN (Not a Number), Infinity, and -Infinity
console.log("Special Values Array:", specialValuesArray);

// ==========================================
// Conclusion:
// ==========================================
// JavaScript Arrays can store:
// 1. Strings
// 2. Numbers
// 3. Booleans
// 4. Objects
// 5. Functions
// 6. Nested Arrays (Multidimensional)
// 7. Special Values like null, undefined, NaN, Infinity
// Arrays are dynamic and can store different types of data in a single array.
