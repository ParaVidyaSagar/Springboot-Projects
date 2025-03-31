// Different Naming Conventions for Variables in JavaScript

// 1. Camel Case (Most Common for Variables and Functions)
let myFirstName = "John"; // First letter lowercase, subsequent words capitalized
console.log(myFirstName);

// 2. Pascal Case (Common for Classes and Constructors)
let MyFirstName = "Doe"; // Every word starts with a capital letter
console.log(MyFirstName);

// 3. Snake Case (Often Used in Config Files or Constants)
let my_first_name = "Jane"; // Words separated by underscores
console.log(my_first_name);

// 4. Kebab Case (Used in URLs or CSS Class Names, Not Valid in JS)
// let my-first-name = "Mike"; // Invalid in JS, but common in HTML or CSS

// 5. Uppercase Snake Case (Usually for Constants)
const MAX_LIMIT = 100; // All uppercase with underscores
console.log(MAX_LIMIT);

// 6. Hungarian Notation (Prefix to Indicate Type - Rarely Used)
let strName = "Alex"; // 'str' indicates string type
let numAge = 30; // 'num' indicates number type
console.log(strName, numAge);

// 7. Special Characters in Variable Names
let $price = 99.99; // $ is valid, often used in libraries like jQuery
let _privateVariable = "Secret"; // _ is valid, often used for private variables
console.log($price, _privateVariable);

// 8. Pre-Increment and Post-Increment
let x = 5;
console.log(`Original x: ${x}`);

// Pre-Increment (++x) - Increments first, then returns the value
console.log(`Pre-Increment: ${++x}`); // Output: 6
console.log(`After Pre-Increment: ${x}`); // Output: 6

// Post-Increment (x++) - Returns the value first, then increments
console.log(`Post-Increment: ${x++}`); // Output: 6
console.log(`After Post-Increment: ${x}`); // Output: 7

// Note: Variable names cannot start with numbers or use symbols other than $ and _.
// Examples of Invalid Variables:
// let 123name = "Invalid"; // Error
// let name@ = "Invalid"; // Error

// Conclusion:
// - Use camelCase for variables and functions.
// - Use PascalCase for classes and constructor functions.
// - Use snake_case or UPPER_SNAKE_CASE for constants.
// - Avoid kebab-case in JS, it is invalid.
// - Hungarian notation is outdated and not commonly used.
// - Special characters like $ and _ are allowed but should be used with intent.
// - Understand how pre-increment and post-increment work to avoid logical errors.
