// ==========================================
// Array forEach() Method in JavaScript
// ==========================================

// ✅ `forEach()` is an array method used to iterate over elements of an array and execute a callback function for each element.
// ✅ It is generally used for side effects like printing, logging, or performing actions, not for returning values.

const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

// ==========================================
// 1. Basic Usage of forEach()
// ==========================================

console.log("Using forEach to print fruits:");
fruits.forEach(function(fruit) {
  console.log(fruit);
});
// ✅ Output:
// Apple
// Banana
// Mango
// Orange
// Pineapple

// ==========================================
// 2. Using Arrow Function with forEach()
// ==========================================

console.log("\nUsing Arrow Function:");
fruits.forEach(fruit => console.log(fruit));
// ✅ Output: Same as above (Apple, Banana, Mango, Orange, Pineapple)

// ==========================================
// 3. Accessing Index and Array using forEach()
// ==========================================

// `forEach()` provides three parameters:
// - `element`: Current element
// - `index`: Index of the element
// - `array`: The original array

console.log("\nUsing all Parameters:");
fruits.forEach((fruit, index, array) => {
  console.log(`Index: ${index}, Fruit: ${fruit}, Array: ${array}`);
});
// ✅ Output:
// Index: 0, Fruit: Apple, Array: Apple,Banana,Mango,Orange,Pineapple
// Index: 1, Fruit: Banana, Array: Apple,Banana,Mango,Orange,Pineapple
// ...

// ==========================================
// 4. Performing Operations using forEach()
// ==========================================

console.log("\nConverting to Uppercase:");
fruits.forEach((fruit, index) => {
  console.log(`Fruit ${index + 1}: ${fruit.toUpperCase()}`);
});
// ✅ Output: Converts each fruit to uppercase

// ==========================================
// 5. Modifying Array Values using forEach()
// ==========================================

// ⚠️ Note: `forEach()` cannot return values directly. If you need a modified array, use `map()` instead.
// However, you can modify the array elements using their index.

console.log("\nModifying Original Array using forEach:");
fruits.forEach((fruit, index, array) => {
  array[index] = fruit + " 🍎";
});
console.log("Updated Array:", fruits);
// ✅ Output: ['Apple 🍎', 'Banana 🍎', 'Mango 🍎', 'Orange 🍎', 'Pineapple 🍎']

// ==========================================
// 6. Using forEach for Objects in Arrays
// ==========================================

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 22 },
  { name: "Alex", age: 30 }
];

console.log("\nDisplaying User Details:");
users.forEach(user => {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
});
// ✅ Output:
// Name: John, Age: 25
// Name: Jane, Age: 22
// Name: Alex, Age: 30

// ==========================================
// 7. Conclusion
// ==========================================
// - `forEach()` is ideal for executing side effects like logging, updating elements, or interacting with the DOM.
// - It does **not return a new array**. If you need a transformed array, consider using `map()`.
// - It is cleaner and more readable compared to traditional `for` loops.
// - Provides flexibility using element, index, and array within the callback.

