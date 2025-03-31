// Constructor Function
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  
    // Method inside Constructor
    this.getFullName = function() {
      return `${this.firstName} ${this.lastName}`;
    };
  }
  
  // Creating Object Instances using 'new'
  let person1 = new Person("John", "Doe", 30);
  let person2 = new Person("Jane", "Smith", 25);
  
  console.log(person1.getFullName()); // Output: John Doe
  console.log(person2.getFullName()); // Output: Jane Smith
  console.log("Person1 Age:", person1.age); // Output: 30
  console.log("Person2 Age:", person2.age); // Output: 25
  