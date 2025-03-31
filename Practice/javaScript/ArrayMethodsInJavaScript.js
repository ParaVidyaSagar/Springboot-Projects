// ==========================================
// Array Methods in JavaScript
// ==========================================

// Sample Array for Demonstration
let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
console.log("Original Array:", fruits);

// ==========================================
// 1. Adding and Removing Elements
// ==========================================

// push() - Adds element to the end
fruits.push("Grapes");
console.log("After Push:", fruits); // Output: ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple', 'Grapes']

// pop() - Removes element from the end
let removedFruit = fruits.pop();
console.log("After Pop:", fruits); // Output: ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple']
console.log("Removed Fruit:", removedFruit); // Output: Grapes

// unshift() - Adds element to the beginning
fruits.unshift("Strawberry");
console.log("After Unshift:", fruits); // Output: ['Strawberry', 'Apple', 'Banana', 'Mango', 'Orange', 'Pineapple']

// shift() - Removes element from the beginning
let shiftedFruit = fruits.shift();
console.log("After Shift:", fruits); // Output: ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple']
console.log("Shifted Fruit:", shiftedFruit); // Output: Strawberry

// ==========================================
// 2. Accessing and Finding Elements
// ==========================================

// indexOf() - Finds the index of an element
console.log("Index of Mango:", fruits.indexOf("Mango")); // Output: 2

// includes() - Checks if an element exists in the array
console.log("Includes Banana:", fruits.includes("Banana")); // Output: true
console.log("Includes Guava:", fruits.includes("Guava")); // Output: false

// ==========================================
// 3. Removing and Replacing Elements
// ==========================================

// splice() - Remove or replace elements
fruits.splice(2, 1, "Kiwi"); 
// Removes 1 element at index 2 and replaces it with "Kiwi"
console.log("After Splice (Replace):", fruits); // Output: ['Apple', 'Banana', 'Kiwi', 'Orange', 'Pineapple']

// slice() - Returns a portion of an array (does not modify original array)
let slicedFruits = fruits.slice(1, 4);
console.log("Sliced Fruits (1 to 4):", slicedFruits); // Output: ['Banana', 'Kiwi', 'Orange']

// ==========================================
// 4. Combining and Flattening Arrays
// ==========================================

let tropicalFruits = ["Papaya", "Coconut"];
let allFruits = fruits.concat(tropicalFruits);
// Combines two arrays
console.log("After Concat:", allFruits); // Output: ['Apple', 'Banana', 'Kiwi', 'Orange', 'Pineapple', 'Papaya', 'Coconut']

// flat() - Flattens nested arrays (1-level deep)
let nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log("Flat (1 Level):", nestedArray.flat()); // Output: [1, 2, 3, 4, [5, 6]]
console.log("Flat (2 Levels):", nestedArray.flat(2)); // Output: [1, 2, 3, 4, 5, 6]

// ==========================================
// 5. Iterating Over Arrays
// ==========================================

// forEach() - Executes a function for each array element
console.log("Using forEach:");
fruits.forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}`);
});

// map() - Creates a new array by applying a function to each element
let fruitLengths = fruits.map(fruit => fruit.length);
console.log("Fruit Lengths:", fruitLengths); // Output: [5, 6, 4, 6, 9]

// filter() - Filters elements based on a condition
let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log("Long Fruits:", longFruits); // Output: ['Banana', 'Orange', 'Pineapple']

// reduce() - Reduces array to a single value
let totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log("Total Length of Fruits:", totalLength); // Output: Total characters in all fruit names

// ==========================================
// 6. Sorting and Reversing
// ==========================================

// sort() - Sorts array alphabetically
fruits.sort();
console.log("After Sort:", fruits); // Output: ['Apple', 'Banana', 'Kiwi', 'Orange', 'Pineapple']

// reverse() - Reverses array
fruits.reverse();
console.log("After Reverse:", fruits); // Output: ['Pineapple', 'Orange', 'Kiwi', 'Banana', 'Apple']

// ==========================================
// 7. Additional Methods
// ==========================================

// find() - Returns the first matching element
let foundFruit = fruits.find(fruit => fruit.startsWith("B"));
console.log("First Fruit Starting with B:", foundFruit); // Output: Banana

// every() - Checks if all elements meet a condition
let allLong = fruits.every(fruit => fruit.length > 3);
console.log("All Fruits > 3 Chars:", allLong); // Output: true

// some() - Checks if any element meets a condition
let anyShort = fruits.some(fruit => fruit.length < 5);
console.log("Any Fruit < 5 Chars:", anyShort); // Output: true

// join() - Converts array to string
let fruitString = fruits.join(", ");
console.log("Fruits as String:", fruitString); // Output: Pineapple, Orange, Kiwi, Banana, Apple

// ==========================================
// Conclusion:
// ==========================================
// - Arrays in JavaScript have a variety of methods for adding, removing, searching, filtering, and manipulating data.
// - Choose methods depending on whether you want to modify the original array or create a new one.
// - Commonly used methods: `push()`, `pop()`, `splice()`, `slice()`, `map()`, `filter()`, `reduce()`, `sort()`, and `reverse()`.
