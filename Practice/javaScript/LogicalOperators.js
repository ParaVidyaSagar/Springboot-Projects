// Logical Operators in JavaScript

let x = true;
let y = false;

// 1. Logical AND (&&) - Returns true if both operands are true
console.log(x && y); // false (Both are not true)
console.log(x && true); // true

// 2. Logical OR (||) - Returns true if at least one operand is true
console.log(x || y); // true (One of them is true)
console.log(false || y); // false

// 3. Logical NOT (!) - Inverts the boolean value
console.log(!x); // false (Inverts true to false)
console.log(!y); // true (Inverts false to true)

// Combining logical operators
let a = 10;
let b = 20;
let c = 30;

console.log((a < b) && (b < c)); // true (Both conditions are true)
console.log((a > b) || (b < c)); // true (Second condition is true)
console.log(!(a > b)); // true (Negates false to true)
