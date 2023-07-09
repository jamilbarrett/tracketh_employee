const inquirer = require('inquirer')
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'company_vault'
});




function startApplication() {
    // Display menu options to the user
    console.log("Welcome to the Employee Management System!");
    console.log("Please select an option:");
    console.log("1. View all departments");
    console.log("2. View all roles");
    console.log("3. View all employees");
    console.log("4. Add a department");
    console.log("5. Add a role");
    console.log("6. Add an employee");
    console.log("7. Update an employee role");
  
    // Wait for user input
    // Call corresponding functions based on user input
  };
