// Arithmetic Operations in JavaScript

let a = 10;
let b = 5;

// Addition (+)
let sum = a + b;
console.log(`Addition: ${a} + ${b} = ${sum}`); // Output: 10 + 5 = 15

// Subtraction (-)
let difference = a - b;
console.log(`Subtraction: ${a} - ${b} = ${difference}`); // Output: 10 - 5 = 5

// Multiplication (*)
let product = a * b;
console.log(`Multiplication: ${a} * ${b} = ${product}`); // Output: 10 * 5 = 50

// Division (/)
let quotient = a / b;
console.log(`Division: ${a} / ${b} = ${quotient}`); // Output: 10 / 5 = 2

// Modulus (%) - Remainder of division
let remainder = a % b;
console.log(`Modulus: ${a} % ${b} = ${remainder}`); // Output: 10 % 5 = 0

// Exponentiation (**)
let power = a ** b;
console.log(`Exponentiation: ${a} ** ${b} = ${power}`); // Output: 10 ** 5 = 100000

// Increment (++): Increases by 1
let x = 7;
console.log(`Original x: ${x}`);
console.log(`Post-increment: ${x++}`); // Output: 7 (Increments after this line)
console.log(`After Post-increment: ${x}`); // Output: 8

// Decrement (--): Decreases by 1
let y = 12;
console.log(`Original y: ${y}`);
console.log(`Pre-decrement: ${--y}`); // Output: 11 (Decrements immediately)

// Special Cases
console.log(`10 / 0: ${10 / 0}`); // Output: Infinity
console.log(`-10 / 0: ${-10 / 0}`); // Output: -Infinity
console.log(`0 / 0: ${0 / 0}`); // Output: NaN

// Conclusion:
// - Use +, -, *, /, %, and ** for basic arithmetic operations.
// - ++ and -- for increment and decrement.
// - Be cautious with division by zero, which results in Infinity or NaN.