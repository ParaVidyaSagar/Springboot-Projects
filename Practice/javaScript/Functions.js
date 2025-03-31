// Functions in JavaScript

// 1. Function Declaration (Named Function)
function greet(name) {
    return `Hello, ${name}!`;
  }
  console.log(greet("John")); // Output: Hello, John!
  
  // 2. Function Expression (Anonymous Function)
  const add = function(a, b) {
    return a + b;
  };
  console.log(add(10, 20)); // Output: 30
  
  // 3. Arrow Function (ES6+)
  const multiply = (a, b) => a * b;
  console.log(multiply(5, 6)); // Output: 30
  
  // Multi-line Arrow Function
  const square = (num) => {
    console.log(`Squaring ${num}`);
    return num * num;
  };
  console.log(square(4)); // Output: 16
  
  // 4. Function with Default Parameters
  function introduce(name = "Guest") {
    console.log(`Welcome, ${name}!`);
  }
  introduce(); // Output: Welcome, Guest!
  introduce("Alice"); // Output: Welcome, Alice!
  
  // 5. Rest Parameters (Handling multiple arguments)
  function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15
  
  // 6. Callback Function (Passing function as argument)
  function calculate(a, b, operation) {
    return operation(a, b);
  }
  const subtract = (a, b) => a - b;
  console.log(calculate(20, 5, subtract)); // Output: 15
  
  // 7. IIFE (Immediately Invoked Function Expression)
  (function() {
    console.log("This function runs immediately!");
  })(); // Output: This function runs immediately!
  
  // 8. Function Returning a Function (Closure Example)
  function outerFunction(x) {
    return function innerFunction(y) {
      return x + y;
    };
  }
  const addTen = outerFunction(10);
  console.log(addTen(5)); // Output: 15
  