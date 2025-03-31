// ==========================================
// For...of Loop with an Array in JavaScript
// ==========================================

// The `for...of` loop is used to iterate over **iterable objects** like Arrays, Strings, Maps, and Sets.
// It is a simpler and cleaner way to access array values directly without needing the index.

// Example Array
let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

// ==========================================
// 1. Using for...of Loop to Iterate Over an Array
// ==========================================
console.log("Using for...of Loop:");
for (let fruit of fruits) {
  console.log(fruit);
}
// ✅ Output: 
// Apple
// Banana
// Mango
// Orange
// Pineapple
// The loop directly accesses each element of the array.


// ==========================================
// 2. Using for...of with Index using entries()
// ==========================================
// `entries()` returns both index and value as a pair (array with two elements).
console.log("\nUsing for...of with Index:");
for (let [index, fruit] of fruits.entries()) {
  console.log(`Index ${index}: ${fruit}`);
}
// ✅ Output:
// Index 0: Apple
// Index 1: Banana
// Index 2: Mango
// Index 3: Orange
// Index 4: Pineapple


// ==========================================
// 3. Using for...of to Iterate Over a String (Strings are Iterable)
// ==========================================
let word = "Hello";
console.log("\nUsing for...of with a String:");
for (let char of word) {
  console.log(char);
}
// ✅ Output: H, e, l, l, o


// ==========================================
// 4. Using for...of to Iterate Over Nested Arrays (Multidimensional)
// ==========================================
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("\nUsing for...of with a Matrix:");
for (let row of matrix) {
  console.log(row);
  for (let num of row) {
    console.log(num);
  }
}
// ✅ Output:
// [1, 2, 3]
// 1
// 2
// 3
// [4, 5, 6]
// 4
// 5
// 6
// [7, 8, 9]
// 7
// 8
// 9


// ==========================================
// 5. Differences Between for...of and for...in
// ==========================================
// `for...of` - Iterates over **values** (use with Arrays, Strings, Maps, Sets)
// `for...in` - Iterates over **keys (indices)** (better for Objects)

console.log("\nUsing for...in Loop (Shows Index):");
for (let index in fruits) {
  console.log(`Index ${index}: ${fruits[index]}`);
}
// ✅ Output:
// Index 0: Apple
// Index 1: Banana
// Index 2: Mango
// Index 3: Orange
// Index 4: Pineapple

// ==========================================
// Conclusion:
// ==========================================
// - Use **for...of** for accessing values directly from arrays or other iterable objects.
// - Use **for...of with entries()** to get both index and value in one go.
// - It's cleaner and easier to read compared to a traditional `for` loop.
// - Use **for...in** if you specifically need to iterate over object keys or array indices.

