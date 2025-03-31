// Using var (Function-scoped)
var sagar = "John"; // Declaration and initialization
console.log(sagar); // Output: John

var sagar = "Doe"; // Redeclaration allowed
console.log(sagar); // Output: Doe

// Using let (Block-scoped)
let age = 25; // Declaration and initialization
console.log(age); // Output: 25

// let age = 30; // Error: Cannot redeclare block-scoped variable
age = 30; // Allowed: Value reassignment
console.log(age); // Output: 30

// Using const (Block-scoped and immutable)
const country = "India"; // Declaration and initialization
console.log(country); // Output: India

// country = "USA"; // Error: Cannot reassign a constant variable

// Block scope demonstration
if (true) {
  var cityVar = "Mumbai"; // Accessible outside block (function-scoped)
  let cityLet = "Delhi"; // Block-scoped, only accessible inside this block
  const cityConst = "Chennai"; // Block-scoped, cannot be accessed outside
  console.log(cityVar, cityLet, cityConst); // Output: Mumbai Delhi Chennai
}

console.log(cityVar); // Output: Mumbai (var is function-scoped)
// console.log(cityLet); // Error: cityLet is not defined
// console.log(cityConst); // Error: cityConst is not defined

// Conclusion:
// - Use var for function-scoped variables (not recommended)
// - Use let for block-scoped variables that may change
// - Use const for block-scoped constants that don't change