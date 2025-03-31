// Type Conversion in JavaScript

// String to Number Conversion
let strNum = "123";
let num = Number(strNum); // Using Number()
console.log(num, typeof num); // Output: 123 'number'

// Invalid conversion
let invalidNum = Number("123abc");
console.log(invalidNum); // Output: NaN (Not a Number)

// Number to String Conversion
let numToStr = 456;
let str = String(numToStr); // Using String()
console.log(str, typeof str); // Output: '456' 'string'

// Boolean to String Conversion
let boolVal = true;
let boolStr = String(boolVal);
console.log(boolStr, typeof boolStr); // Output: 'true' 'string'

// String to Boolean Conversion
let strBool1 = Boolean("Hello"); // Non-empty string -> true
let strBool2 = Boolean(""); // Empty string -> false
console.log(strBool1, strBool2); // Output: true false

// Number to Boolean Conversion
let boolNum1 = Boolean(123); // Non-zero number -> true
let boolNum2 = Boolean(0); // Zero -> false
console.log(boolNum1, boolNum2); // Output: true false

// Implicit Conversion (Type Coercion)
console.log('5' + 5); // Output: '55' (String concatenation)
console.log('5' - 5); // Output: 0 (String converted to number)

// Using parseInt and parseFloat
let floatStr = "45.67px";
console.log(parseInt(floatStr)); // Output: 45 (Extracts integer part)
console.log(parseFloat(floatStr)); // Output: 45.67 (Extracts float part)

// Conclusion:
// - Use Number(), String(), and Boolean() for explicit conversions.
// - parseInt() and parseFloat() are helpful for extracting numbers from strings.
// - Be cautious with implicit conversions to avoid unexpected results.