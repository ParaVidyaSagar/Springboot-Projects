// ==========================================
// Set in JavaScript
// ==========================================

// ✅ A **Set** is a built-in JavaScript object that stores unique values.
// ✅ It can contain values of any data type (numbers, strings, objects, etc.).
// ✅ It does not allow duplicate values.

// ==========================================
// 1. Creating a Set
// ==========================================

console.log("Creating a Set:");
const mySet = new Set([1, 2, 3, 4, 4, 5, 5, 6]);
console.log(mySet); 
// ✅ Output: Set(6) { 1, 2, 3, 4, 5, 6 }
// ✅ Duplicate values are automatically removed.

// Creating an empty Set and adding values
const emptySet = new Set();
emptySet.add("Apple");
emptySet.add("Banana");
emptySet.add("Orange");
emptySet.add("Apple"); // Duplicate, won't be added
console.log(emptySet); 
// ✅ Output: Set(3) { 'Apple', 'Banana', 'Orange' }

// ==========================================
// 2. Methods in Set
// ==========================================

// add() - Add elements to the Set
mySet.add(7);
console.log("After Adding 7:", mySet); // Output: Set(7) { 1, 2, 3, 4, 5, 6, 7 }

// delete() - Remove an element from the Set
mySet.delete(4);
console.log("After Deleting 4:", mySet); // Output: Set(6) { 1, 2, 3, 5, 6, 7 }

// has() - Check if an element exists in the Set
console.log("Set has 3:", mySet.has(3)); // Output: true
console.log("Set has 10:", mySet.has(10)); // Output: false

// size - Get the number of elements in the Set
console.log("Set Size:", mySet.size); // Output: 6

// clear() - Remove all elements from the Set
emptySet.clear();
console.log("After Clear:", emptySet); // Output: Set(0) {}

// ==========================================
// 3. Iterating Over a Set
// ==========================================

// Using forEach()
console.log("Using forEach:");
mySet.forEach(value => console.log(value));

// Using for...of
console.log("Using for...of:");
for (let value of mySet) {
  console.log(value);
}

// ==========================================
// 4. Converting Between Arrays and Sets
// ==========================================

// Convert Set to Array
const setToArray = Array.from(mySet);
console.log("Set to Array:", setToArray); // Output: [1, 2, 3, 5, 6, 7]

// Convert Array to Set (to remove duplicates)
const arrayWithDuplicates = [10, 20, 30, 20, 40, 10];
const uniqueSet = new Set(arrayWithDuplicates);
console.log("Array to Set (Remove Duplicates):", uniqueSet); // Output: Set(4) { 10, 20, 30, 40 }

// ==========================================
// 5. Practical Use Cases of Sets
// ==========================================

// ✅ Removing Duplicates from an Array
const names = ["John", "Jane", "John", "Alex", "Jane"];
const uniqueNames = [...new Set(names)];
console.log("Unique Names:", uniqueNames); // Output: ['John', 'Jane', 'Alex']

// ✅ Checking for Unique Values
const numbersList = [1, 2, 3, 4, 5, 5, 6];
const isUnique = new Set(numbersList).size === numbersList.length;
console.log("Is Array Unique:", isUnique); // Output: false

// ==========================================
// Conclusion:
// ==========================================
// - **Set** stores only unique values, making it great for removing duplicates.
// - Provides efficient operations like `add()`, `delete()`, `has()`, and `clear()`.
// - Supports easy iteration using `forEach()` or `for...of`.
// - Can be converted to and from arrays using `Array.from()` or spread syntax.
// - Ideal for scenarios requiring uniqueness checks, such as managing user IDs, names, or form data.
