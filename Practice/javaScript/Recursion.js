// ==========================================
// Recursion in JavaScript
// ==========================================

// ✅ Recursion is a process where a function calls itself to solve smaller subproblems.
// ✅ It is useful for problems like factorials, Fibonacci numbers, tree traversals, and more.
// ✅ Every recursive function needs:
//    - A **Base Case** (Stopping Condition)
//    - A **Recursive Case** (Where the function calls itself)

// ==========================================
// 1. Example: Factorial Using Recursion
// ==========================================

// Factorial Formula: n! = n * (n-1) * (n-2) * ... * 1
// Example: 5! = 5 * 4 * 3 * 2 * 1 = 120

function factorial(n) {
    // Base Case: Factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
      return 1;
    }
    // Recursive Case: n * factorial(n - 1)
    return n * factorial(n - 1);
  }
  
  console.log("Factorial of 5:", factorial(5)); // Output: 120
  
  // ==========================================
  // 2. Example: Fibonacci Using Recursion
  // ==========================================
  
  // Fibonacci Sequence: F(n) = F(n-1) + F(n-2)
  // Example: 0, 1, 1, 2, 3, 5, 8, 13...
  
  function fibonacci(n) {
    // Base Case
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    // Recursive Case
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  console.log("Fibonacci of 7:", fibonacci(7)); // Output: 13
  
  // ==========================================
  // 3. Example: Sum of Array Using Recursion
  // ==========================================
  
  // Sum Formula: Sum([1,2,3]) = 1 + Sum([2,3])
  
  function sumArray(arr) {
    // Base Case: If array is empty, return 0
    if (arr.length === 0) {
      return 0;
    }
    
    // Recursive Case: First element + Sum of the rest
    return arr[0] + sumArray(arr.slice(1));
  }
  
  console.log("Sum of Array [1,2,3,4,5]:", sumArray([1, 2, 3, 4, 5])); // Output: 15
  
  // ==========================================
  // 4. Example: Power of a Number Using Recursion
  // ==========================================
  
  // Formula: power(x, n) = x^n = x * x^(n-1)
  
  function power(x, n) {
    // Base Case: Any number to the power of 0 is 1
    if (n === 0) {
      return 1;
    }
    
    // Recursive Case: Multiply x with power(x, n-1)
    return x * power(x, n - 1);
  }
  
  console.log("2 to the Power of 4:", power(2, 4)); // Output: 16
  
  // ==========================================
  // 5. Important Points to Note About Recursion
  // ==========================================
  
  // ✅ Every recursion must have a clear base case, or it will lead to infinite recursion.
  // ✅ Recursive solutions are often cleaner and easier to write for naturally recursive problems.
  // ✅ However, recursion can lead to memory issues (stack overflow) for large inputs.
  // ✅ In some cases, an iterative approach may be more efficient.
  
  // Example: Infinite Recursion (Incorrect)
  // function infinite() {
  //   console.log("This will lead to a stack overflow");
  //   infinite(); // No base case
  // }
  // infinite(); // ⚠️ This will crash the program
  
  // ==========================================
  // Conclusion:
  // ==========================================
  // - Recursion is ideal for solving problems like factorials, Fibonacci sequences, and traversing data structures.
  // - Always define a base case to stop the recursion.
  // - Use recursion only when it simplifies the code; otherwise, consider iterative solutions for large inputs.
  // - Understanding how recursion works is essential for coding interviews and problem-solving.
  