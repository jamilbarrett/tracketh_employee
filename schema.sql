DROP DATABASE IF EXISTS the_legion;
CREATE DATABASE the_legion;

USE DATABASE the_legion;

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30)
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salaray DECIMAL,
    department_id INT 
    PRIMARY KEY (id)
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT AUTO_INCREMENT,
    manager_id INT AUTO_INCREMENT,
    PRIMARY KEY (id)
    FOREIGN KEY (role_id) REFERENCES role(id)
);