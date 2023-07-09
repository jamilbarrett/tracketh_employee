const inquirer = require('inquirer')
const mysql2 = require('mysql2')


inquirer.prompt = [{
    name: 'view-departments',
    list: []
}]