DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_vault;

USE company_vault;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT, 
     name VARCHAR(100) NOT NULL,
     PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT ,
    FOREIGN KEY (department_id) REFERENCES department(id)

);

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT AUTO_INCREMENT,
    manager_id INT AUTO_INCREMENT
    FOREIGN KEY(role_id) REFERENCES role(id)
);