// ==========================================
// Map in JavaScript
// ==========================================

// ✅ A **Map** is a collection of key-value pairs.
// ✅ Unlike objects, Maps allow keys of any data type (e.g., objects, functions, numbers).
// ✅ Maps maintain the order of the elements as they were inserted.

// ==========================================
// 1. Creating a Map
// ==========================================

// Using the Map constructor
const myMap = new Map();

// Using set() to add key-value pairs
myMap.set("name", "John");
myMap.set("age", 25);
myMap.set(true, "Boolean Key");
myMap.set(123, "Number Key");
myMap.set({ key: "objectKey" }, "Object Key");
myMap.set(() => {}, "Function Key");

// Display the Map
console.log("Map:", myMap);

// ✅ Output: 
// Map(6) {
//   'name' => 'John',
//   'age' => 25,
//   true => 'Boolean Key',
//   123 => 'Number Key',
//   { key: 'objectKey' } => 'Object Key',
//   () => {} => 'Function Key'
// }

// ==========================================
// 2. Map Methods
// ==========================================

// set() - Adds or updates a key-value pair
myMap.set("age", 30); // Updating an existing key
console.log("Updated Age:", myMap.get("age")); // Output: 30

// get() - Retrieves a value using a key
console.log("Get Name:", myMap.get("name")); // Output: John

// has() - Checks if a key exists
console.log("Has Age Key:", myMap.has("age")); // Output: true
console.log("Has Salary Key:", myMap.has("salary")); // Output: false

// delete() - Removes a key-value pair
myMap.delete("name");
console.log("After Deleting Name:", myMap);

// size - Returns the number of key-value pairs
console.log("Map Size:", myMap.size); // Output: 5

// clear() - Removes all elements
myMap.clear();
console.log("After Clear:", myMap); // Output: Map(0) {}

// ==========================================
// 3. Initializing a Map with Values
// ==========================================

const mapExample = new Map([
  ["firstName", "Jane"],
  ["lastName", "Doe"],
  ["age", 28]
]);
console.log("Initialized Map:", mapExample);

// ==========================================
// 4. Iterating Over a Map
// ==========================================

// Using forEach
console.log("\nUsing forEach:");
mapExample.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Using for...of
console.log("\nUsing for...of:");
for (let [key, value] of mapExample) {
  console.log(`${key}: ${value}`);
}

// Using keys(), values(), and entries()
console.log("\nKeys:", [...mapExample.keys()]); // Output: ['firstName', 'lastName', 'age']
console.log("Values:", [...mapExample.values()]); // Output: ['Jane', 'Doe', 28]
console.log("Entries:", [...mapExample.entries()]); 
// Output: [['firstName', 'Jane'], ['lastName', 'Doe'], ['age', 28]]

// ==========================================
// 5. Difference Between Map and Object
// ==========================================

// ✅ Map allows keys of any data type, while Object
