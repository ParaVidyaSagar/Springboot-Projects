// Complex Object with Nested Objects and Arrays

let company = {
    name: "Tech Solutions",
    location: "New York",
    employees: [
      {
        name: "John Doe",
        age: 30,
        position: "Software Engineer",
        skills: ["JavaScript", "React", "Node.js"]
      },
      {
        name: "Jane Smith",
        age: 28,
        position: "UI/UX Designer",
        skills: ["Figma", "Sketch", "Photoshop"]
      }
    ],
    projects: {
      current: "E-commerce Platform",
      completed: ["Inventory System", "Booking App"],
    },
    details: {
      founded: 2015,
      revenue: "10M USD"
    }
  };
  
  console.log("Original Company Object:", company);
  
  // Accessing Nested Object Properties
  console.log("First Employee Name:", company.employees[0].name);
  console.log("Second Employee Skillset:", company.employees[1].skills.join(", "));
  console.log("Current Project:", company.projects.current);
  
  // Deleting Properties
  delete company.details.revenue; // Deleting nested property
  console.log("After Deleting Revenue:", company);
  
  delete company.employees[1].position; // Deleting employee's position
  console.log("After Deleting Employee Position:", company);
  
  // Deleting an Entire Object Property
  delete company.projects; 
  console.log("After Deleting Projects:", company);
  
  // Checking if Property Exists using 'in' Operator
  console.log("Does 'projects' exist?", 'projects' in company); // false
  console.log("Does 'name' exist?", 'name' in company); // true
  