// ==========================================
// Array Destructuring in JavaScript
// ==========================================

// ✅ Destructuring allows you to extract values from an array and assign them to variables in a clean and concise way.

// Example Array
let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

// ==========================================
// 1. Basic Array Destructuring
// ==========================================
// Extract the first two elements from the array
let [firstFruit, secondFruit] = fruits;
console.log("First Fruit:", firstFruit); // Output: Apple
console.log("Second Fruit:", secondFruit); // Output: Banana

// ==========================================
// 2. Skipping Elements Using Comma
// ==========================================
// You can skip unwanted values by using an extra comma
let [, , thirdFruit, fourthFruit] = fruits;
console.log("Third Fruit:", thirdFruit); // Output: Mango
console.log("Fourth Fruit:", fourthFruit); // Output: Orange

// ==========================================
// 3. Using Rest Operator to Collect Remaining Elements
// ==========================================
// The rest operator `...` captures remaining elements as an array
let [first, second, ...remainingFruits] = fruits;
console.log("First:", first); // Output: Apple
console.log("Second:", second); // Output: Banana
console.log("Remaining Fruits:", remainingFruits); // Output: ['Mango', 'Orange', 'Pineapple']

// ==========================================
// 4. Default Values in Destructuring
// ==========================================
// If the array has fewer elements, default values are used
let [fruit1, fruit2, fruit3 = "Guava", fruit4 = "Papaya"] = ["Apple", "Banana"];
console.log("Fruit 1:", fruit1); // Output: Apple
console.log("Fruit 2:", fruit2); // Output: Banana
console.log("Fruit 3 (Default):", fruit3); // Output: Guava
console.log("Fruit 4 (Default):", fruit4); // Output: Papaya

// ==========================================
// 5. Swapping Variables Using Destructuring
// ==========================================
let a = 10, b = 20;
console.log("Before Swap: a =", a, ", b =", b);

// Swap using destructuring
[a, b] = [b, a];
console.log("After Swap: a =", a, ", b =", b); // Output: a = 20, b = 10

// ==========================================
// 6. Destructuring Nested Arrays
// ==========================================
let nestedArray = [1, [2, 3], [4, 5, [6, 7]]];

// Extract values from nested arrays
let [firstNum, [secondNum, thirdNum], [fourthNum, fifthNum, [sixthNum, seventhNum]]] = nestedArray;

console.log("First Number:", firstNum); // Output: 1
console.log("Second Number:", secondNum); // Output: 2
console.log("Third Number:", thirdNum); // Output: 3
console.log("Fourth Number:", fourthNum); // Output: 4
console.log("Fifth Number:", fifthNum); // Output: 5
console.log("Sixth Number:", sixthNum); // Output: 6
console.log("Seventh Number:", seventhNum); // Output: 7

// ==========================================
// Conclusion:
// ==========================================
// - **Array destructuring** simplifies the process of extracting values from arrays.
// - You can assign values to variables directly with fewer lines of code.
// - Supports **default values** to prevent undefined errors.
// - Destructuring is also helpful for **swapping values** without a temporary variable.
// - **Nested destructuring** allows you to access deeply nested elements easily.

