// Ternary Operator in JavaScript
// Syntax: condition ? expressionIfTrue : expressionIfFalse;

// Example 1: Basic Ternary Operator
let age = 20;
let canVote = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(canVote); // Output: Eligible to vote

// Example 2: Check Even or Odd
let number = 7;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result); // Output: Odd

// Example 3: Nested Ternary Operator
let score = 85;
let grade = (score >= 90) ? "A" :
            (score >= 80) ? "B" :
            (score >= 70) ? "C" :
            "Fail";
console.log(`Your grade is: ${grade}`); // Output: B

// Example 4: Using Ternary in Function
function checkEligibility(age) {
  return (age >= 18) ? "You are an adult." : "You are a minor.";
}
console.log(checkEligibility(16)); // Output: You are a minor.
console.log(checkEligibility(25)); // Output: You are an adult.
