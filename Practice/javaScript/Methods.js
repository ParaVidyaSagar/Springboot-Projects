// Methods in JavaScript

// 1. Object Method (Function inside an Object)
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  
    // Method to return full name
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`;
    },
  
    // Method using Arrow Function
    showAge: () => {
      console.log("Age cannot be accessed using arrow function: ", this.age); // Undefined, because 'this' doesn't work in arrow functions
    },
  
    // Method to Update Age
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Updated Age: ${this.age}`);
    }
  };
  
  console.log("Full Name:", person.getFullName()); // Output: John Doe
  person.showAge(); // Output: Undefined
  person.updateAge(35); // Output: Updated Age: 35
  
  // 2. Constructor Function with Methods
  function Car(brand, model) {
    this.brand = brand;
    this.model = model;
  
    // Method to display Car Details
    this.getDetails = function() {
      return `Brand: ${this.brand}, Model: ${this.model}`;
    };
  }
  
  let myCar = new Car("Toyota", "Camry");
  console.log(myCar.getDetails()); // Output: Brand: Toyota, Model: Camry
  
  // 3. Class with Methods
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    // Method to Calculate Area
    getArea() {
      return this.width * this.height;
    }
  
    // Method to Calculate Perimeter
    getPerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  let rect = new Rectangle(10, 5);
  console.log("Area:", rect.getArea()); // Output: 50
  console.log("Perimeter:", rect.getPerimeter()); // Output: 30
  
  // 4. Static Method (Accessed without Object Instance)
  class MathUtils {
    static add(a, b) {
      return a + b;
    }
  }
  
  console.log("Addition:", MathUtils.add(5, 10)); // Output: 15
  
  // 5. Prototype Method (Adding a Method to Existing Object Prototype)
  Car.prototype.displayWelcome = function() {
    console.log(`Welcome to your ${this.brand} ${this.model}!`);
  };
  myCar.displayWelcome(); // Output: Welcome to your Toyota Camry!
  