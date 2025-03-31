// Objects in JavaScript

// 1. Creating an Object using Object Literal
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    address: {
      city: "New York",
      country: "USA"
    },
    // Method inside an object
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  
  console.log("Person Object:", person);
  
  // Accessing Object Properties
  console.log("First Name:", person.firstName); // Using dot notation
  console.log("City:", person.address.city); // Accessing nested object
  console.log("Full Name:", person.getFullName()); // Calling object method
  
  // 2. Creating an Object using Constructor Function
  function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  
  let myCar = new Car("Toyota", "Camry", 2022);
  console.log("Car Object:", myCar);
  
  // 3. Creating an Object using Object.create()
  let animal = {
    sound: "Generic Sound",
    makeSound: function() {
      console.log(this.sound);
    }
  };
  
  let dog = Object.create(animal);
  dog.sound = "Bark";
  dog.makeSound(); // Output: Bark
  
  // 4. Object Methods
  console.log("Object Keys:", Object.keys(person)); // Get all keys
  console.log("Object Values:", Object.values(person)); // Get all values
  console.log("Object Entries:", Object.entries(person)); // Get key-value pairs
  
  // 5. Adding, Modifying, and Deleting Properties
  person.gender = "Male"; // Adding new property
  console.log("After Adding Gender:", person);
  
  person.age = 31; // Modifying property
  console.log("After Modifying Age:", person);
  
  delete person.isEmployed; // Deleting property
  console.log("After Deleting isEmployed:", person);
  