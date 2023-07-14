DROP DATABASE IF EXISTS the_legion;
CREATE DATABASE the_legion;
USE the_legion;

CREATE TABLE department (
    id INT AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    PRIMARY KEY (id),
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
    ON DELETE CASCADE;
);

CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employee(id)
    ON DELETE CASCADE;
);
