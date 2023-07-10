const inquirer = require('inquirer')
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'the_legion'
});

inquirer.prompt = [{
    input: 'list',
    name: 'overview',
    message: 'Welcome to the LEGIONs management interface , we are everywhere & nowhere. Proceed',


}];

