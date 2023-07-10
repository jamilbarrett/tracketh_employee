const inquirer = require('inquirer');
const mysql = require('mysql2');

// Connect to the legion
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'the_legion'
});

function viewAllDepartments() {
  db.query('SELECT * FROM department', function (err, results) {
    if (err) {
      console.error('Error fetching departments:', err);
      return;
    }

    console.table(results);
    return intializeApp();
  });
}

function viewAllRoles() {
  db.query('SELECT * FROM role', function (err, results) {
    if (err) {
      console.error('Error fetching roles:', err);
      return;
    }

    console.table(results);
    return intializeApp();
  });
}

function viewAllEmployees() {
  db.query('SELECT * FROM employee', function (err, results) {
    if (err) {
      console.error('Error fetching employees:', err);
      return;
    }

    console.table(results);
    return intializeApp();
  });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the department:'
      }
    ])
    .then((answers) => {
      const department = {
        name: answers.name
      };

      db.query('INSERT INTO department SET ?', department, function (err, result) {
        if (err) {
          console.error('Error adding department:', err);
          return;
        }

        console.log('Department added successfully!');
        intializeApp()
        
      });
    });
}


function addRole() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Enter the title of the role:'
      },
      {
        type: 'input',
        name: 'salary',
        message: 'Enter the salary for the role:'
      },
      {
        type: 'input',
        name: 'departmentId',
        message: 'Enter the department ID for the role:'
      },
      
    ])
    .then((answers) => {
      const role = {
        title: answers.title,
        salary: answers.salary,
        department_id: answers.departmentId
      };

      db.query('INSERT INTO role SET ?', role, function (err, result) {
        if (err) {
          console.error('Error adding role:', err);
          return;
        }

        console.log('Role added successfully!');
        return intializeApp();
      });
    });
}


function addEmployee() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'firstName',
        message: 'Enter the first name of the employee:'
      },
      {
        type: 'input',
        name: 'lastName',
        message: 'Enter the last name of the employee:'
      },
      
    ])
    .then((answers) => {
      const employee = {
        first_name: answers.firstName,
        last_name: answers.lastName,
        role_id: answers.roleId,
        manager_id: answers.managerId
      };

      db.query('INSERT INTO employee SET ?', employee, function (err, result) {
        if (err) {
          console.error('Error adding employee:', err);
          return;
        }

        console.log('Employee added successfully!');
        return intializeApp()
      });
    });
}

// Function to update an employee's role
function updateEmployeeRole() {
  // Fetch all employees to prompt user for selection
  db.query('SELECT * FROM employee', function (err, results) {
    if (err) {
      console.error('Error fetching employees:', err);
      return;
    }

    const employeeChoices = results.map((employee) => ({
      name: `${employee.first_name} ${employee.last_name}`,
      value: employee.id
    }));

    // Prompt user to select employee of the legion
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'employeeId',
          message: 'Select the employee to update:',
          choices: employeeChoices
        },
        {
          type: 'input',
          name: 'roleId',
          message: 'Enter the new role ID for the employee:'
        }
      ])
      .then((answers) => {
        const employeeId = answers.employeeId;
        const roleId = answers.roleId;

        db.query(
          'UPDATE employee SET role_id = ? WHERE id = ?',
          [roleId, employeeId],
          function (err, result) {
            if (err) {
              console.error('Error updating employee role:', err);
              return;
            }

            console.log('Employee role updated successfully!');
            return intializeApp()
            
          }
        );
      });
  });
}

// Prompt user with list of legion options
function intializeApp() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
      ]
    }
  ])
  .then((answers) => {
    switch (answers.action) {
      case 'View all departments':
        viewAllDepartments();
        break;
      case 'View all roles':
        viewAllRoles();
        break;
      case 'View all employees':
        viewAllEmployees();
        break;
      case 'Add a department':
        addDepartment();
        break;
      case 'Add a role':
        addRole();
        break;
      case 'Add an employee':
        addEmployee();
        break;
      case 'Update an employee role':
        updateEmployeeRole();
        break;
      case 'Exit':
        console.log('Exiting the application.');
        db.end(); // Close the database connection
        process.exit(0); // Exit the application
    }
  });
}

intializeApp()